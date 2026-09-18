import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { audiencesData } from '../data/content';

const cardColorThemes = {
  agency: {
    gradient: 'linear-gradient(135deg, #FF1361 0%, #FF2D55 50%, #E52E2E 100%)',
    color: '#E52E2E',
    dotColor: '#FF2D55',
    subtleBg: 'rgba(229, 46, 46, 0.04)',
    borderActive: '#FF2D55',
    shadow: 'rgba(255, 45, 85, 0.22)'
  },
  enterprise: {
    gradient: 'linear-gradient(135deg, #00C6FF 0%, #0072FF 50%, #1D64F2 100%)',
    color: '#0072FF',
    dotColor: '#00C6FF',
    subtleBg: 'rgba(0, 114, 255, 0.04)',
    borderActive: '#0072FF',
    shadow: 'rgba(0, 114, 255, 0.22)'
  },
  whitelabel: {
    gradient: 'linear-gradient(135deg, #9333EA 0%, #7C3AED 50%, #4F46E5 100%)',
    color: '#7C3AED',
    dotColor: '#9333EA',
    subtleBg: 'rgba(124, 58, 237, 0.04)',
    borderActive: '#7C3AED',
    shadow: 'rgba(124, 58, 237, 0.22)'
  }
};

export function AudienceSection() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCard(prev => (prev === id ? null : id));
  };

  return (
    <SectionWrapper id="s03-target" className="audience-section">
      <div className="section-meta">
        <div className="section-tag">Nhóm Đối Tượng</div>
        <h2>Đối Tượng Phù Hợp Với Mô Hình</h2>
        <p className="section-desc">
          Lựa chọn mô hình kỹ thuật phù hợp với tổ chức và backlog của bạn.
        </p>
      </div>

      <div className="audience-grid">
        {audiencesData.map((item) => {
          const isExpanded = expandedCard === item.id;
          const isHovered = hoveredCard === item.id;
          const theme = cardColorThemes[item.id] || cardColorThemes.agency;
          const isActive = isExpanded || isHovered;

          return (
            <div
              key={item.id}
              onClick={() => toggleExpand(item.id)}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`audience-wave-card ${isExpanded ? 'is-expanded' : ''}`}
              style={{
                ...styles.card,
                borderColor: isActive ? theme.borderActive : 'var(--border-glass)',
                boxShadow: isActive ? `0 18px 40px ${theme.shadow}` : 'var(--shadow-sm)',
                transform: isActive ? 'translateY(-4px)' : 'none'
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleExpand(item.id);
              }}
            >
              {/* Organic Liquid Wave Blob Header (Như Ảnh 1) */}
              <div style={styles.blobHeaderContainer}>
                {/* Floating Liquid Droplets */}
                <div className="blob-droplet droplet-1" style={{ background: theme.gradient }} />
                <div className="blob-droplet droplet-2" style={{ background: theme.gradient }} />
                <div className="blob-droplet droplet-3" style={{ background: theme.gradient }} />

                {/* Main Liquid Blob Shape */}
                <div
                  className={`main-liquid-blob blob-type-${item.id}`}
                  style={{ background: theme.gradient }}
                >
                  <span style={styles.blobBadgeText}>{item.badge}</span>
                </div>
              </div>

              {/* Card Main Title & Tagline */}
              <div style={styles.headerInfo}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <div style={{ ...styles.cardTagline, color: theme.color }}>
                  {item.tagline}
                </div>
                {item.description ? <p style={styles.cardDesc}>{item.description}</p> : null}
              </div>

              {/* Striped Feature List Rows (Xen kẽ màu như Ảnh 1) */}
              <div style={styles.featureListWrap}>
                {item.features?.map((feat, idx) => (
                  <div
                    key={idx}
                    className="feature-striped-row"
                    style={{
                      background: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC'
                    }}
                  >
                    <span
                      className="feature-gradient-dot"
                      style={{ background: theme.gradient }}
                    />
                    <span className="feature-text">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Toggle Action & Expanded Details */}
              <div style={styles.toggleFooter}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(item.id);
                  }}
                  className="btn-toggle-details"
                  style={{
                    color: theme.color,
                    borderColor: isExpanded ? theme.color : 'rgba(0,0,0,0.08)',
                    background: isExpanded ? theme.subtleBg : '#FFFFFF'
                  }}
                >
                  <span>{isExpanded ? 'Thu gọn' : 'Xem chi tiết'}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease'
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden', width: '100%' }}
                    >
                      <div style={styles.expandedSpecsBox}>
                        <div style={styles.specsTitle}>Quy chuẩn bàn giao:</div>
                        <div style={styles.specsGrid}>
                          {item.detailedSpecs?.map((spec, sIdx) => (
                            <div key={sIdx} style={styles.specItem}>
                              <span style={styles.specLabel}>{spec.label}:</span>
                              <span style={styles.specValue}>{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Liquid Wave Accent Footer (Họa tiết sóng dưới như Ảnh 1) */}
              <div className="card-bottom-wave-accent" style={{ background: theme.gradient }} />
            </div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .audience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(20px, 2vw, 36px);
          margin-top: clamp(0.4rem, 1vh, 1rem);
          width: 100%;
          align-items: start;
        }

        .audience-wave-card {
          position: relative;
          background: #FFFFFF;
          border-radius: clamp(18px, 1.8vw, 24px);
          border: 1.5px solid var(--border-glass);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
        }

        /* Top Liquid Blob Header */
        .blob-droplet {
          position: absolute;
          border-radius: 50%;
          opacity: 0.9;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.15));
          animation: floatMascot 4s ease-in-out infinite alternate;
        }

        .droplet-1 {
          width: clamp(14px, 1.2vw, 20px);
          height: clamp(14px, 1.2vw, 20px);
          top: 16px;
          left: 18px;
          border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        }

        .droplet-2 {
          width: clamp(10px, 0.8vw, 14px);
          height: clamp(10px, 0.8vw, 14px);
          top: 48px;
          left: 36px;
        }

        .droplet-3 {
          width: clamp(16px, 1.4vw, 24px);
          height: clamp(16px, 1.4vw, 24px);
          bottom: 12px;
          right: 22px;
          border-radius: 60% 40% 30% 70% / 50% 30% 70% 50%;
        }

        .main-liquid-blob {
          width: clamp(170px, 14vw, 230px);
          height: clamp(64px, 7.5vh, 88px);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.14);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .blob-type-agency {
          border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
        }

        .blob-type-enterprise {
          border-radius: 60% 40% 35% 65% / 50% 60% 40% 50%;
        }

        .blob-type-whitelabel {
          border-radius: 50% 50% 65% 35% / 40% 40% 60% 60%;
        }

        .audience-wave-card:hover .main-liquid-blob {
          transform: scale(1.04) rotate(-1deg);
        }

        /* Feature Striped Rows */
        .feature-striped-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: clamp(7px, 0.9vh, 11px) clamp(12px, 1.2vw, 18px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.6);
          transition: background 0.2s ease;
        }

        .feature-striped-row:last-child {
          border-bottom: none;
        }

        .feature-gradient-dot {
          width: clamp(10px, 0.9vw, 13px);
          height: clamp(10px, 0.9vw, 13px);
          min-width: clamp(10px, 0.9vw, 13px);
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .feature-text {
          font-size: clamp(0.76rem, 0.84vw, 0.9rem);
          font-weight: 600;
          color: #334155;
          line-height: 1.35;
        }

        .btn-toggle-details {
          width: 100%;
          padding: clamp(8px, 1vh, 12px) 14px;
          border-radius: var(--radius-sm);
          border: 1px solid;
          font-weight: 700;
          font-size: clamp(0.78rem, 0.84vw, 0.9rem);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.25s ease;
        }

        .btn-toggle-details:hover {
          filter: brightness(0.96);
          transform: translateY(-1px);
        }

        .card-bottom-wave-accent {
          height: 6px;
          width: 100%;
          border-radius: 0 0 20px 20px;
        }

        @media (max-width: 900px) {
          .audience-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}} />
    </SectionWrapper>
  );
}

const styles = {
  card: {
    padding: 0,
    overflow: 'hidden'
  },
  blobHeaderContainer: {
    position: 'relative',
    padding: 'clamp(14px, 1.8vh, 22px) 16px clamp(8px, 1vh, 14px) 16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FAFBFD',
    borderBottom: '1px solid rgba(226, 232, 240, 0.7)'
  },
  blobBadgeText: {
    color: '#FFFFFF',
    fontFamily: 'var(--font-sans)',
    fontSize: 'clamp(1.1rem, 1.3vw, 1.45rem)',
    fontWeight: 900,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
    textAlign: 'center'
  },
  headerInfo: {
    padding: 'clamp(12px, 1.4vh, 18px) clamp(16px, 1.4vw, 24px) clamp(8px, 1vh, 12px) clamp(16px, 1.4vw, 24px)',
    textAlign: 'center'
  },
  cardTitle: {
    fontSize: 'clamp(1.08rem, 1.25vw, 1.35rem)',
    fontWeight: 800,
    color: 'var(--text-pure)',
    marginBottom: '3px',
    lineHeight: 1.25
  },
  cardTagline: {
    fontSize: 'clamp(0.8rem, 0.88vw, 0.94rem)',
    fontWeight: 700,
    marginBottom: '6px'
  },
  cardDesc: {
    fontSize: 'clamp(0.76rem, 0.82vw, 0.88rem)',
    color: 'var(--text-body)',
    lineHeight: 1.45,
    margin: 0
  },
  featureListWrap: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderTop: '1px solid #E2E8F0',
    borderBottom: '1px solid #E2E8F0',
    margin: 'clamp(8px, 1vh, 12px) 0'
  },
  toggleFooter: {
    padding: '0 clamp(14px, 1.4vw, 20px) clamp(12px, 1.4vh, 18px) clamp(14px, 1.4vw, 20px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  expandedSpecsBox: {
    background: '#F8FAFC',
    border: '1px solid #E2E8F0',
    borderRadius: '10px',
    padding: '10px 12px',
    marginTop: '6px'
  },
  specsTitle: {
    fontSize: '0.74rem',
    fontWeight: 800,
    color: '#0F172A',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '6px'
  },
  specsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  specItem: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '8px',
    fontSize: '0.74rem'
  },
  specLabel: {
    color: '#64748B',
    fontWeight: 600,
    flexShrink: 0
  },
  specValue: {
    color: '#0F172A',
    fontWeight: 700,
    textAlign: 'right'
  }
};
