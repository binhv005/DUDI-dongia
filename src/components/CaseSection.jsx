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
                    src="/robot-head.png"
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
                    ✓ {deliv}
                  </span>
                ))}
              </div>
            </div>

            {/* Privacy & Guarantee Note */}
            <div className="case-note-box">
              <span className="note-star">★</span>
              <span>{item.note}</span>
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
          gap: 20px;
          margin-top: 8px;
        }

        .case-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #E2E8F0;
          border-radius: 18px;
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .case-top-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3.5px;
          background: linear-gradient(90deg, #FF2D55 0%, #FF6B81 50%, #FF2D55 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .case-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .case-card:hover .case-top-accent {
          opacity: 1;
        }

        /* Header & Robot Avatar */
        .case-header {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          gap: 10px;
          border-bottom: 1px solid #F1F5F9;
          padding-bottom: 8px;
        }

        .case-header-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .card-mascot-wrap {
          position: relative;
          width: 38px;
          height: 38px;
          min-width: 38px;
          display: flex;
          align-items: center;
          justifyContent: center;
        }

        .card-robot-head-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 4px 8px rgba(239, 68, 68, 0.35));
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .case-card:hover .card-robot-head-img {
          transform: scale(1.18) rotate(4deg);
        }

        .case-title-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .case-code {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #EF4444;
          text-transform: uppercase;
        }

        .case-title {
          font-size: 0.92rem;
          font-weight: 800;
          color: #0F172A;
          margin: 0;
          line-height: 1.25;
        }

        .case-status-badge {
          display: flex;
          align-items: center;
          gap: 5px;
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          color: #059669;
          font-size: 0.68rem;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 20px;
          white-space: nowrap;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 6px rgba(16, 185, 129, 0.8);
        }

        /* Roles Row */
        .case-roles-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .case-row-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: #64748B;
          min-width: 52px;
        }

        .roles-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .role-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          color: #334155;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 2px 7px;
          border-radius: 6px;
        }

        /* Timesheet Box */
        .timesheet-box {
          background: #F8FAFC;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 9px 12px;
          display: flex;
          flex-direction: column;
          gap: 5px;
          transition: all 0.25s ease;
        }

        .case-card:hover .timesheet-box {
          background: #FFF5F5;
          border-color: #FECACA;
        }

        .timesheet-header {
          display: flex;
          justifyContent: space-between;
          align-items: center;
          font-size: 0.72rem;
        }

        .timesheet-label {
          font-weight: 700;
          color: #475569;
        }

        .timesheet-saving {
          font-weight: 700;
          color: #DC2626;
          background: #FEF2F2;
          padding: 1px 7px;
          border-radius: 10px;
          border: 1px solid #FECACA;
        }

        .hours-stats-row {
          display: flex;
          justifyContent: space-between;
          align-items: center;
          font-size: 0.76rem;
        }

        .stat-name {
          color: #64748B;
          margin-right: 4px;
        }

        .stat-val.est {
          color: #64748B;
          font-weight: 600;
        }

        .stat-val.act {
          color: #0F172A;
          font-weight: 800;
        }

        .hours-progress-bar {
          width: 100%;
          height: 6px;
          background: #E2E8F0;
          border-radius: 4px;
          overflow: hidden;
        }

        .hours-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #10B981 0%, #059669 100%);
          border-radius: 4px;
          transition: width 0.6s ease;
        }

        /* Deliverables */
        .case-deliverables {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .deliverable-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .deliv-pill {
          background: #F0FDF4;
          border: 1px solid #DCFCE7;
          color: #166534;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 2px 7px;
          border-radius: 6px;
        }

        /* Note Box */
        .case-note-box {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #F8FAFC;
          border-left: 3px solid #EF4444;
          padding: 6px 10px;
          border-radius: 0 8px 8px 0;
          font-size: 0.72rem;
          color: #475569;
          line-height: 1.35;
        }

        .note-star {
          color: #EF4444;
          font-weight: 800;
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
