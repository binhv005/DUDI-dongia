import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { companyDetails } from '../data/navigation';

export function FinalCTA({ onNavigate }) {
  return (
    <SectionWrapper id="s12-cta" className="final-cta-section">
      <div className="final-cta-box" style={styles.box}>
        <div style={styles.content}>
          <div className="section-tag" style={styles.badge}>
            <span className="section-tag-dot"></span> Sẵn Sàng Triển Khai
          </div>

          <h2 style={styles.title}>Bạn Có Backlog Cần Thêm Đội Kỹ Thuật?</h2>
          <p style={styles.desc}>
            Gửi thông tin backlog, vai trò cần thuê và số giờ dự kiến để DUDI xác nhận phạm vi và đưa ra phương án triển khai tối ưu nhất.
          </p>

          <div style={styles.buttons}>
            <button onClick={() => onNavigate('s11-form')} className="btn btn-primary">
              Gửi backlog để nhận ước lượng
            </button>
            <a
              href={companyDetails.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={styles.btnSecondaryGlass}
            >
              Liên hệ Zalo
            </a>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .final-cta-box {
            padding: 36px 18px !important;
            min-height: auto !important;
          }
          .final-cta-box .btn {
            width: 100%;
          }
        }
      `}} />
    </SectionWrapper>
  );
}

const styles = {
  box: {
    width: '100%',
    minHeight: '380px',
    backgroundImage: `linear-gradient(180deg, rgba(7, 9, 15, 0.5) 0%, rgba(7, 9, 15, 0.88) 100%), url('/cta-bg.webp')`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid rgba(229, 46, 46, 0.35)',
    padding: '48px 32px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.45)'
  },
  content: {
    maxWidth: '680px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 2
  },
  badge: {
    background: 'rgba(229, 46, 46, 0.2)',
    borderColor: 'rgba(229, 46, 46, 0.6)',
    color: '#FF4D4D',
    marginBottom: '12px'
  },
  title: {
    fontSize: 'clamp(1.65rem, 2.7vw, 2.4rem)',
    color: '#FFFFFF',
    fontWeight: 900,
    marginBottom: '12px',
    textShadow: '0 3px 16px rgba(0, 0, 0, 0.8)'
  },
  desc: {
    fontSize: 'clamp(0.92rem, 1.1vw, 1.02rem)',
    marginBottom: '24px',
    color: '#E2E8F0',
    lineHeight: 1.6,
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
  },
  buttons: {
    display: 'flex',
    gap: '14px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  btnSecondaryGlass: {
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, 0.22)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)'
  }
};
