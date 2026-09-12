import React from 'react';
import { SectionWrapper } from './SectionWrapper';

const orbitNodes = [
  { num: "01", text: "Thiếu Developer chuyên môn", pos: "pos-top" },
  { num: "02", text: "Backlog thay đổi liên tục", pos: "pos-top-right" },
  { num: "03", text: "Cần PM điều phối chuẩn", pos: "pos-bottom-right" },
  { num: "04", text: "Thiếu kết hợp đa vai trò", pos: "pos-bottom" },
  { num: "05", text: "Cần UI/UX chuyên sâu", pos: "pos-bottom-left" },
  { num: "06", text: "Tối ưu chi phí cố định", pos: "pos-top-left" },
];

export function ProblemSection() {
  return (
    <SectionWrapper id="s04-problem" className="problem-orbit-section">
      <div className="section-meta" style={{ marginBottom: '6px', textAlign: 'center' }}>
        <div className="section-tag" style={{ margin: '0 auto 4px auto' }}>Thực Trạng Doanh Nghiệp</div>
        <h2 style={{ fontSize: '1.45rem', marginBottom: '2px' }}>Những Thách Thức Về Kỹ Thuật Thường Gặp</h2>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0 auto' }}>
          Tránh lãng phí ngân sách và rủi ro thất thoát khách hàng tiềm năng.
        </p>
      </div>

      <div className="problem-tri-layout">
        {/* Left Column: Tác Động Chuyển Đổi */}
        <div className="impact-col left-col">
          <div className="col-header-tag">
            <span className="bullet-dot red"></span> TÁC ĐỘNG TIẾN ĐỘ & CHI PHÍ
          </div>

          <div className="impact-card">
            <div className="impact-card-top">
              <div className="impact-icon red-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                  <polyline points="17 18 23 18 23 12" />
                </svg>
              </div>
              <span className="impact-stat-badge red-badge">75% Doanh nghiệp</span>
            </div>
            <h4 className="impact-title">Mất uy tín & Trễ hạn bàn giao</h4>
            <p className="impact-desc">
              Khách hàng đánh giá thấp năng lực khi tính năng ra mắt trễ, backlog kỹ thuật dồn ứ kéo dài.
            </p>
          </div>

          <div className="impact-card">
            <div className="impact-card-top">
              <div className="impact-icon orange-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              </div>
              <span className="impact-stat-badge orange-badge">Lãng phí 3.2×</span>
            </div>
            <h4 className="impact-title">Thất thoát chi phí nhân sự</h4>
            <p className="impact-desc">
              Nuôi bộ máy cố định nhưng hiệu suất phân tán, chi phí duy trì nhân sự đè nặng dòng tiền.
            </p>
          </div>
        </div>

        {/* Center Column: Robot Head Orbit Hub */}
        <div className="orbit-center-hub">
          <div className="orbit-wheel">
            {/* Dashed Red Orbit Ring */}
            <div className="orbit-dashed-track"></div>

            {/* Center Robot Head with Glow */}
            <div className="center-robot-head">
              <div className="robot-glow-back"></div>
              <img
                src="/robot-head.png"
                alt="DUDI Tech Mascot Head"
                className="robot-avatar-img"
              />
            </div>

            {/* 6 Orbit Nodes */}
            {orbitNodes.map((node, i) => (
              <div key={i} className={`orbit-node-anchor ${node.pos}`}>
                <div className="orbit-badge-num">
                  <span className="badge-num-text">{node.num}</span>
                </div>
                <div className="orbit-pill-label">{node.text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Rủi Ro Kinh Doanh */}
        <div className="impact-col right-col">
          <div className="col-header-tag">
            <span className="bullet-dot blue"></span> RỦI RO DỰ ÁN & VẬN HÀNH
          </div>

          <div className="impact-card">
            <div className="impact-card-top">
              <div className="impact-icon blue-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                </svg>
              </div>
              <span className="impact-stat-badge blue-badge">88% Khách hàng B2B</span>
            </div>
            <h4 className="impact-title">Khó chào thầu & Chốt Deal</h4>
            <p className="impact-desc">
              Đối tác lớn luôn kiểm tra quy trình và năng lực cam kết trước khi duyệt ký hợp đồng.
            </p>
          </div>

          <div className="impact-card">
            <div className="impact-card-top">
              <div className="impact-icon purple-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <span className="impact-stat-badge purple-badge">100% Rủi ro</span>
            </div>
            <h4 className="impact-title">Phụ thuộc & Khó mở rộng</h4>
            <p className="impact-desc">
              Mã nguồn thiếu chuẩn modular, phát sinh lỗi kỹ thuật và tắc nghẽn nghiêm trọng khi mở rộng.
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .problem-orbit-section {
          padding-top: 6px;
          padding-bottom: 6px;
        }

        .problem-tri-layout {
          display: grid;
          grid-template-columns: 240px 1fr 240px;
          gap: 16px;
          align-items: center;
          margin-top: 4px;
          position: relative;
        }

        /* Left & Right Impact Columns */
        .impact-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 3;
        }

        .col-header-tag {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.8px;
          color: #475569;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 2px;
        }

        .bullet-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
        }
        .bullet-dot.red { background: #EF4444; box-shadow: 0 0 6px rgba(239, 68, 68, 0.8); }
        .bullet-dot.blue { background: #3B82F6; box-shadow: 0 0 6px rgba(59, 130, 246, 0.8); }

        .impact-card {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 12px;
          padding: 10px 12px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
          transition: all 0.25s ease;
        }

        .impact-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          border-color: rgba(255, 45, 85, 0.3);
        }

        .impact-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }

        .impact-icon {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justifyContent: center;
        }

        .red-icon { background: rgba(239, 68, 68, 0.1); color: #EF4444; }
        .orange-icon { background: rgba(245, 158, 11, 0.1); color: #F59E0B; }
        .blue-icon { background: rgba(59, 130, 246, 0.1); color: #3B82F6; }
        .purple-icon { background: rgba(168, 85, 247, 0.1); color: #A855F7; }

        .impact-stat-badge {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 20px;
        }

        .red-badge { background: #FEF2F2; color: #DC2626; border: 1px solid #FECACA; }
        .orange-badge { background: #FFFBEB; color: #D97706; border: 1px solid #FDE68A; }
        .blue-badge { background: #EFF6FF; color: #2563EB; border: 1px solid #BFDBFE; }
        .purple-badge { background: #FAF5FF; color: #9333EA; border: 1px solid #E9D5FF; }

        .impact-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0 0 3px 0;
          line-height: 1.25;
        }

        .impact-desc {
          font-size: 0.7rem;
          color: #64748B;
          line-height: 1.35;
          margin: 0;
        }

        /* Center Orbit Hub */
        .orbit-center-hub {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          min-height: 310px;
        }

        .orbit-wheel {
          position: relative;
          width: 320px;
          height: 310px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .orbit-dashed-track {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 2px dashed #EF4444;
          opacity: 0.85;
          animation: orbitRotate 40s linear infinite;
        }

        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .center-robot-head {
          position: relative;
          width: 105px;
          height: 105px;
          z-index: 2;
          display: flex;
          align-items: center;
          justifyContent: center;
          animation: robotFloat 4s ease-in-out infinite alternate;
        }

        @keyframes robotFloat {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-6px) scale(1.03); }
        }

        .robot-glow-back {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(239, 68, 68, 0.25) 0%, rgba(239, 68, 68, 0.05) 60%, transparent 80%);
          filter: blur(8px);
          z-index: -1;
        }

        .robot-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 8px 16px rgba(239, 68, 68, 0.25));
        }

        /* 6 Orbit Anchors placed EXACTLY along circular ring (R = 110px) */
        .orbit-node-anchor {
          position: absolute;
          top: 50%;
          left: 50%;
          display: flex;
          align-items: center;
          gap: 6px;
          z-index: 4;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .orbit-badge-num {
          width: 28px;
          height: 28px;
          min-width: 28px;
          border-radius: 50%;
          background: #EF4444;
          border: 2px solid #ffffff;
          color: #ffffff;
          display: grid;
          place-items: center;
          padding: 0;
          margin: 0;
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.6);
          box-sizing: border-box;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .badge-num-text {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 800;
          line-height: 1;
          text-align: center;
          letter-spacing: 0;
          margin: 0 auto;
          width: 100%;
          height: 100%;
        }

        .orbit-pill-label {
          background: #ffffff;
          border: 1px solid #E2E8F0;
          color: #1E293B;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 14px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          user-select: none;
        }

        /* Rich Hover Effects for the Entire Anchor Pill & Badge */
        .orbit-node-anchor:hover .orbit-badge-num {
          background: #DC2626;
          transform: scale(1.15);
          box-shadow: 0 0 14px rgba(239, 68, 68, 0.9);
        }

        .orbit-node-anchor:hover .orbit-pill-label {
          background: #ffffff;
          border-color: #EF4444;
          color: #DC2626;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(239, 68, 68, 0.2), 0 2px 6px rgba(0, 0, 0, 0.06);
        }

        /* Exact Mathematical Trigonometry on Circle R = 110px (Badge radius = 14px) */
        /* 01: Top (x = 0, y = -110px) */
        .pos-top {
          transform: translate(-14px, -124px);
          flex-direction: row;
        }

        /* 02: Top-Right (x = +95px, y = -55px) */
        .pos-top-right {
          transform: translate(81px, -69px);
          flex-direction: row;
        }

        /* 03: Bottom-Right (x = +95px, y = +55px) */
        .pos-bottom-right {
          transform: translate(81px, 41px);
          flex-direction: row;
        }

        /* 04: Bottom (x = 0, y = +110px) */
        .pos-bottom {
          transform: translate(-14px, 96px);
          flex-direction: row;
        }

        /* 05: Bottom-Left (x = -95px, y = +55px) */
        .pos-bottom-left {
          transform: translate(calc(-100% + 14px - 95px), 41px);
          flex-direction: row-reverse;
        }

        /* 06: Top-Left (x = -95px, y = -55px) */
        .pos-top-left {
          transform: translate(calc(-100% + 14px - 95px), -69px);
          flex-direction: row-reverse;
        }

        @media (max-width: 1024px) {
          .problem-tri-layout {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .orbit-center-hub {
            order: -1;
          }
        }
      `}} />
    </SectionWrapper>
  );
}
