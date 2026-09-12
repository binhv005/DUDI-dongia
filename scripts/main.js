/**
 * DUDI SOFTWARE - Interactive Core Scripts
 * Version: 1.0 (2026-09-10)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. RELOAD PHẢI VỀ ĐẦU TRANG (HERO)
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
  });

  // Set minimum date for form input to today
  const startDateInput = document.getElementById('startDate');
  if (startDateInput) {
    const today = new Date().toISOString().split('T')[0];
    startDateInput.setAttribute('min', today);
  }

  // 2. SCROLL SPY & VERTICAL SCREEN TRACKER (01 - 13)
  const sections = document.querySelectorAll('.snap-section');
  const trackerDots = document.querySelectorAll('.tracker-dot-wrap');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -20% 0px',
    threshold: 0.3
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const sectionIndex = entry.target.getAttribute('data-section-index');

        // Update Tracker Dots
        trackerDots.forEach(dot => {
          if (dot.getAttribute('data-target') === id) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });

        // Update Header Nav Links
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // Tracker click navigation
  trackerDots.forEach(dotWrap => {
    dotWrap.addEventListener('click', () => {
      const targetId = dotWrap.getAttribute('data-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3. ROLE-BASED PRICING EXPLORER -> FORM SYNC
  const roleCards = document.querySelectorAll('.role-pricing-card');
  const roleCheckboxes = {
    junior: document.getElementById('role-junior'),
    mid: document.getElementById('role-mid'),
    senior: document.getElementById('role-senior'),
    uiux: document.getElementById('role-uiux'),
    pm: document.getElementById('role-pm')
  };

  roleCards.forEach(card => {
    card.addEventListener('click', () => {
      const roleKey = card.getAttribute('data-role');

      // Highlight card
      roleCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      // Check corresponding role checkbox in form
      if (roleCheckboxes[roleKey]) {
        // Reset others or keep selected
        Object.values(roleCheckboxes).forEach(cb => { if (cb) cb.checked = false; });
        roleCheckboxes[roleKey].checked = true;
      }

      // Smooth scroll to lead form section
      const formSection = document.getElementById('s11-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 4. FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    const answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other accordions
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherAns = otherItem.querySelector('.faq-answer');
        if (otherAns) otherAns.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // Open first FAQ by default
  if (faqItems.length > 0) {
    faqItems[0].classList.add('active');
    const firstAns = faqItems[0].querySelector('.faq-answer');
    if (firstAns) firstAns.style.maxHeight = firstAns.scrollHeight + 'px';
  }

  // 5. LEAD FORM VALIDATION & ANTI-SPAM
  const leadForm = document.getElementById('backlogLeadForm');
  const formStatus = document.getElementById('formStatus');
  let formSubmitTime = Date.now();

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Anti-spam check (minimum 2.5 seconds to fill form)
      if (Date.now() - formSubmitTime < 2500) {
        showStatus('error', 'Hệ thống phát hiện thao tác quá nhanh. Vui lòng thử lại sau vài giây.');
        return;
      }

      const fullname = document.getElementById('fullname').value.trim();
      const company = document.getElementById('company').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const startDate = document.getElementById('startDate').value;
      const backlog = document.getElementById('backlog').value.trim();

      // Validate Full Name (2 - 80 chars)
      if (fullname.length < 2 || fullname.length > 80) {
        showStatus('error', 'Họ và tên phải có độ dài từ 2 đến 80 ký tự.');
        return;
      }

      // Validate Company (2 - 120 chars)
      if (company.length < 2 || company.length > 120) {
        showStatus('error', 'Tên công ty phải có độ dài từ 2 đến 120 ký tự.');
        return;
      }

      // Validate Phone / Zalo (9 - 12 digits)
      const phoneRegex = /^[0-9]{9,12}$/;
      if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
        showStatus('error', 'Số điện thoại hoặc Zalo phải gồm 9 đến 12 chữ số.');
        return;
      }

      // Validate Start Date (not in past)
      if (startDate) {
        const selectedDate = new Date(startDate);
        const todayZero = new Date();
        todayZero.setHours(0,0,0,0);
        if (selectedDate < todayZero) {
          showStatus('error', 'Thời điểm bắt đầu không được là ngày trong quá khứ.');
          return;
        }
      }

      // Validate Backlog Description (20 - 1500 chars)
      if (backlog.length < 20 || backlog.length > 1500) {
        showStatus('error', 'Mô tả backlog cần có độ dài từ 20 đến 1500 ký tự.');
        return;
      }

      // Loading state
      const submitBtn = leadForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Đang gửi thông tin...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showStatus('success', 'DUDI đã nhận nhu cầu và sẽ xác nhận vai trò, phạm vi và mức giá trước khi bắt đầu.');
        leadForm.reset();
        // Reset submit timer
        formSubmitTime = Date.now();
      }, 1000);
    });
  }

  function showStatus(type, message) {
    if (!formStatus) return;
    formStatus.className = `form-status-msg ${type}`;
    formStatus.textContent = message;
    formStatus.style.display = 'block';
  }

  // 6. MOBILE MENU TOGGLE
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '64px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = 'rgba(10, 12, 18, 0.98)';
        navMenu.style.padding = '20px';
        navMenu.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
      }
    });

    // Close mobile menu upon clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.style.display = 'none';
        }
      });
    });
  }
});
