import React, { useState, useRef, useEffect } from 'react';
import { navItems, companyDetails } from '../data/navigation';

export function Header({ onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  const handleDropdownItemClick = (targetId) => {
    if (targetId) {
      onNavigate(targetId);
    }
    setDropdownOpen(false);
    setMobileOpen(false);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

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
            {navItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <li
                    key={item.id}
                    ref={dropdownRef}
                    style={styles.dropdownParent}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`nav-dropdown-trigger ${dropdownOpen ? 'active' : ''}`}
                      style={{
                        ...styles.dropdownBtn,
                        color: dropdownOpen ? '#E52E2E' : 'var(--text-body)'
                      }}
                      aria-expanded={dropdownOpen}
                    >
                      <span>{item.label}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{
                          transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>

                    {/* Floating Dropdown Menu Card */}
                    <div
                      className={`header-dropdown-menu ${dropdownOpen ? 'open' : ''}`}
                      style={styles.dropdownMenu}
                    >
                      <div style={styles.dropdownInner}>
                        {item.children?.map((sub, idx) => (
                          <a
                            key={sub.id}
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              setDropdownOpen(false);
                              setMobileOpen(false);
                            }}
                            className="dropdown-item-link"
                            style={{
                              ...styles.dropdownItem,
                              borderBottom: idx === (item.children.length - 1) ? 'none' : '1px solid #F1F5F9'
                            }}
                          >
                            <span>{sub.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                    className="desktop-nav-link"
                    style={styles.navLink}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
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
            {navItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <li key={item.id} style={{ width: '100%' }}>
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      style={{
                        ...styles.mobileNavLink,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        color: mobileDropdownOpen ? '#E52E2E' : 'var(--text-bright)'
                      }}
                    >
                      <span>{item.label}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{
                          transform: mobileDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease'
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>

                    {/* Mobile Submenu */}
                    {mobileDropdownOpen && (
                      <div style={styles.mobileSubmenu}>
                        {item.children?.map((sub) => (
                          <a
                            key={sub.id}
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileDropdownOpen(false);
                            }}
                            style={styles.mobileSubNavLink}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.id} style={{ width: '100%' }}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={styles.mobileNavLink}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .cta-short {
          display: none;
        }

        .desktop-nav-link:hover {
          color: #E52E2E !important;
        }

        .nav-dropdown-trigger:hover {
          color: #E52E2E !important;
        }

        .dropdown-item-link {
          transition: all 0.2s ease;
        }

        .dropdown-item-link:hover {
          background-color: #FFF5F5 !important;
          color: #E52E2E !important;
          padding-left: 24px !important;
        }

        .header-dropdown-menu {
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.25s;
          pointer-events: none;
        }

        .header-dropdown-menu.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          pointer-events: auto;
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
    gap: '22px',
    listStyle: 'none'
  },
  navLink: {
    fontSize: '0.88rem',
    fontWeight: 600,
    color: 'var(--text-body)',
    padding: '6px 4px',
    transition: 'color var(--transition-fast)'
  },
  dropdownParent: {
    position: 'relative'
  },
  dropdownBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    background: 'transparent',
    border: 'none',
    fontSize: '0.88rem',
    fontWeight: 600,
    cursor: 'pointer',
    padding: '6px 4px',
    transition: 'color var(--transition-fast)'
  },
  dropdownMenu: {
    position: 'absolute',
    top: 'calc(100% + 12px)',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '210px',
    background: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0 16px 36px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.08)',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    zIndex: 1050
  },
  dropdownInner: {
    display: 'flex',
    flexDirection: 'column',
    padding: '4px 0'
  },
  dropdownItem: {
    padding: '12px 20px',
    fontSize: '0.92rem',
    fontWeight: 700,
    color: '#0F172A',
    textDecoration: 'none',
    display: 'block',
    lineHeight: 1.2
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
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
  },
  mobileSubmenu: {
    paddingLeft: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '6px',
    borderLeft: '2px solid rgba(229, 46, 46, 0.4)'
  },
  mobileSubNavLink: {
    width: '100%',
    textAlign: 'left',
    background: 'transparent',
    border: 'none',
    color: '#E2E8F0',
    fontSize: '0.9rem',
    fontWeight: 500,
    padding: '6px 0',
    cursor: 'pointer'
  }
};
