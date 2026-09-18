import React from 'react';
import { SectionWrapper } from './SectionWrapper';

const policyParts = [
  {
    part: "Part 01",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M12 12v9" />
        <path d="m8 17 4 4 4-4" />
      </svg>
    ),
    title: "License Phần Mềm & Hạ Tầng Cloud",
    desc: "Bản quyền tool phát triển, server Cloud (AWS/GCP), Hosting & Domain do khách hàng chi trả hoặc cung cấp."
  },
  {
    part: "Part 02",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="3" />
        <path d="m10 8 5 4-5 4V8Z" fill="#ffffff" stroke="none" />
      </svg>
    ),
    title: "API Bên Thứ 3 & Tài Khoản Store",
    desc: "API trả phí (OpenAI, Payment Gateway, Maps) và phí duy trì tài khoản Apple Developer / Google Play."
  },
  {
    part: "Part 03",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="3" ry="3" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Thiết Bị Chuyên Dụng & Công Tác",
    desc: "Phần cứng test đặc thù ngoài chuẩn và chi phí đi lại, lưu trú khi làm việc trực tiếp tại địa điểm khách hàng."
  },
  {
    part: "Part 04",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 14" />
      </svg>
    ),
    title: "Yêu Cầu Xử Lý Gấp & Trực Ngoài Giờ",
    desc: "Xử lý khẩn cấp ngoài khung giờ thỏa thuận hoặc bảo hành phát sinh ngoài đầu ra đã nghiệm thu cần phê duyệt riêng."
  }
];

