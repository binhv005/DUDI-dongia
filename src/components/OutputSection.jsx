import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { outputPills, cooperationModels } from '../data/content';

export function OutputSection() {
  return (
    <SectionWrapper id="s05-output" className="output-section">
      <div className="section-meta">
        <div className="section-tag">Cam Kết Minh Bạch</div>
        <h2>Đầu Ra & Quy Chuẩn Giờ Làm Việc</h2>
        <p className="section-desc">Phạm vi công việc rõ ràng, tiêu chuẩn đo lường minh bạch và hình thức hợp tác linh hoạt.</p>
      </div>

      <div className="output-concept-layout">
        {/* Left Side: Semi-Circular Arch Card */}
        <div className="output-arch-card">
          <div>
            <div className="output-deco-dots">
              <span className="deco-dot dot-1" />
              <span className="deco-dot dot-2" />
              <span className="deco-dot dot-3" />
            </div>

            <h3 className="output-arch-title">Đầu Việc Phạm Vi Triển Khai</h3>
            <p className="output-arch-subtitle">Toàn diện các tiêu chuẩn kỹ thuật bàn giao</p>

            <div className="output-pills-wrap">
              {outputPills.map((pill, idx) => (
                <span key={idx} className="output-pill-item">
                  <span className="pill-dot" />
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="output-rule-box">
            <div className="output-rule-badge">Định nghĩa 1 giờ tại DUDI:</div>
            <p className="output-rule-desc">
              <strong>60 phút làm việc thực tế</strong> bao gồm phân tích, lập trình, kiểm thử & họp cần thiết. Không tính giờ chờ. Timesheet minh bạch đối soát trước khi xuất hóa đơn.
            </p>
          </div>
        </div>

        {/* Right Side: 3 Stacked Tech Red Bars (01, 02, 03) */}
        <div className="output-bars-container">
          {cooperationModels.map((model, index) => {
            const numStr = `0${index + 1}`;
            return (
              <div key={model.id} className={`output-model-bar bar-step-${index + 1}`}>
                <div className="model-bar-num-box">
                  <span className="model-bar-num">{numStr}</span>
                </div>
                <div className="model-bar-content">
                  <div className="model-bar-top">
                    <h4 className="model-bar-title">{model.name}</h4>
                    <span className="model-bar-badge">{model.highlight}</span>
                  </div>
                  <div className="model-bar-details">
                    <div className="model-detail-item">
                      <span className="model-detail-label">Phù hợp</span>
                      <span className="model-detail-val">{model.fitFor}</span>
                    </div>
                    <div className="model-detail-item">
                      <span className="model-detail-label">Ước lượng</span>
                      <span className="model-detail-val">{model.estimateBy}</span>
                    </div>
                    <div className="model-detail-item">
                      <span className="model-detail-label">Nghiệm thu</span>
                      <span className="model-detail-val">{model.acceptBy}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
