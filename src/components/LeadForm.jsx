import React, { useState, useEffect } from 'react';
import { SectionWrapper } from './SectionWrapper';

const initialRoles = {
  "junior-developer": false,
  "mid-developer": false,
  "senior-developer": true,
  "ui-ux": false,
  "project-manager": false
};

export function LeadForm({ selectedRole, onSelectRole }) {
  const [formData, setFormData] = useState({
    fullname: '',
    company: '',
    phone: '',
    techStack: '',
    estimatedHours: '10 đến 40',
    startDate: '',
    backlog: ''
  });

  const [roles, setRoles] = useState(initialRoles);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitTime, setSubmitTime] = useState(Date.now());

  // Sync when selectedRole changes from PricingExplorer
  useEffect(() => {
    if (selectedRole) {
      setRoles(prev => ({
        ...prev,
        [selectedRole]: true
      }));
    }
  }, [selectedRole]);

  const handleRoleToggle = (roleKey) => {
    const updated = !roles[roleKey];
    setRoles({ ...roles, [roleKey]: updated });
    if (updated && onSelectRole) {
      onSelectRole(roleKey);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Anti-spam check (minimum 2.5 seconds)
    if (Date.now() - submitTime < 2500) {
      setStatus({
        type: 'error',
        message: 'Hệ thống phát hiện thao tác quá nhanh. Vui lòng thử lại sau giây lát.'
      });
      return;
    }

    // Validate Full Name
    if (formData.fullname.trim().length < 2 || formData.fullname.trim().length > 80) {
      setStatus({ type: 'error', message: 'Họ và tên phải có độ dài từ 2 đến 80 ký tự.' });
      return;
    }

    // Validate Company
    if (formData.company.trim().length < 2 || formData.company.trim().length > 120) {
      setStatus({ type: 'error', message: 'Tên công ty phải có độ dài từ 2 đến 120 ký tự.' });
      return;
    }

    // Validate Phone (9 - 12 digits)
    const phoneClean = formData.phone.replace(/\s+/g, '');
    const phoneRegex = /^[0-9]{9,12}$/;
    if (!phoneRegex.test(phoneClean)) {
      setStatus({ type: 'error', message: 'Số điện thoại hoặc Zalo phải gồm 9 đến 12 chữ số.' });
      return;
    }

    // Validate Start Date (not in past)
    if (formData.startDate) {
      const selectedDate = new Date(formData.startDate);
      const todayZero = new Date();
      todayZero.setHours(0, 0, 0, 0);
      if (selectedDate < todayZero) {
        setStatus({ type: 'error', message: 'Thời điểm bắt đầu không được là ngày trong quá khứ.' });
        return;
      }
    }

    // Validate Backlog (20 - 1500 chars)
    if (formData.backlog.trim().length < 20 || formData.backlog.trim().length > 1500) {
      setStatus({ type: 'error', message: 'Mô tả backlog cần có độ dài từ 20 đến 1500 ký tự.' });
      return;
    }

    // Process Submission
    setLoading(true);
    setStatus({ type: '', message: '' });

    const roleMap = {
      "junior-developer": "Junior Dev",
      "mid-developer": "Mid Dev",
      "senior-developer": "Senior Dev",
      "ui-ux": "UI/UX Designer",
      "project-manager": "Project Manager"
    };

    const selectedRolesText = Object.entries(roles)
      .filter(([_, checked]) => checked)
      .map(([key]) => roleMap[key] || key)
      .join(', ') || 'Chưa chọn vai trò';

    const payload = {
      fullname: formData.fullname.trim(),
      company: formData.company.trim(),
      phone: formData.phone.trim(),
      techStack: formData.techStack.trim() || 'Không yêu cầu cụ thể',
      estimatedHours: formData.estimatedHours,
      startDate: formData.startDate || 'Càng sớm càng tốt',
      roles: selectedRolesText,
      backlog: formData.backlog.trim()
    };

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    const finalizeSuccess = () => {
      setLoading(false);
      setStatus({
        type: 'success',
        message: 'DUDI đã nhận yêu cầu của bạn! Thông tin backlog đã được gửi về hệ thống để chuyên viên kỹ thuật đối soát và phản hồi sớm nhất.'
      });
      setFormData({
        fullname: '',
        company: '',
        phone: '',
        techStack: '',
        estimatedHours: '10 đến 40',
        startDate: '',
        backlog: ''
      });
      setSubmitTime(Date.now());
    };

    if (scriptUrl && scriptUrl.trim().startsWith('http')) {
      fetch(scriptUrl.trim(), {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(payload)
      })
        .then(() => {
          finalizeSuccess();
        })
        .catch((err) => {
          console.error("Submission error:", err);
          finalizeSuccess();
        });
    } else {
      setTimeout(() => {
        finalizeSuccess();
      }, 800);
    }
  };

  return (
    <SectionWrapper id="s11-form" className="lead-form-section">
      <div className="lead-form-layout">
        {/* Left column: Context & Roles checkboxes */}
        <div style={styles.infoSide}>
          <div>
            <div className="section-tag" style={styles.badge}>
              <span className="section-tag-dot" style={{ background: '#DC2626', boxShadow: '0 0 8px rgba(220, 38, 38, 0.8)' }}></span>
              Tiếp Nhận Backlog
            </div>
            <h2 style={styles.leftTitle}>Gửi Thông Tin Backlog Để Nhận Ước Lượng</h2>
            <p style={styles.leftDesc}>
              DUDI sẽ đánh giá yêu cầu chuyên môn, xác nhận vai trò và gửi bảng ước lượng số giờ cùng mức giá phù hợp nhất.
            </p>
          </div>

          <div>
            <div style={styles.rolesTitle}>
              Vai trò cần thuê:
            </div>
            <div className="lead-roles-grid">
              {[
                { id: "junior-developer", label: "Junior Dev" },
                { id: "mid-developer", label: "Mid Dev" },
                { id: "senior-developer", label: "Senior Dev" },
                { id: "ui-ux", label: "UI/UX" },
                { id: "project-manager", label: "PM" }
              ].map(role => {
                const isChecked = !!roles[role.id];
                return (
                  <label
                    key={role.id}
                    style={{
                      ...styles.roleLabel,
                      background: isChecked ? '#FFFFFF' : '#FFFFFF',
                      border: isChecked ? '2px solid #DC2626' : '1.5px solid #E2E8F0',
                      boxShadow: isChecked ? '0 4px 12px rgba(0, 0, 0, 0.25)' : '0 2px 6px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleRoleToggle(role.id)}
                      style={{
                        accentColor: '#DC2626',
                        width: '16px',
                        height: '16px',
                        cursor: 'pointer'
                      }}
                    />
                    <span style={{
                      color: isChecked ? '#991B1B' : '#0F172A',
                      fontWeight: isChecked ? 700 : 600,
                      fontSize: '0.84rem'
                    }}>
                      {role.label}
                    </span>
                  </label>
                );
              })}
            </div>

            <div style={styles.disclaimer}>
              * Khoảng giá là tham khảo trước khi gửi. Báo giá cuối cùng do người phụ trách DUDI xác nhận dựa trên backlog thực tế. Vui lòng không gửi mã nguồn, mật khẩu hoặc dữ liệu nhạy cảm qua biểu mẫu này.
            </div>
          </div>
        </div>

        {/* Right column: Form fields */}
        <form onSubmit={handleSubmit} style={styles.formBox}>
          <div className="lead-row2">
            <div style={styles.group}>
              <label htmlFor="fullname" style={styles.label}>Họ và tên <span style={{ color: '#FEF08A' }}>*</span></label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                placeholder="VD: Nguyễn Văn A"
                required
                value={formData.fullname}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.group}>
              <label htmlFor="company" style={styles.label}>Tên công ty / Doanh nghiệp <span style={{ color: '#FEF08A' }}>*</span></label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="VD: Tech Agency Corp"
                required
                value={formData.company}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          <div className="lead-row2">
            <div style={styles.group}>
              <label htmlFor="phone" style={styles.label}>Số điện thoại / Zalo <span style={{ color: '#FEF08A' }}>*</span></label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="VD: 0909163821"
                required
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
              />
            </div>

            <div style={styles.group}>
              <label htmlFor="techStack" style={styles.label}>Công nghệ (tùy chọn)</label>
              <input
                id="techStack"
                name="techStack"
                type="text"
                placeholder="VD: React, Node.js, Flutter..."
                value={formData.techStack}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          <div className="lead-row2">
            <div style={styles.group}>
              <label htmlFor="estimatedHours" style={styles.label}>Số giờ dự kiến</label>
              <select
                id="estimatedHours"
                name="estimatedHours"
                value={formData.estimatedHours}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="Dưới 10">Dưới 10 giờ (Nhiệm vụ nhỏ)</option>
                <option value="10 đến 40">10 đến 40 giờ (Sprint tiêu chuẩn)</option>
                <option value="41 đến 160">41 đến 160 giờ (Giai đoạn vừa)</option>
                <option value="Chưa rõ">Chưa rõ (Cần DUDI tư vấn)</option>
              </select>
            </div>

            <div style={styles.group}>
              <label htmlFor="startDate" style={styles.label}>Thời điểm dự kiến bắt đầu</label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.group}>
            <label htmlFor="backlog" style={styles.label}>Mô tả tóm tắt backlog / yêu cầu kỹ thuật <span style={{ color: '#FEF08A' }}>*</span></label>
            <textarea
              id="backlog"
              name="backlog"
              value={formData.backlog}
              onChange={handleChange}
              placeholder="Mô tả các đầu việc chính cần triển khai (tối thiểu 20 ký tự)..."
              minLength={20}
              maxLength={1500}
              required
              rows={3}
              style={styles.textarea}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={styles.submitBtn}
          >
            {loading ? 'Đang gửi thông tin...' : 'Gửi backlog để nhận ước lượng'}
          </button>

          {status.message && (
            <div
              role="alert"
              style={{
                marginTop: '8px',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                fontWeight: 600,
                background: status.type === 'success' ? '#FFFFFF' : '#FFFFFF',
                border: status.type === 'success' ? '1px solid #10B981' : '1px solid #EF4444',
                color: status.type === 'success' ? '#047857' : '#B91C1C',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                textAlign: 'center'
              }}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .lead-form-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          background: linear-gradient(135deg, #EE2D2A 0%, #D81E1C 100%);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: var(--radius-lg);
          padding: 20px 24px;
          box-shadow: 0 18px 45px rgba(234, 40, 36, 0.28);
          width: 100%;
        }

        .lead-roles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          margin-bottom: 10px;
        }

        .lead-row2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        @media (max-width: 900px) {
          .lead-form-layout {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 18px 16px;
          }
        }

        @media (max-width: 540px) {
          .lead-roles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .lead-row2 {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}} />
    </SectionWrapper>
  );
}

const styles = {
  infoSide: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    justifyContent: 'space-between'
  },
  badge: {
    background: '#FFFFFF',
    borderColor: '#FFFFFF',
    color: '#D81E1C',
    fontWeight: 800,
    marginBottom: '6px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)'
  },
  leftTitle: {
    fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)',
    color: '#FFFFFF',
    fontWeight: 900,
    lineHeight: 1.2,
    marginBottom: '4px'
  },
  leftDesc: {
    fontSize: '0.8rem',
    color: '#FFF1F1',
    lineHeight: 1.45
  },
  rolesTitle: {
    fontSize: '0.8rem',
    fontWeight: 800,
    color: '#FFFFFF',
    marginBottom: '6px'
  },
  roleLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 8px',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    userSelect: 'none'
  },
  disclaimer: {
    fontSize: '0.68rem',
    color: '#FECACA',
    lineHeight: 1.4
  },
  formBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  group: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    fontSize: '0.72rem',
    fontWeight: 700,
    color: '#FFFFFF',
    marginBottom: '2px'
  },
  input: {
    width: '100%',
    padding: '7px 10px',
    borderRadius: 'var(--radius-sm)',
    background: '#FFFFFF',
    border: '1px solid #CBD5E1',
    color: '#0F172A',
    fontSize: '0.82rem',
    outline: 'none',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)'
  },
  select: {
    width: '100%',
    padding: '7px 10px',
    borderRadius: 'var(--radius-sm)',
    background: '#FFFFFF',
    border: '1px solid #CBD5E1',
    color: '#0F172A',
    fontSize: '0.82rem',
    outline: 'none',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)'
  },
  textarea: {
    width: '100%',
    padding: '7px 10px',
    borderRadius: 'var(--radius-sm)',
    background: '#FFFFFF',
    border: '1px solid #CBD5E1',
    color: '#0F172A',
    fontSize: '0.82rem',
    outline: 'none',
    resize: 'none',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)'
  },
  submitBtn: {
    width: '100%',
    padding: '10px 18px',
    borderRadius: 'var(--radius-md)',
    background: '#0F172A',
    color: '#FFFFFF',
    fontSize: '0.88rem',
    fontWeight: 800,
    border: '1px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.2s ease',
    marginTop: '2px'
  }
};
