import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';

const STEP_THEMES = [
  {
    number: "01",
    label: "TIẾP NHẬN",
    line1: "Khách hàng gửi backlog và",
    line2: "thông tin dự án cần hỗ trợ.",
    color: "#0284C7", // Cyan / Teal
    ringColor: "#0284C7",
    direction: "down"
  },
  {
    number: "02",
    label: "XÁC NHẬN",
    line1: "DUDI xác nhận: Vai trò, Phạm vi,",
    line2: "Công nghệ & Số giờ ước lượng.",
    color: "#881337", // Wine / Maroon
    ringColor: "#881337",
    direction: "up"
  },
  {
    number: "03",
    label: "TRIỂN KHAI",
    line1: "Thực hiện công việc theo đúng",
    line2: "phạm vi được hai bên phê duyệt.",
    color: "#D97706", // Amber Gold
    ringColor: "#D97706",
    direction: "down"
  },
  {
    number: "04",
    label: "TEST & REVIEW",
    line1: "Kiểm thử, review mã nguồn và",
    line2: "ghi nhận đầy đủ timesheet.",
    color: "#334155", // Charcoal Slate
    ringColor: "#334155",
    direction: "up"
  },
  {
    number: "05",
    label: "NGHIỆM THU",
    line1: "Khách hàng nghiệm thu theo",
    line2: "phạm vi và kết quả đã thống nhất.",
    color: "#E11D48", // Rose Red / DUDI Crimson
    ringColor: "#E11D48",
    direction: "down"
  }
];

