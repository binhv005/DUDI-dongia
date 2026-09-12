import React from 'react';
import { companyDetails } from '../data/navigation';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="s13-footer" className="section-wrapper footer-section" style={styles.footerWrapper}>
      <div className="section-container" style={styles.container}>
        <div style={styles.topGrid}>
          {/* Left Column: Company Info */}
          <div style={styles.leftCol}>
            <div style={styles.brandRow}>
              <img src="/logo.webp" alt="DUDI Logo" width="34" height="34" style={{ borderRadius: '6px', height: '34px', width: 'auto' }} />
              <span style={styles.brandText}>
                DUDI <span style={{ color: '#E52E2E' }}>Software</span>
              </span>
            </div>

            <div style={styles.companyName}>
              Công ty TNHH Giải Pháp Phần Mềm DUDI
            </div>

            <p style={styles.companyDesc}>
              Đơn vị cung cấp giải pháp thiết kế website giới thiệu doanh nghiệp chuẩn mực, tối ưu trải nghiệm người dùng và chuyển giao công nghệ toàn diện.
            </p>

            <div style={styles.divider} />

            <div style={styles.metaRow}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E52E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span><strong>Mã số thuế:</strong> {companyDetails.taxCode}</span>
            </div>

            <div style={styles.metaRow}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E52E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span><strong>Địa chỉ:</strong> {companyDetails.address}</span>
            </div>
          </div>

          {/* Middle Column: Direct Contacts */}
          <div style={styles.midCol}>
            <div style={styles.colHeader}>LIÊN HỆ TRỰC TIẾP</div>

            <div style={styles.contactList}>
              <a href={companyDetails.hotlineTel} style={styles.contactItem}>
                <div style={styles.iconCircle}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E52E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span>Hotline: {companyDetails.hotline}</span>
              </a>

              <a href={companyDetails.emailMailto} style={styles.contactItem}>
                <div style={styles.iconCircle}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E52E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <span>{companyDetails.email}</span>
              </a>

              <a href={companyDetails.zaloUrl} target="_blank" rel="noopener noreferrer" style={styles.contactItem}>
                <div style={styles.iconCircle}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E52E2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <span>Zalo OA: {companyDetails.hotline}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Terms & Scroll Top */}
          <div style={styles.rightCol}>
            <div style={styles.colHeader}>ĐIỀU KHOẢN & MINH BẠCH</div>

            <ul style={styles.termsList}>
              <li>• Minh bạch phạm vi theo hợp đồng</li>
              <li>• Nghiệm thu theo từng mốc kỹ thuật</li>
              <li>• Hỗ trợ xử lý lỗi phát sinh sau bàn giao</li>
              <li>• Bảo mật thông tin khách hàng</li>
            </ul>

            <button onClick={scrollToTop} style={styles.scrollTopBtn}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
              <span>Về đầu trang</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomRow}>
          <div style={styles.copyright}>
            Copyright © 2026 DUDI Software. All rights reserved.
          </div>

          <div style={styles.verifiedBadge}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="9 12 11 14 15 10"></polyline>
            </svg>
            <span>Thông tin đăng ký kinh doanh chính thức</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footerWrapper: {
    minHeight: 'auto',
    height: '100svh',
    background: '#07090E',
    color: '#CBD5E1',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '24px 0 16px 0',
    height: '100%'
  },
  topGrid: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1.1fr 1fr',
    gap: '40px',
    alignItems: 'flex-start'
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  brandRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '16px'
  },
  brandText: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#FFFFFF',
    letterSpacing: '0.5px'
  },
  companyName: {
    fontSize: '0.98rem',
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: '8px'
  },
  companyDesc: {
    fontSize: '0.84rem',
    color: '#94A3B8',
    lineHeight: 1.55,
    maxWidth: '440px',
    marginBottom: '16px'
  },
  divider: {
    width: '100%',
    maxWidth: '440px',
    height: '1px',
    background: 'rgba(255, 255, 255, 0.1)',
    marginBottom: '14px'
  },
  metaRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.82rem',
    color: '#94A3B8',
    marginBottom: '8px'
  },
  midCol: {
    display: 'flex',
    flexDirection: 'column'
  },
  colHeader: {
    fontSize: '0.92rem',
    fontWeight: 800,
    color: '#FFFFFF',
    letterSpacing: '0.5px',
    marginBottom: '18px',
    textTransform: 'uppercase'
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#E2E8F0',
    fontSize: '0.86rem',
    textDecoration: 'none',
    transition: 'color 0.2s ease'
  },
  iconCircle: {
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  termsList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    color: '#94A3B8',
    fontSize: '0.84rem',
    marginBottom: '20px'
  },
  scrollTopBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: 'var(--radius-sm)',
    background: 'rgba(255, 255, 255, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.14)',
    color: '#FFFFFF',
    fontSize: '0.84rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '18px',
    fontSize: '0.8rem',
    color: '#64748B'
  },
  copyright: {
    color: '#64748B'
  },
  verifiedBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#94A3B8',
    fontSize: '0.8rem'
  }
};
