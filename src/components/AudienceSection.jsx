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

      <div style={styles.grid}>
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
                transform: isActiveState ? 'translateY(-6px)' : 'none'
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedAudience(item.id); }}
            >
              <div>
                {/* Image Banner */}
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
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                      )}
                    </div>
                  </div>
                )}

                <h3 style={{ fontSize: '1rem', marginBottom: '2px', color: 'var(--text-pure)' }}>{item.title}</h3>
                
                {/* Each card has its distinct color for the tagline */}
                <div style={{ fontSize: '0.74rem', color: theme.color, fontWeight: 700, marginBottom: '6px' }}>
                  {item.tagline}
                </div>

                <p style={{ fontSize: '0.78rem', color: 'var(--text-body)', lineHeight: 1.42 }}>
                  {item.description}
                </p>
              </div>

              {/* Clean solution box */}
              <div style={styles.solutionBox}>
                <span style={{ color: 'var(--text-muted)' }}>Mô hình đề xuất: </span>
                <strong style={{ color: 'var(--text-pure)' }}>{item.recommendedModel}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '14px',
    marginTop: '0.2rem'
  },
  card: {
    borderRadius: 'var(--radius-lg)',
    border: '1px solid',
    padding: '12px 14px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    overflow: 'hidden'
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: '115px',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    marginBottom: '10px',
    border: '1px solid rgba(15, 23, 42, 0.08)',
    background: '#F8FAFC'
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
    top: '6px',
    left: '6px',
    width: '32px',
    height: '32px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(8px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    background: 'rgba(255, 255, 255, 0.92)'
  },
  solutionBox: {
    marginTop: '10px',
    padding: '6px 10px',
    borderRadius: 'var(--radius-sm)',
    background: '#F1F5F9',
    border: '1px solid rgba(15, 23, 42, 0.05)',
    fontSize: '0.75rem'
  }
};
