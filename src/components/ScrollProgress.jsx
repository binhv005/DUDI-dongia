import React from 'react';
import { sectionsConfig } from '../data/navigation';

export function ScrollProgress({ activeSection, onNavigate }) {
  return (
    <nav className="screen-tracker" aria-label="Điều hướng các màn hình" style={styles.tracker}>
      {sectionsConfig.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <li key={sec.id} style={styles.dotWrap} className={`tracker-item ${isActive ? 'active' : ''}`}>
            <button
              onClick={() => onNavigate(sec.id)}
              aria-label={`Cuộn tới ${sec.label}`}
              style={{
                ...styles.dotBtn,
                background: isActive ? 'var(--dudi-red-bright)' : 'rgba(255, 255, 255, 0.2)',
                borderColor: isActive ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)',
                boxShadow: isActive ? '0 0 10px var(--dudi-red-bright)' : 'none',
                transform: isActive ? 'scale(1.3)' : 'scale(1)'
              }}
            />
            <span
              style={{
                ...styles.label,
                opacity: isActive ? 0.95 : 0,
                borderColor: isActive ? 'var(--dudi-red-bright)' : 'var(--border-glass)',
                transform: isActive ? 'translateX(0)' : 'translateX(6px)'
              }}
            >
              {sec.number} {sec.label}
            </span>
          </li>
        );
      })}
    </nav>
  );
}

const styles = {
  tracker: {
    position: 'fixed',
    right: '18px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    zIndex: 999,
    listStyle: 'none'
  },
  dotWrap: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  dotBtn: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    border: '1px solid',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
    padding: 0
  },
  label: {
    position: 'absolute',
    right: '18px',
    background: 'var(--bg-glass-strong)',
    border: '1px solid',
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '0.72rem',
    color: 'var(--text-bright)',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
    fontFamily: 'var(--font-mono)'
  }
};
