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
          grid-template-columns: 1.25fr 0.95fr;
          gap: clamp(30px, 4vw, 64px);
          align-items: center;
          width: 100%;
          min-height: 80%;
        }

        .hero-visual-spacer {
          min-height: clamp(340px, 40vh, 520px);
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
    backgroundImage: `linear-gradient(90deg, #07080D 0%, rgba(7, 8, 13, 0.94) 46%, rgba(7, 8, 13, 0.4) 76%, transparent 100%), url('/hero-bg.webp')`,
    backgroundPosition: 'right center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#07080D'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 'clamp(0.85rem, 1.4vh, 1.35rem)',
    zIndex: 2,
    maxWidth: 'clamp(640px, 46vw, 820px)'
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    lineHeight: 1.1
  },
  titlePrefix: {
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(0.95rem, 1.1vw, 1.18rem)',
    fontWeight: 800,
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    color: '#FF4D4D',
    display: 'block',
    marginBottom: '2px'
  },
  titleScript: {
    fontFamily: 'var(--font-script)',
    fontSize: 'clamp(3.4rem, 6.2vw, 6.4rem)',
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
    fontSize: 'clamp(1.5rem, 2.7vw, 2.9rem)',
    fontWeight: 900,
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    display: 'block',
    marginTop: '4px',
    textShadow: '0 2px 8px rgba(0,0,0,0.6)'
  },
  subheading: {
    fontSize: 'clamp(0.95rem, 1.15vw, 1.22rem)',
    color: '#CBD5E1',
    maxWidth: 'clamp(560px, 42vw, 700px)',
    lineHeight: 1.6
  },
  actions: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 'clamp(12px, 1.2vw, 18px)',
    marginTop: 'clamp(0.4rem, 0.8vh, 0.8rem)',
    width: '100%'
  },
  btnSecondaryDark: {
    background: 'rgba(255, 255, 255, 0.08)',
    color: '#FFFFFF',
    borderColor: 'rgba(255, 255, 255, 0.18)',
    backdropFilter: 'blur(8px)'
  }
};
