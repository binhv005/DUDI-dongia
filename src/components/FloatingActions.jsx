import React, { useState, useEffect } from 'react';
import { companyDetails } from '../data/navigation';

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  useEffect(() => {
    const checkScroll = () => {
      const heroEl = document.getElementById('s02-hero');
      if (heroEl) {
        const heroBottom = heroEl.getBoundingClientRect().bottom;
        setShowScrollTop(heroBottom < window.innerHeight * 0.4);
      } else {
        setShowScrollTop(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePhoneClick = (e) => {
    // Detect if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     (window.innerWidth <= 768 && window.matchMedia('(pointer: coarse)').matches);

    if (!isMobile) {
      // Desktop: Prevent default call and copy phone number to clipboard
      e.preventDefault();
      const phoneNumber = '0909163821';
      navigator.clipboard.writeText(phoneNumber).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }).catch(() => {
        // Fallback
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
    // If mobile: normal <a href="tel:0909163821"> executes
  };

  return (
    <div style={styles.floatingContainer} aria-label="Kênh liên hệ nhanh">
      {/* Toast Notification when Copied on Desktop */}
      {copied && (
        <div style={styles.toast}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>Đã sao chép: <strong>0909 163 821</strong></span>
        </div>
      )}

      {/* 1. Scroll To Top Button (Hidden at Hero, appears when scrolling below Hero) */}
      {showScrollTop && (
        <div style={styles.btnWrapper}>
          {hoveredBtn === 'scroll' && (
            <div style={styles.tooltip}>Về đầu trang</div>
          )}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => setHoveredBtn('scroll')}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              ...styles.scrollUpBtn,
              transform: hoveredBtn === 'scroll' ? 'scale(1.1)' : 'scale(1)'
            }}
            title="Cuộn lên đầu trang"
            aria-label="Cuộn lên đầu trang"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      )}

      {/* 2. Hotline Call Button (Red Gradient Circle with Desktop Copy & Mobile Call) */}
      <div style={styles.btnWrapper}>
        {hoveredBtn === 'phone' && !copied && (
          <div style={styles.tooltip}>
            Hotline: 0909 163 821 (Nhấp để sao chép)
          </div>
        )}
        <a
          href={companyDetails.hotlineTel}
          onClick={handlePhoneClick}
          onMouseEnter={() => setHoveredBtn('phone')}
          onMouseLeave={() => setHoveredBtn(null)}
          style={{
            ...styles.phoneBtn,
            transform: hoveredBtn === 'phone' ? 'scale(1.12)' : 'scale(1)',
            boxShadow: hoveredBtn === 'phone' 
              ? '0 10px 28px rgba(229, 46, 46, 0.65)' 
              : '0 6px 20px rgba(229, 46, 46, 0.5)'
          }}
          title="Hotline: 0909 163 821"
          aria-label="Gọi Hotline"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>
      </div>

      {/* 3. Zalo Button (Blue Circle with Zalo text) */}
      <div style={styles.btnWrapper}>
        {hoveredBtn === 'zalo' && (
          <div style={styles.tooltip}>Chat Zalo Kỹ Thuật</div>
        )}
        <a
          href={companyDetails.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredBtn('zalo')}
          onMouseLeave={() => setHoveredBtn(null)}
          style={{
            ...styles.zaloBtn,
            transform: hoveredBtn === 'zalo' ? 'scale(1.12)' : 'scale(1)',
            boxShadow: hoveredBtn === 'zalo' 
              ? '0 10px 28px rgba(0, 102, 238, 0.6)' 
              : '0 6px 20px rgba(0, 102, 238, 0.45)'
          }}
          title="Chat Zalo Kỹ Thuật"
          aria-label="Chat Zalo"
        >
          <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.84rem', letterSpacing: '0.2px' }}>
            Zalo
          </span>
        </a>
      </div>
    </div>
  );
}

const styles = {
  floatingContainer: {
    position: 'fixed',
    right: '24px',
    bottom: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    zIndex: 9999,
    alignItems: 'center'
  },
  btnWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tooltip: {
    position: 'absolute',
    right: '58px',
    background: 'rgba(10, 14, 24, 0.94)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    color: '#FFFFFF',
    fontSize: '0.78rem',
    fontWeight: 600,
    padding: '5px 12px',
    borderRadius: '6px',
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35)',
    pointerEvents: 'none',
    animation: 'fadeIn 0.18s ease'
  },
  toast: {
    position: 'absolute',
    right: '58px',
    bottom: '60px',
    background: '#0F172A',
    border: '1px solid #10B981',
    color: '#FFFFFF',
    padding: '8px 14px',
    borderRadius: '8px',
    fontSize: '0.82rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    whiteSpace: 'nowrap',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
    zIndex: 10000,
    animation: 'fadeIn 0.2s ease'
  },
  scrollUpBtn: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    background: 'rgba(25, 30, 45, 0.95)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  phoneBtn: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #FF3B30 0%, #D91B1B 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  zaloBtn: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #0088FF 0%, #0066EE 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
  }
};
