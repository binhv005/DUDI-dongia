import React from 'react';
import { SectionWrapper } from './SectionWrapper';

const casesData = [
  {
    id: "case-1",
    code: "#CASE-01",
    title: "Hệ Thống Dashboard Quản Trị & Báo Cáo",
    status: "Đã Bàn Giao",
    roles: ["1 Senior Fullstack Dev", "1 UI/UX Designer"],
    estimated: 40,
    actual: 38.5,
    saving: "Tiết kiệm 1.5h (-3.8%)",
    deliverables: ["Figma UI Kit Modular", "Source Code React/NodeJS", "Timesheet Chi Tiết"],
    note: "Bàn giao đúng tiến độ, timesheet đối soát minh bạch 100%."
  },
  {
    id: "case-2",
    code: "#CASE-02",
    title: "Tối Ưu Hiệu Năng & Tích Hợp API Mobile",
    status: "Đã Bàn Giao",
    roles: ["1 Senior Backend Developer"],
    estimated: 25,
    actual: 24.0,
    saving: "Tiết kiệm 1.0h (-4.0%)",
    deliverables: ["Latency giảm 65%", "Swagger API Documentation", "Bảo mật Repo 100%"],
    note: "Dữ liệu được bảo mật danh tính khách hàng và repository tuyệt đối."
  }
];

