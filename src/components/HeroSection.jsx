import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { companyDetails } from '../data/navigation';

export function HeroSection({ onNavigate }) {
  return (
    <SectionWrapper id="s02-hero" className="hero-section" style={styles.heroWrapper}>
      <div className="hero-grid">
        <div style={styles.content}>
          <div className="section-tag" style={{ background: 'rgba(229, 46, 46, 0.15)', borderColor: 'rgba(229, 46, 46, 0.5)' }}>
            <span className="section-tag-dot"></span> DUDI Software Solutions
          </div>

          {/* Styled H1 with Script Typography on Dark Hero */}
          <h1 style={styles.title}>
            <span style={styles.titlePrefix}>DỊCH VỤ THUÊ ĐỘI KỸ THUẬT</span>
            <span style={styles.titleScript}>Theo Giờ</span>
            <span style={styles.titleSuffix}>LINH HOẠT THEO BACKLOG</span>
          </h1>

          <p style={styles.subheading}>
            DUDI cung cấp nhân sự kỹ thuật theo vai trò và giờ làm việc thực tế, phù hợp với agency, doanh nghiệp và đối tác cần bổ sung năng lực triển khai hoặc hợp tác white label.
          </p>

          <div style={styles.actions}>
            <button onClick={() => onNavigate('s11-form')} className="btn btn-primary">
              Gửi backlog để nhận ước lượng
            </button>
            <a
              href={companyDetails.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={styles.btnSecondaryDark}
            >
              Liên hệ Zalo
            </a>
          </div>
        </div>

        {/* Right side spacer for 3D astronaut mascot background on desktop */}
        <div className="hero-visual-spacer" />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 30px;
          align-items: center;
          width: 100%;
          min-height: 80%;
        }

        .hero-visual-spacer {
          min-height: 340px;
        }

        @media (max-width: 960px) {
          .hero-section {
            background-image: radial-gradient(circle at 85% 15%, rgba(229, 46, 46, 0.18) 0%, transparent 55%), linear-gradient(180deg, #07080D 0%, #0B0E17 100%) !important;
            background-size: cover !important;
            background-position: center center !important;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .hero-visual-spacer {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-section .btn {
            width: 100%;
          }
        }
      `}} />
    </SectionWrapper>
  );
}

const styles = {
  heroWrapper: {
    backgroundImage: `linear-gradient(90deg, #07080D 0%, rgba(7, 8, 13, 0.94) 46%, rgba(7, 8, 13, 0.4) 76%, transparent 100%), url('/8c8b2c77-0cf2-44e4-98c1-9dcc83b493cd.png')`,
    backgroundPosition: 'right center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#07080D'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.85rem',
    zIndex: 2,
    maxWidth: '640px'
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    lineHeight: 1.1
  },
  titlePrefix: {
    fontFamily: 'var(--font-sans)',
    fontSize: '0.95rem',
    fontWeight: 800,
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    color: '#FF4D4D',
    display: 'block',
    marginBottom: '2px'
  },
  titleScript: {
    fontFamily: 'var(--font-script)',
    fontSize: 'clamp(3.2rem, 5.5vw, 5.2rem)',
    fontWeight: 700,
    color: '#FFFFFF',
    display: 'block',
    lineHeight: 1,
    transform: 'rotate(-2deg)',
    marginLeft: '6px',
    textShadow: '0 4px 20px rgba(229, 46, 46, 0.35), 0 2px 4px rgba(0,0,0,0.8)'
  },
  titleSuffix: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(1.4rem, 2.4vw, 2.3rem)',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    display: 'block',
    marginTop: '4px',
    textShadow: '0 2px 8px rgba(0,0,0,0.6)'
  },
  subheading: {
    fontSize: 'clamp(0.92rem, 1.05vw, 1.05rem)',
    color: '#CBD5E1',
    maxWidth: '560px',
    lineHeight: 1.6
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '12px',
    marginTop: '0.4rem',
    width: '100%'
  },
  btnSecondaryDark: {
    background: 'rgba(255, 255, 255, 0.08)',
    color: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, 0.18)',
    backdropFilter: 'blur(8px)'
  }
};
