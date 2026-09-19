import React, { useState, useEffect } from "react";
import { companyDetails } from "../data/navigation";
import AIChatModal from "./AIChatModal";

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

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
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     (window.innerWidth <= 768 && window.matchMedia('(pointer: coarse)').matches);

    if (!isMobile) {
      e.preventDefault();
      const phoneNumber = '0909163821';
      navigator.clipboard.writeText(phoneNumber).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }).catch(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <>
      {/* Floating AI Chatbot Modal */}
      <AIChatModal 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />

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

        {/* 1. Floating Robot Mascot AI Chat Button (Ở TRÊN CÙNG NHẤT) */}
        <div style={styles.btnWrapper}>
          {hoveredBtn === 'ai' && (
            <div style={styles.tooltip}>
              ✨ Trợ lý Báo giá DUDI
            </div>
          )}
          <button
            type="button"
            data-chat-toggle="true"
            onClick={() => setIsChatOpen((prev) => !prev)}
            onMouseEnter={() => setHoveredBtn('ai')}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              ...styles.aiBtn,
              transform: hoveredBtn === 'ai' || isChatOpen ? 'scale(1.12)' : 'scale(1)',
              boxShadow: hoveredBtn === 'ai' || isChatOpen
                ? '0 10px 28px rgba(229, 46, 46, 0.65)' 
                : '0 6px 20px rgba(229, 46, 46, 0.5)',
              outline: isChatOpen ? '2px solid #FF3B30' : 'none'
            }}
            title="Chat với Trợ lý Báo giá DUDI"
            aria-label="Mở Trợ lý Báo giá AI"
          >
            <div style={styles.aiImgContainer}>
              <img
                src="/robot-mascot.webp"
                alt="Trợ lý AI DUDI"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            {/* Green Online Dot */}
            <span style={styles.aiOnlineDot} />
          </button>
        </div>

        {/* 2. Scroll To Top Button */}
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          </div>
        )}

        {/* 3. Hotline Call Button */}
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

        {/* 4. Zalo Button */}
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
    </>
  );
}

export default FloatingActions;

const styles = {
  floatingContainer: {
    position: 'fixed',
    right: 'clamp(18px, 2vw, 32px)',
    bottom: 'clamp(18px, 2.5vh, 32px)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(10px, 1.2vh, 16px)',
    zIndex: 9999,
    alignItems: 'center'
  },
  btnWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  aiBtn: {
    position: 'relative',
    width: 'clamp(46px, 3.4vw, 54px)',
    height: 'clamp(46px, 3.4vw, 54px)',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #FF3B30 0%, #D91B1B 100%)',
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  aiImgContainer: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: '#FFFFFF',
    padding: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  aiOnlineDot: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '12px',
    height: '12px',
    background: '#10B981',
    border: '2px solid #FFFFFF',
    borderRadius: '50%'
  },
  scrollUpBtn: {
    width: 'clamp(42px, 3.2vw, 50px)',
    height: 'clamp(42px, 3.2vw, 50px)',
    borderRadius: '50%',
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    color: '#0F172A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  phoneBtn: {
    width: 'clamp(46px, 3.4vw, 54px)',
    height: 'clamp(46px, 3.4vw, 54px)',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #FF3B30 0%, #D91B1B 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  zaloBtn: {
    width: 'clamp(46px, 3.4vw, 54px)',
    height: 'clamp(46px, 3.4vw, 54px)',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #0088FF 0%, #0066EE 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  tooltip: {
    position: 'absolute',
    right: 'calc(100% + 12px)',
    background: 'rgba(10, 14, 24, 0.94)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    color: '#FFFFFF',
    fontSize: 'clamp(0.74rem, 0.8vw, 0.84rem)',
    fontWeight: 600,
    padding: '6px 12px',
    borderRadius: '8px',
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35)',
    pointerEvents: 'none',
    animation: 'pageFadeIn 0.18s ease'
  },
  toast: {
    position: 'fixed',
    bottom: 'clamp(80px, 12vh, 120px)',
    right: 'clamp(18px, 2.5vw, 36px)',
    background: '#FFFFFF',
    color: '#0F172A',
    padding: '10px 18px',
    borderRadius: '10px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: 'clamp(0.8rem, 0.88vw, 0.92rem)',
    border: '1px solid #10B981',
    zIndex: 10000,
    animation: 'pageFadeIn 0.3s ease'
  }
};