export function ProcessSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <SectionWrapper id="s07-process" className="process-section" style={styles.sectionWrapper}>
      <div className="section-meta">
        <div className="section-tag" style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(8px)', borderColor: 'rgba(229, 46, 46, 0.4)' }}>
          <span className="section-tag-dot" /> Quy Trình Triển Khai
        </div>
        <h2 style={{ color: '#0F172A', textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)' }}>5 Bước Phối Hợp Kỹ Thuật Chuẩn Hóa</h2>
      </div>

      {/* Desktop Infographic Flow */}
      <div className="process-desktop-flow process-infographic-container" style={styles.infographicWrapper}>
        <div className="process-infographic-track" style={styles.stepsTrack}>
          {STEP_THEMES.map((step, idx) => {
            const isHovered = hoveredIdx === idx;
            const isUp = step.direction === "up";

            return (
              <div
                key={step.number}
                style={{
                  ...styles.stepColumn,
                  zIndex: isHovered ? 10 : idx + 1,
                  marginLeft: idx === 0 ? '0' : '-22px'
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Top Section (For Even Steps: 02, 04) */}
                <div style={styles.topArea}>
                  {isUp ? (
                    <div
                      style={{
                        ...styles.descBox,
                        ...styles.descBoxTop,
                        transform: isHovered ? 'scale(1.04)' : 'scale(1)'
                      }}
                    >
                      <div style={{
                        ...styles.descText,
                        borderColor: isHovered ? step.color : 'rgba(255, 255, 255, 0.8)',
                        boxShadow: isHovered ? `0 4px 14px ${step.color}22` : '0 2px 6px rgba(0, 0, 0, 0.06)'
                      }}>
                        <span>{step.line1}</span>
                        <br />
                        <span>{step.line2}</span>
                      </div>
                      <div style={styles.pinContainer}>
                        <div style={{ ...styles.pinDot, background: step.color }} />
                        <div style={{ ...styles.pinLine, background: step.color }} />
                      </div>
                    </div>
                  ) : (
                    <div style={{ height: '100%' }} />
                  )}
                </div>

                {/* Center Circle Badge */}
                <div style={styles.circleContainer}>
                  <div
                    style={{
                      ...styles.circleOuterRing,
                      borderColor: step.ringColor,
                      transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                      boxShadow: isHovered
                        ? `0 14px 34px ${step.color}66`
                        : '0 4px 14px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <div
                      style={{
                        ...styles.circleInner,
                        background: step.color
                      }}
                    >
                      <span style={styles.circleNum}>{step.number}</span>
                      <span style={styles.circleLabel}>{step.label}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Section (For Odd Steps: 01, 03, 05) */}
                <div style={styles.bottomArea}>
                  {!isUp ? (
                    <div
                      style={{
                        ...styles.descBox,
                        ...styles.descBoxBottom,
                        transform: isHovered ? 'scale(1.04)' : 'scale(1)'
                      }}
                    >
                      <div style={styles.pinContainer}>
                        <div style={{ ...styles.pinLine, background: step.color }} />
                        <div style={{ ...styles.pinDot, background: step.color }} />
                      </div>
                      <div style={{
                        ...styles.descText,
                        borderColor: isHovered ? step.color : 'rgba(255, 255, 255, 0.8)',
                        boxShadow: isHovered ? `0 4px 14px ${step.color}22` : '0 2px 6px rgba(0, 0, 0, 0.06)'
                      }}>
                        <span>{step.line1}</span>
                        <br />
                        <span>{step.line2}</span>
                      </div>
                    </div>
                  ) : (
                    <div style={{ height: '100%' }} />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Vertical Flow */}
      <div className="process-mobile-timeline">
        {STEP_THEMES.map((step, idx) => (
          <div key={step.number} className="mobile-step-item">
            <div className="mobile-step-left">
              <div
                className="mobile-step-circle"
                style={{
                  borderColor: step.ringColor,
                  background: step.color
                }}
              >
                <span className="mobile-step-num">{step.number}</span>
              </div>
              {idx < STEP_THEMES.length - 1 && (
                <div
                  className="mobile-step-connector"
                  style={{ background: `linear-gradient(180deg, ${step.color}, ${STEP_THEMES[idx + 1].color})` }}
                />
              )}
            </div>
            <div className="mobile-step-content">
              <div className="mobile-step-header">
                <span className="mobile-step-badge" style={{ color: step.color, borderColor: `${step.color}40`, background: `${step.color}10` }}>
                  BƯỚC {step.number}
                </span>
                <h4 className="mobile-step-title">
                  {step.label}
                </h4>
              </div>
              <p className="mobile-step-desc">
                {step.line1} {step.line2}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.ruleBanner}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E52E2E" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <div>
          <strong>Nguyên tắc bảo vệ ngân sách: </strong>
          DUDI cam kết không tự động vượt ngân sách. Nếu phát sinh dự kiến vượt số giờ đã được phê duyệt, đội ngũ DUDI sẽ chủ động dừng lại và xin phê duyệt bổ sung trước khi tiếp tục.
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .process-mobile-timeline {
          display: none;
        }

        @media (max-width: 860px) {
          .process-desktop-flow {
            display: none !important;
          }
          .process-mobile-timeline {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
            max-width: 540px;
            margin: 12px auto 16px auto;
            padding: 0 4px;
          }
          .mobile-step-item {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            position: relative;
          }
          .mobile-step-left {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            flex-shrink: 0;
            width: 44px;
          }
          .mobile-step-circle {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 3px solid;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
            z-index: 2;
          }
          .mobile-step-num {
            font-size: 1.05rem;
            font-weight: 900;
            line-height: 1;
          }
          .mobile-step-connector {
            width: 2.5px;
            height: 100%;
            min-height: 32px;
            margin: 4px 0;
            border-radius: 2px;
            opacity: 0.6;
          }
          .mobile-step-content {
            flex: 1;
            background: #ffffff;
            border: 1px solid rgba(226, 232, 240, 0.9);
            border-radius: 14px;
            padding: 10px 14px;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .mobile-step-header {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .mobile-step-badge {
            font-size: 0.62rem;
            font-weight: 800;
            padding: 2px 6px;
            border-radius: 4px;
            border: 1px solid;
            letter-spacing: 0.5px;
          }
          .mobile-step-title {
            font-size: 0.88rem;
            font-weight: 800;
            color: #0F172A;
            margin: 0;
          }
          .mobile-step-desc {
            font-size: 0.76rem;
            color: #475569;
            line-height: 1.45;
            margin: 0;
          }
        }
      `}} />
    </SectionWrapper>
  );
}

const styles = {
  sectionWrapper: {
    backgroundImage: `url('/9d7bf827-3798-41f6-a16b-f59fc2480bb1.png')`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#EBF4FF',
    overflow: 'hidden'
  },
  infographicWrapper: {
    width: '100%',
    maxWidth: '960px',
    margin: '0.6rem auto 0.9rem',
    position: 'relative',
    padding: '4px 0'
  },
  stepsTrack: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '720px',
    margin: '0 auto'
  },
  stepColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '158px',
    position: 'relative',
    transition: 'z-index 0.2s ease'
  },
  topArea: {
    height: '94px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0 4px'
  },
  bottomArea: {
    height: '94px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0 4px'
  },
  descBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'max-content',
    maxWidth: '220px',
    transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.3s ease'
  },
  descBoxTop: {
    justifyContent: 'flex-end'
  },
  descBoxBottom: {
    justifyContent: 'flex-start'
  },
  descText: {
    fontSize: '0.72rem',
    lineHeight: 1.4,
    color: '#0F172A',
    fontWeight: 600,
    margin: '0',
    padding: '4px 10px',
    background: 'rgba(255, 255, 255, 0.94)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  },
  pinContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '2px 0'
  },
  pinLine: {
    width: '2px',
    height: '24px'
  },
  pinDot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%'
  },
  circleContainer: {
    padding: '2px 0',
    zIndex: 2
  },
  circleOuterRing: {
    width: '88px',
    height: '88px',
    borderRadius: '50%',
    padding: '3.5px',
    border: '3px solid',
    background: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'pointer'
  },
  circleInner: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF',
    padding: '2px',
    boxShadow: 'inset 0 2px 3px rgba(255, 255, 255, 0.3), inset 0 -2px 3px rgba(0, 0, 0, 0.2)'
  },
  circleNum: {
    fontFamily: 'var(--font-sans)',
    fontSize: '1.15rem',
    fontWeight: 900,
    lineHeight: 1.1,
    letterSpacing: '-0.5px'
  },
  circleLabel: {
    fontSize: '0.54rem',
    fontWeight: 800,
    letterSpacing: '0.3px',
    textTransform: 'uppercase',
    marginTop: '1px',
    textAlign: 'center',
    maxWidth: '76px'
  },
  ruleBanner: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '7px 16px',
    borderRadius: 'var(--radius-md)',
    background: 'rgba(255, 255, 255, 0.94)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(229, 46, 46, 0.25)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    fontSize: '0.78rem',
    color: '#0F172A',
    lineHeight: 1.4,
    maxWidth: '900px',
    margin: '0 auto'
  }
};

