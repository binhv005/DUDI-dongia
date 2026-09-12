import React, { useState } from 'react';
import { navItems, companyDetails } from '../data/navigation';

export function Header({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header className="main-header" id="s01-header" style={styles.header}>
      <div className="header-container" style={styles.container}>
        <a
          href="#s02-hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('s02-hero'); }}
          style={styles.logoLink}
          aria-label="DUDI Software Trang chủ"
        >
          <img src="/logo.webp" alt="DUDI Software Logo" width="34" height="34" style={{ height: '34px', width: 'auto', borderRadius: '6px' }} />
          <span style={{ fontSize: '1.2rem', fontWeight: 900, letterSpacing: '0.5px', color: '#E52E2E', marginLeft: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>DUDI</span>
            <span className="brand-suffix" style={{ color: '#E52E2E', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '1.5px' }}>SOFTWARE</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" aria-label="Menu chính">
          <ul style={styles.navMenu}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                  style={styles.navLink}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Actions */}
        <div style={styles.actions}>
          <button onClick={() => handleNavClick('s11-form')} className="btn btn-primary btn-sm header-cta-btn">
            <span className="cta-full">Gửi backlog để nhận ước lượng</span>
            <span className="cta-short">Gửi backlog</span>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle Menu"
            style={styles.mobileToggle}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={styles.mobileDrawer}>
          <ul style={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.id} style={{ width: '100%' }}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={styles.mobileNavLink}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .cta-short {
          display: none;
        }

        @media (max-width: 860px) {
          .header-container {
            padding: 0 14px !important;
          }
          .cta-full {
            display: none !important;
          }
          .cta-short {
            display: inline !important;
          }
        }

        @media (max-width: 480px) {
          .brand-suffix {
            display: none !important;
          }
          .header-cta-btn {
            padding: 6px 10px !important;
            font-size: 0.76rem !important;
          }
        }
      `}} />
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '64px',
    background: 'var(--bg-glass-strong)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid var(--border-glass)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center'
  },
  navMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    listStyle: 'none'
  },
  navLink: {
    fontSize: '0.88rem',
    fontWeight: 500,
    color: 'var(--text-body)',
    padding: '6px 4px',
    transition: 'color var(--transition-fast)'
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  hotlineBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    color: 'var(--text-bright)',
    padding: '6px 12px',
    borderRadius: 'var(--radius-sm)',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid var(--border-glass)'
  },
  mobileToggle: {
    display: 'none',
    background: 'transparent',
    border: '1px solid var(--border-glass)',
    color: 'var(--text-bright)',
    padding: '6px 10px',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    fontSize: '1rem'
  },
  mobileDrawer: {
    position: 'absolute',
    top: '64px',
    left: 0,
    right: 0,
    background: 'rgba(10, 12, 18, 0.98)',
    borderBottom: '1px solid var(--border-glass)',
    padding: '20px 24px',
    boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
  },
  mobileNavList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  mobileNavLink: {
    width: '100%',
    textAlign: 'left',
    background: 'transparent',
    border: 'none',
    color: 'var(--text-bright)',
    fontSize: '1rem',
    fontWeight: 600,
    padding: '8px 0',
    cursor: 'pointer'
  }
};
