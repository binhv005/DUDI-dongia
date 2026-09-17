import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { audiencesData } from '../data/content';

const cardColorThemes = {
  agency: {
    color: '#E52E2E',
    iconBg: 'rgba(229, 46, 46, 0.08)',
    iconBorder: 'rgba(229, 46, 46, 0.35)',
    hoverBg: '#FFF8F8',
    shadow: 'rgba(229, 46, 46, 0.16)'
  },
  enterprise: {
    color: '#1D64F2',
    iconBg: 'rgba(29, 100, 242, 0.08)',
    iconBorder: 'rgba(29, 100, 242, 0.35)',
    hoverBg: '#F0F6FF',
    shadow: 'rgba(29, 100, 242, 0.16)'
  },
  whitelabel: {
    color: '#7C3AED',
    iconBg: 'rgba(124, 58, 237, 0.08)',
    iconBorder: 'rgba(124, 58, 237, 0.35)',
    hoverBg: '#FAF5FF',
    shadow: 'rgba(124, 58, 237, 0.16)'
  }
};

export function AudienceSection() {
  const [selectedAudience, setSelectedAudience] = useState(audiencesData[0].id);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <SectionWrapper id="s03-target" className="audience-section">
      <div className="section-meta">
        <div className="section-tag">Nhóm Đối Tượng</div>
        <h2>Đối Tượng Phù Hợp Với Mô Hình</h2>
        <p className="section-desc">Lựa chọn giải pháp kỹ thuật phù hợp với mô hình tổ chức và khối lượng công việc hiện tại của bạn.</p>
      </div>

      <div className="audience-grid">
        {audiencesData.map((item) => {
          const isSelected = selectedAudience === item.id;
          const isHovered = hoveredCard === item.id;
          const theme = cardColorThemes[item.id] || cardColorThemes.agency;
          const isActiveState = isHovered || isSelected;

          return (
            <div
              key={item.id}
              onClick={() => setSelectedAudience(item.id)}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                ...styles.card,
                borderColor: isActiveState ? theme.color : 'var(--border-glass)',
                background: isActiveState ? theme.hoverBg : 'var(--bg-card)',
                boxShadow: isActiveState ? `0 18px 36px ${theme.shadow}` : 'var(--shadow-sm)',
                transform: isActiveState ? 'translateY(-4px)' : 'none'
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedAudience(item.id); }}
            >
              {/* Full-bleed Top Image Banner */}
              {item.image && (
                <div style={styles.imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      ...styles.cardImg,
                      transform: isActiveState ? 'scale(1.06)' : 'scale(1)'
                    }}
                    loading="lazy"
                  />
                  <div
                    style={{
                      ...styles.iconBadgeOverlay,
                      background: theme.iconBg,
                      borderColor: theme.iconBorder,
                      color: theme.color
                    }}
                  >
                    {item.id === 'agency' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    )}
                    {item.id === 'enterprise' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    )}
                    {item.id === 'whitelabel' && (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 17 22 12"></polyline></svg>
                    )}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                
                {/* Tagline */}
                <div style={{ fontSize: '0.78rem', color: theme.color, fontWeight: 700, marginBottom: '8px', lineHeight: 1.35 }}>
                  {item.tagline}
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.8rem', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .audience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 0.6rem;
          width: 100%;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .audience-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}} />
    </SectionWrapper>
  );
}

const styles = {
  card: {
    borderRadius: 'var(--radius-lg)',
    border: '1px solid',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    overflow: 'hidden'
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '145px',
    margin: 0,
    overflow: 'hidden',
    background: '#F8FAFC',
    borderBottom: '1px solid rgba(15, 23, 42, 0.08)'
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  iconBadgeOverlay: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '34px',
    height: '34px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
    background: 'rgba(255, 255, 255, 0.94)'
  },
  cardBody: {
    padding: '14px 16px 16px 16px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  cardTitle: {
    fontSize: '1.02rem',
    fontWeight: 700,
    margin: '0 0 4px 0',
    color: 'var(--text-pure)',
    letterSpacing: '-0.01em',
    lineHeight: 1.3
  }
};