export function CaseSection() {
  return (
    <SectionWrapper id="s08-cases" className="case-section">
      <div className="section-meta" style={{ marginBottom: '12px', textAlign: 'center' }}>
        <div className="section-tag" style={{ margin: '0 auto 4px auto' }}>Minh Họa Kỹ Thuật</div>
        <h2 style={{ fontSize: '1.45rem', marginBottom: '4px' }}>Technical Snapshot & Cấu Trúc Ước Lượng Mẫu</h2>
        <p className="section-desc" style={{ color: 'var(--text-muted)', margin: '0 auto', fontSize: '0.82rem' }}>
          Mẫu minh họa cách phân rã backlog và theo dõi số giờ triển khai thực tế.
        </p>
      </div>

      <div className="cases-grid">
        {casesData.map((item) => (
          <div key={item.id} className="case-card">
            {/* Top glowing accent line on hover */}
            <div className="case-top-accent"></div>

            {/* Card Header with Robot Head Avatar */}
            <div className="case-header">
              <div className="case-header-left">
                <div className="card-mascot-wrap">
                  <img
                    src="/robot-head.webp"
                    alt="DUDI Tech Mascot"
                    className="card-robot-head-img"
                  />
                  <span className="card-mascot-glow"></span>
                </div>
                <div className="case-title-group">
                  <span className="case-code">{item.code}</span>
                  <h3 className="case-title">{item.title}</h3>
                </div>
              </div>

              <div className="case-status-badge">
                <span className="status-dot"></span>
                <span>{item.status}</span>
              </div>
            </div>

            {/* Roles Tags */}
            <div className="case-roles-row">
              <span className="case-row-label">Nhân sự:</span>
              <div className="roles-tags">
                {item.roles.map((r, idx) => (
                  <span key={idx} className="role-pill">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Timesheet Efficiency Comparison Meter */}
            <div className="timesheet-box">
              <div className="timesheet-header">
                <span className="timesheet-label">Theo dõi khối lượng giờ:</span>
                <span className="timesheet-saving">{item.saving}</span>
              </div>

              <div className="hours-stats-row">
                <div className="hour-stat">
                  <span className="stat-name">Ước lượng:</span>
                  <span className="stat-val est">{item.estimated} giờ</span>
                </div>
                <div className="hour-stat">
                  <span className="stat-name">Thực tế:</span>
                  <span className="stat-val act">{item.actual} giờ</span>
                </div>
              </div>

              {/* Progress track */}
              <div className="hours-progress-bar">
                <div 
                  className="hours-progress-fill" 
                  style={{ width: `${(item.actual / item.estimated) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Deliverables Output Pills */}
            <div className="case-deliverables">
              <span className="case-row-label">Đầu ra:</span>
              <div className="deliverable-tags">
                {item.deliverables.map((deliv, idx) => (
                  <span key={idx} className="deliv-pill">
                    <span className="deliv-check">✓</span> {deliv}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .case-section {
          position: relative;
        }

        .cases-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(22px, 2.5vw, 40px);
          margin-top: clamp(8px, 1.2vh, 16px);
          width: 100%;
        }

        .case-card {
          position: relative;
          background: linear-gradient(135deg, #FF2D55 0%, #E11D48 45%, #BE123C 100%);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: clamp(16px, 1.6vw, 24px);
          padding: clamp(18px, 2.4vh, 30px) clamp(18px, 2vw, 30px);
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.4vh, 18px);
          box-shadow: 0 12px 32px rgba(225, 29, 72, 0.28), 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .case-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(225, 29, 72, 0.42), 0 4px 12px rgba(0, 0, 0, 0.12);
        }

        .case-top-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.2) 100%);
        }

        .case-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .case-header-left {
          display: flex;
          align-items: center;
          gap: clamp(10px, 1vw, 16px);
        }

        .card-mascot-wrap {
          position: relative;
          width: clamp(38px, 3vw, 50px);
          height: clamp(38px, 3vw, 50px);
          flex-shrink: 0;
        }

        .card-robot-head-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.25));
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .case-card:hover .card-robot-head-img {
          transform: scale(1.16) rotate(4deg);
        }

        .case-title-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .case-code {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 1.2px;
          color: #FEF08A;
          text-transform: uppercase;
        }

        .case-title {
          font-size: 0.96rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          line-height: 1.25;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        }

        .case-status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.9);
          color: #059669;
          font-size: 0.68rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 20px;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 6px rgba(16, 185, 129, 0.8);
        }

        /* Roles Row */
        .case-roles-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .case-row-label {
          font-size: 0.74rem;
          font-weight: 800;
          color: #ffffff;
          min-width: 54px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        }

        .roles-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .role-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.9);
          color: #0F172A;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 9px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }

        .role-pill svg {
          color: #E11D48;
        }

        .role-pill:hover {
          transform: translateY(-2px);
        }

        /* Timesheet Box */
        .timesheet-box {
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 14px;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
          transition: all 0.25s ease;
        }

        .timesheet-header {
          display: flex;
          justifyContent: space-between;
          align-items: center;
          width: 100%;
          font-size: 0.74rem;
          gap: 12px;
        }

        .timesheet-label {
          font-weight: 800;
          color: #1E293B;
        }

        .timesheet-saving {
          font-weight: 800;
          color: #DC2626;
          background: #FEF2F2;
          padding: 3px 10px;
          border-radius: 12px;
          border: 1px solid #FECACA;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .hours-stats-row {
          display: flex;
          justifyContent: space-between;
          align-items: center;
          width: 100%;
          font-size: 0.76rem;
        }

        .stat-name {
          color: #64748B;
          margin-right: 4px;
          font-weight: 600;
        }

        .stat-val.est {
          color: #475569;
          font-weight: 700;
        }

        .stat-val.act {
          color: #0F172A;
          font-weight: 900;
        }

        .hours-progress-bar {
          width: 100%;
          height: 7px;
          background: #F1F5F9;
          border-radius: 6px;
          overflow: hidden;
        }

        .hours-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #10B981 0%, #059669 100%);
          border-radius: 6px;
          transition: width 0.6s ease;
        }

        /* Deliverables */
        .case-deliverables {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .deliverable-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .deliv-pill {
          display: flex;
          align-items: center;
          gap: 4px;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.9);
          color: #0F172A;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 9px;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }

        .deliv-pill .deliv-check {
          color: #059669;
          font-weight: 900;
        }

        .deliv-pill:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .case-section {
            padding: 16px 0;
          }
          .cases-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}} />
    </SectionWrapper>
  );
}
