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
          padding: 10px 16px;
          border-radius: var(--radius-md);
          background: #FFFFFF;
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
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
    gap: '16px',
    width: '100%',
    overflow: 'hidden'
  },
  card: {
    width: '260px',
    minWidth: '260px',
    maxWidth: '260px',
    borderRadius: 'var(--radius-lg)',
    border: '1px solid',
    padding: '14px 12px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    position: 'relative',
    userSelect: 'none'
  },
  selectedBadge: {
    position: 'absolute',
    top: '6px',
    right: '6px',
    fontSize: '0.62rem',
    fontWeight: 800,
    color: 'var(--dudi-red-bright)',
    background: 'var(--dudi-red-subtle)',
    padding: '2px 5px',
    borderRadius: '4px',
    border: '1px solid var(--border-red)'
  },
  roleName: {
    fontSize: '0.88rem',
    fontWeight: 700,
    color: 'var(--text-pure)',
    marginBottom: '2px'
  },
  rolePrice: {
    fontSize: '1.05rem',
    fontWeight: 900,
    color: 'var(--dudi-red-bright)',
    marginBottom: '1px'
  },
  roleUnit: {
    fontSize: '0.7rem',
    color: 'var(--text-muted)',
    marginBottom: '6px'
  },
  roleDesc: {
    fontSize: '0.75rem',
    color: 'var(--text-body)',
    lineHeight: 1.4,
    marginBottom: '10px'
  },
  selectBtn: {
    width: '100%',
    padding: '6px 0',
    fontSize: '0.78rem',
    fontWeight: 700,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--border-glass)',
    background: '#F1F5F9',
    color: 'var(--text-pure)',
    cursor: 'pointer',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
  },
  noticeText: {
    fontSize: '0.78rem',
    color: 'var(--text-body)',
    lineHeight: 1.4
  }
};