export function LimitationSection() {
  return (
    <SectionWrapper id="s09-limits" className="limitation-section">
      <div className="section-meta" style={{ marginBottom: '8px', textAlign: 'center' }}>
        <div className="section-tag" style={{ margin: '0 auto 4px auto' }}>Chính Sách Minh Bạch</div>
        <h2>Chi Phí Ngoài Phạm Vi & Nguyên Tắc Hỗ Trợ</h2>
      </div>

      <div className="scope-arc-container">
        {/* Left Side: Concentric Centered Tech Dial */}
        <div className="scope-hub-col">
          <div className="tech-orbital-dial">
            {/* Concentric Orbit Rings */}
            <div className="orbit-ring-outer"></div>
            <div className="orbit-ring-mid"></div>

            {/* Orbiting Dots */}
            <div className="orbit-dots-layer">
              <span className="orbit-dot dot-1"></span>
              <span className="orbit-dot dot-2"></span>
              <span className="orbit-dot dot-3"></span>
              <span className="orbit-dot dot-4"></span>
              <span className="orbit-dot dot-5"></span>
            </div>

            {/* Central DUDI Disc (Concentric & Centered inside the Outer Circle) */}
            <div className="hub-center-disc">
              <div className="hub-content-inner">
                <div className="hub-tag">DUDI</div>
                <div className="hub-title">Phạm Vi</div>
                <div className="hub-sub">& Nguyên Tắc</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Clean 4 Rows without curved line */}
        <div className="scope-curve-col">
          <div className="arc-parts-list">
            {policyParts.map((item, idx) => (
              <div 
                key={idx} 
                className="arc-part-row"
              >
                <div className="part-prefix">
                  <span className="part-code">{item.part}</span>
                </div>

                <div className="part-node-icon">
                  {item.icon}
                </div>

                <div className="part-content">
                  <h4 className="part-title">{item.title}</h4>
                  <p className="part-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .limitation-section {
          padding-top: clamp(10px, 1.5vh, 24px);
          padding-bottom: clamp(14px, 2vh, 28px);
        }

        /* Clean transparent container - with comfortable spacing */
        .scope-arc-container {
          display: grid;
          grid-template-columns: clamp(280px, 22vw, 360px) 1fr;
          gap: clamp(28px, 3vw, 56px);
          align-items: center;
          margin-top: clamp(8px, 1.2vh, 18px);
          background: transparent;
          border: none;
          padding: clamp(10px, 1vh, 18px) clamp(12px, 1.2vw, 24px);
          position: relative;
          width: 100%;
        }

        /* Left Column: Perfectly Concentric Orbit Dial */
        .scope-hub-col {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-orbital-dial {
          position: relative;
          width: clamp(240px, 18vw, 310px);
          height: clamp(240px, 18vw, 310px);
        }

        .orbit-ring-outer {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(236px, 17.6vw, 305px);
          height: clamp(236px, 17.6vw, 305px);
          border-radius: 50%;
          border: 2px dashed rgba(220, 38, 38, 0.45);
          transform: translate(-50%, -50%);
          animation: dialSpinSlow 45s linear infinite;
        }

        .orbit-ring-mid {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(186px, 14vw, 240px);
          height: clamp(186px, 14vw, 240px);
          border-radius: 50%;
          border: 1.5px solid rgba(220, 38, 38, 0.2);
          transform: translate(-50%, -50%);
        }

        .orbit-dots-layer {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(236px, 17.6vw, 305px);
          height: clamp(236px, 17.6vw, 305px);
          transform: translate(-50%, -50%);
          animation: dialSpinReverse 30s linear infinite;
          pointer-events: none;
        }

        .orbit-dot {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #DC2626;
          box-shadow: 0 0 6px rgba(220, 38, 38, 0.8);
        }

        .orbit-dot.dot-1 { top: 0; left: 50%; transform: translate(-50%, -50%); }
        .orbit-dot.dot-2 { top: 50%; right: 0; transform: translate(50%, -50%); }
        .orbit-dot.dot-3 { bottom: 0; left: 50%; transform: translate(-50%, 50%); }
        .orbit-dot.dot-4 { top: 50%; left: 0; transform: translate(-50%, -50%); }
        .orbit-dot.dot-5 { top: 15%; right: 15%; transform: translate(50%, -50%); }

        @keyframes dialSpinSlow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes dialSpinReverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }

        /* Central DUDI Red Disc */
        .hub-center-disc {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: clamp(138px, 10.5vw, 176px);
          height: clamp(138px, 10.5vw, 176px);
          border-radius: 50%;
          background: linear-gradient(135deg, #FF3B30 0%, #E52E2E 50%, #991B1B 100%);
          border: 3px solid rgba(255, 255, 255, 0.92);
          box-shadow: 0 10px 30px rgba(229, 46, 46, 0.45), inset 0 2px 8px rgba(255, 255, 255, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          z-index: 4;
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
        }

        .tech-orbital-dial:hover .hub-center-disc {
          transform: translate(-50%, -50%) scale(1.04);
          box-shadow: 0 14px 36px rgba(229, 46, 46, 0.58), inset 0 2px 10px rgba(255, 255, 255, 0.45);
        }

        .hub-content-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          width: 100%;
          padding: 0 14px;
          margin: 0;
          box-sizing: border-box;
        }

        .hub-tag {
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 2px;
          color: #ffffff;
          background: rgba(0, 0, 0, 0.25);
          padding: 3px 10px;
          border-radius: 12px;
          text-transform: uppercase;
          margin: 0 auto;
          display: inline-block;
          line-height: 1.2;
        }

        .hub-title {
          font-size: 1.28rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin: 5px 0 2px 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        }

        .hub-sub {
          font-size: 0.84rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          margin: 0;
          line-height: 1.2;
        }

        /* Right Side: Clean Parts List */
        .scope-curve-col {
          display: flex;
          align-items: center;
          width: 100%;
        }

        .arc-parts-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
          width: 100%;
        }

        .arc-part-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 11px 18px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(226, 232, 240, 0.85);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .arc-part-row:hover {
          transform: translateX(6px);
          background: #ffffff;
          border-color: rgba(239, 68, 68, 0.4);
          box-shadow: 0 8px 22px rgba(239, 68, 68, 0.1);
        }

        .part-prefix {
          min-width: 62px;
          text-align: right;
        }

        .part-code {
          font-size: 0.92rem;
          font-weight: 800;
          color: #0F172A;
          letter-spacing: 0.5px;
        }

        /* Perfectly Centered Icon inside Red Circle */
        .part-node-icon {
          width: 42px;
          height: 42px;
          min-width: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FF2D55 0%, #DC2626 100%);
          border: 2.5px solid #ffffff;
          box-shadow: 0 4px 14px rgba(239, 68, 68, 0.4);
          display: flex;
          align-items: center;
          justifyContent: center;
          box-sizing: border-box;
          padding: 0;
          margin: 0;
          transition: all 0.25s ease;
        }

        .part-node-icon svg {
          display: block;
          margin: auto;
        }

        .arc-part-row:hover .part-node-icon {
          transform: scale(1.12);
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.65);
        }

        .part-content {
          flex: 1;
        }

        .part-title {
          font-size: 0.92rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 3px 0;
          line-height: 1.25;
        }

        .part-desc {
          font-size: 0.78rem;
          color: #64748B;
          margin: 0;
          line-height: 1.45;
        }

        @media (max-width: 868px) {
          .scope-arc-container {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 10px;
          }
        }

        @media (max-width: 520px) {
          .tech-orbital-dial {
            transform: scale(0.82);
            margin: -20px auto;
          }
          .arc-part-row {
            padding: 8px 10px;
            gap: 10px;
          }
          .part-prefix {
            min-width: 48px;
          }
          .part-code {
            font-size: 0.8rem;
          }
        }
      `}} />
    </SectionWrapper>
  );
}
