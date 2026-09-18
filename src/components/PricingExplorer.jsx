import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { pricingRoles, pricingNotice } from '../data/pricing';

export function PricingExplorer({ selectedRole, onSelectRole, onNavigate }) {
  const handleCardClick = (roleId) => {
    onSelectRole(roleId);
    onNavigate('s11-form');
  };

  const renderCard = (role, keyPrefix) => {
    const isSelected = selectedRole === role.id;
    return (
      <div
        key={`${keyPrefix}-${role.id}`}
        onClick={() => handleCardClick(role.id)}
        className={`pricing-role-card ${isSelected ? 'is-selected' : ''}`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(role.id); }}
      >
        {isSelected && <span style={styles.selectedBadge}>ĐÃ CHỌN</span>}
        <div>
          <div style={styles.roleName}>{role.name}</div>
          <div className="pricing-card-price" style={styles.rolePrice}>{role.priceShort}</div>
          <div style={styles.roleUnit}>{role.unit}</div>
          <div style={styles.roleDesc}>{role.description}</div>
        </div>

        <button
          type="button"
          className="pricing-card-btn"
          style={styles.selectBtn}
        >
          Chọn vai trò này
        </button>
      </div>
    );
  };

  return (
    <SectionWrapper id="s06-pricing" className="pricing-section">
      <div className="section-meta">
        <div className="section-tag">Role-Based Pricing Explorer</div>
        <h2>Đơn Giá Tham Khảo Theo Vai Trò Kỹ Thuật</h2>
        <p className="section-desc">Chọn vai trò phù hợp để tự động điền vào mẫu yêu cầu ước lượng chuyên môn.</p>
      </div>

      <div style={styles.explorer}>
        <div className="pricing-marquee-container">
          <div className="pricing-marquee-track">
            <div className="pricing-marquee-group">
              {pricingRoles.map((role) => renderCard(role, 'g1'))}
              {pricingRoles.map((role) => renderCard(role, 'g2'))}
            </div>
            <div className="pricing-marquee-group" aria-hidden="true">
              {pricingRoles.map((role) => renderCard(role, 'g3'))}
              {pricingRoles.map((role) => renderCard(role, 'g4'))}
            </div>
          </div>
        </div>

        <div className="pricing-notice-box">
          <div style={styles.noticeText}>
            <strong>* {pricingNotice.title} </strong> {pricingNotice.content}
          </div>
          <button onClick={() => onNavigate('s11-form')} className="btn btn-primary btn-sm" style={{ flexShrink: 0 }}>
            Gửi backlog để nhận ước lượng
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .pricing-notice-box {
          padding: clamp(12px, 1.5vh, 18px) clamp(16px, 1.6vw, 28px);
          border-radius: var(--radius-md);
          background: #FFFFFF;
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: clamp(12px, 1.5vw, 24px);
          box-shadow: var(--shadow-sm);
        }

        @media (max-width: 768px) {
          .pricing-notice-box {
            flex-direction: column;
            text-align: center;
            gap: 10px;
          }
          .pricing-notice-box .btn {
            width: 100%;
          }
        }
      `}} />
    </SectionWrapper>
  );
}

const styles = {
  explorer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(14px, 1.6vh, 22px)',
    width: '100%',
    overflow: 'hidden'
  },
  selectedBadge: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    fontSize: 'clamp(0.62rem, 0.7vw, 0.74rem)',
    fontWeight: 800,
    color: 'var(--dudi-red-bright)',
    background: 'var(--dudi-red-subtle)',
    padding: '3px 7px',
    borderRadius: '6px',
    border: '1px solid var(--border-red)'
  },
  roleName: {
    fontSize: 'clamp(0.92rem, 1.05vw, 1.12rem)',
    fontWeight: 700,
    color: 'var(--text-pure)',
    marginBottom: '3px'
  },
  rolePrice: {
    fontSize: 'clamp(1.15rem, 1.35vw, 1.5rem)',
    fontWeight: 900,
    color: 'var(--dudi-red-bright)',
    marginBottom: '2px'
  },
  roleUnit: {
    fontSize: 'clamp(0.72rem, 0.8vw, 0.84rem)',
    color: 'var(--text-muted)',
    marginBottom: '8px'
  },
  roleDesc: {
    fontSize: 'clamp(0.76rem, 0.85vw, 0.92rem)',
    color: 'var(--text-body)',
    lineHeight: 1.45,
    marginBottom: '12px'
  },
  selectBtn: {
    width: '100%',
    padding: 'clamp(7px, 1vh, 11px) 0',
    fontSize: 'clamp(0.8rem, 0.88vw, 0.94rem)',
    fontWeight: 700,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--border-glass)',
    background: '#F1F5F9',
    color: 'var(--text-pure)',
    cursor: 'pointer',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  noticeText: {
    fontSize: 'clamp(0.8rem, 0.9vw, 0.96rem)',
    color: 'var(--text-body)',
    lineHeight: 1.45
  }
};
