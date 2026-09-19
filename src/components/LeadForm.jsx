import React, { useState, useEffect } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { CheckCircle2, MessageSquare, RotateCcw, Sparkles, PhoneCall, ShieldCheck } from 'lucide-react';

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedInfo, setSubmittedInfo] = useState({ leadId: '', fullname: '', phone: '', company: '' });
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

  const handleResetForm = () => {
    setIsSubmitted(false);
    setStatus({ type: '', message: '' });
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

    const requirementsText = "Vai trò: " + selectedRolesText + " | Tech: " + (formData.techStack || "Không yêu cầu") + " | Bắt đầu: " + (formData.startDate || "Sớm") + " | Backlog: " + formData.backlog.trim();

    // =========================================================================
    // 🚀 GỬI TRỰC TIẾP VÀO FIREBASE DASHBOARD
    // =========================================================================
    const FIREBASE_PROJECT_ID = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_FIREBASE_PROJECT_ID) || 'dudi-leads';
    const FIREBASE_API_KEY = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_FIREBASE_API_KEY) || 'AIzaSyBv2l4OH6dtaBqCx5D_rxtDT2HkMPfZ3kA';

    const fbLeadId = 'DUDI-' + Math.floor(100000 + Math.random() * 900000);
    const fbCreatedAt = new Date().toISOString();

    try {
      const fbUrl = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/leads/${fbLeadId}?key=${FIREBASE_API_KEY}`;
      
      const fbPayload = {
        fields: {
          id: { stringValue: fbLeadId },
          customerName: { stringValue: formData.fullname.trim() },
          phone: { stringValue: formData.phone.trim() },
          email: { stringValue: 'Chưa cung cấp' },
          company: { stringValue: formData.company.trim() },
          serviceId: { stringValue: 'dudi-dongia' },
          serviceName: { stringValue: 'Bảng Đơn Giá & Thuê Kỹ Sư' },
          budget: { stringValue: formData.estimatedHours ? (formData.estimatedHours + " giờ") : "Thỏa thuận" },
          source: { stringValue: 'Website Bảng Đơn Giá' },
          sourceUrl: { stringValue: typeof window !== 'undefined' ? window.location.href : 'https://dudi-dongia.vercel.app' },
          status: { stringValue: 'new' },
          priority: { stringValue: 'high' },
          createdAt: { stringValue: fbCreatedAt },
          requirements: { stringValue: requirementsText }
        }
      };

      fetch(fbUrl, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fbPayload)
      }).then(res => {
        console.log('📡 [Firebase Live] Lead synced to Dashboard:', fbLeadId, res.status);
      }).catch(err => console.warn('Firebase sync warning:', err));
    } catch (fbErr) {
      console.warn('Firebase error:', fbErr);
    }

    const payload = {
      lead_id: fbLeadId,
      fullname: formData.fullname.trim(),
      company: formData.company.trim(),
      phone: formData.phone.trim(),
      techStack: formData.techStack.trim() || 'Không yêu cầu cụ thể',
      estimatedHours: formData.estimatedHours,
      startDate: formData.startDate || 'Càng sớm càng tốt',
      roles: selectedRolesText,
      backlog: formData.backlog.trim(),
      timestamp: fbCreatedAt
    };

    const currentSubmitted = {
      leadId: fbLeadId,
      fullname: formData.fullname.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim()
    };

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    const finalizeSuccess = () => {
      setLoading(false);
      setSubmittedInfo(currentSubmitted);
      setIsSubmitted(true);
      setStatus({ type: '', message: '' });
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
        {/* Left column: Context */}
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

          <div style={styles.benefitList}>
            <div style={styles.benefitItem}>
              <div style={styles.benefitIcon}>
                <ShieldCheck style={{ width: 18, height: 18, color: '#DC2626' }} />
              </div>
              <div>
                <span style={styles.benefitTitle}>Bảo mật mã nguồn & NDA 100%</span>
                <p style={styles.benefitDesc}>Toàn bộ tài liệu backlog và ý tưởng sản phẩm được ký cam kết bảo mật trước khi triển khai.</p>
              </div>
            </div>

            <div style={styles.benefitItem}>
              <div style={styles.benefitIcon}>
                <PhoneCall style={{ width: 18, height: 18, color: '#DC2626' }} />
              </div>
              <div>
                <span style={styles.benefitTitle}>Phản hồi đối soát trong 15 – 30 phút</span>
                <p style={styles.benefitDesc}>Technical Lead trực tiếp liên hệ trao đổi, không qua trung gian kinh doanh.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Form fields OR Success Screen */}
        {isSubmitted ? (
          /* BẢNG THÔNG BÁO GỬI THÀNH CÔNG */
          <div style={styles.successCard} className="animate-in fade-in zoom-in-95 duration-300">
            {/* Header Success Badge */}
            <div style={styles.successIconOuter}>
              <div style={styles.successIconInner}>
                <CheckCircle2 style={{ width: 36, height: 36, color: '#FFFFFF' }} />
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 12 }}>
              <span style={styles.leadIdBadge}>
                Mã tiếp nhận: #{submittedInfo.leadId || 'DUDI-SUCCESS'}
              </span>
              <h3 style={styles.successTitle}>Gửi Yêu Cầu Thành Công! 🎉</h3>
              <p style={styles.successDesc}>
                Cảm ơn <strong>{submittedInfo.fullname}</strong>! Thông tin backlog của <strong>{submittedInfo.company}</strong> đã được chuyển trực tiếp đến đội ngũ kỹ thuật DUDI.
              </p>
            </div>

            {/* Confirmation details summary box */}
            <div style={styles.confirmBox}>
              <div style={styles.confirmRow}>
                <span style={styles.confirmLabel}>Số điện thoại / Zalo:</span>
                <strong style={styles.confirmValue}>{submittedInfo.phone}</strong>
              </div>
              <div style={styles.confirmRow}>
                <span style={styles.confirmLabel}>Thời gian phản hồi:</span>
                <strong style={{ ...styles.confirmValue, color: '#16A34A' }}>Trong vòng 15 – 30 phút</strong>
              </div>
              <div style={styles.confirmRow}>
                <span style={styles.confirmLabel}>Đơn vị xử lý:</span>
                <strong style={styles.confirmValue}>Technical Lead DUDI</strong>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div style={styles.successActions}>
              <a
                href="https://zalo.me/0909163821"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.zaloActionBtn}
              >
                <MessageSquare style={{ width: 18, height: 18 }} />
                <span>Nhắn Zalo Kỹ Thuật Ngay</span>
              </a>

              <button
                type="button"
                onClick={handleResetForm}
                style={styles.resetBtn}
              >
                <RotateCcw style={{ width: 15, height: 15 }} />
                <span>Gửi thêm yêu cầu backlog khác</span>
              </button>
            </div>
          </div>
        ) : (
          /* FORM NHẬP THÔNG TIN BACKLOG */
          <form onSubmit={handleSubmit} style={styles.formBox}>
            {/* Vai trò cần thuê */}
            <div style={styles.group}>
              <label style={styles.label}>
                Vai trò cần thuê <span style={{ color: '#FEF08A' }}>*</span>
              </label>
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
                        background: '#FFFFFF',
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
                        fontWeight: isChecked ? 800 : 600,
                        fontSize: '0.84rem'
                      }}>
                        {role.label}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

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
                  background: '#FFFFFF',
                  border: status.type === 'error' ? '1px solid #EF4444' : '1px solid #10B981',
                  color: status.type === 'error' ? '#B91C1C' : '#047857',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                  textAlign: 'center'
                }}
              >
                {status.message}
              </div>
            )}
          </form>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .lead-form-layout {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: clamp(24px, 3.5vw, 54px);
          align-items: center;
          width: 100%;
        }

        .lead-roles-grid {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(8px, 0.8vw, 12px);
          margin-bottom: clamp(10px, 1.2vh, 18px);
        }

        .lead-row2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(10px, 1.2vw, 18px);
        }

        @media (max-width: 900px) {
          .lead-form-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .lead-row2 {
            grid-template-columns: 1fr;
            gap: 12px;
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
    justifyContent: 'center',
    gap: 'clamp(14px, 1.8vh, 24px)'
  },
  badge: {
    background: 'rgba(220, 38, 38, 0.1)',
    borderColor: 'rgba(220, 38, 38, 0.4)',
    color: '#DC2626',
    marginBottom: '8px'
  },
  leftTitle: {
    fontSize: 'clamp(1.4rem, 2.2vw, 2.3rem)',
    fontWeight: 800,
    color: '#0F172A',
    marginBottom: '8px',
    lineHeight: 1.25
  },
  leftDesc: {
    fontSize: 'clamp(0.85rem, 0.95vw, 1.05rem)',
    color: 'var(--text-body)',
    lineHeight: 1.55,
    marginBottom: 'clamp(8px, 1.2vh, 14px)'
  },
  benefitList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(10px, 1.3vh, 16px)',
    margin: 'clamp(8px, 1vh, 14px) 0'
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '10px 14px',
    borderRadius: '12px',
    background: '#FFFFFF',
    border: '1px solid #E2E8F0',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.03)'
  },
  benefitIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'rgba(220, 38, 38, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '2px'
  },
  benefitTitle: {
    fontSize: 'clamp(0.84rem, 0.9vw, 0.94rem)',
    fontWeight: 700,
    color: '#0F172A',
    display: 'block',
    marginBottom: '2px'
  },
  benefitDesc: {
    fontSize: 'clamp(0.76rem, 0.82vw, 0.86rem)',
    color: '#64748B',
    lineHeight: 1.4,
    margin: 0
  },
  roleLabel: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: 'clamp(8px, 1vh, 12px) clamp(12px, 1.1vw, 16px)',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    userSelect: 'none'
  },
  formBox: {
    background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
    borderRadius: 'var(--radius-xl)',
    padding: 'clamp(20px, 2.5vh, 36px) clamp(20px, 2vw, 36px)',
    boxShadow: '0 20px 48px rgba(220, 38, 38, 0.28), 0 4px 14px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(10px, 1.3vh, 16px)',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  label: {
    fontSize: 'clamp(0.76rem, 0.84vw, 0.92rem)',
    fontWeight: 700,
    color: '#FFFFFF'
  },
  input: {
    padding: 'clamp(9px, 1.2vh, 14px) clamp(12px, 1vw, 16px)',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid rgba(255, 255, 255, 0.35)',
    background: 'rgba(255, 255, 255, 0.95)',
    color: '#0F172A',
    fontSize: 'clamp(0.82rem, 0.9vw, 0.96rem)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  },
  select: {
    padding: 'clamp(9px, 1.2vh, 14px) clamp(12px, 1vw, 16px)',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid rgba(255, 255, 255, 0.35)',
    background: 'rgba(255, 255, 255, 0.95)',
    color: '#0F172A',
    fontSize: 'clamp(0.82rem, 0.9vw, 0.96rem)',
    outline: 'none',
    width: '100%',
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  textarea: {
    padding: 'clamp(10px, 1.2vh, 14px) clamp(12px, 1vw, 16px)',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid rgba(255, 255, 255, 0.35)',
    background: 'rgba(255, 255, 255, 0.95)',
    color: '#0F172A',
    fontSize: 'clamp(0.82rem, 0.9vw, 0.96rem)',
    outline: 'none',
    width: '100%',
    resize: 'vertical',
    fontFamily: 'inherit',
    boxSizing: 'border-box'
  },
  submitBtn: {
    padding: 'clamp(11px, 1.4vh, 16px) 24px',
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
  },

  /* SUCCESS NOTIFICATION STYLES */
  successCard: {
    background: '#FFFFFF',
    borderRadius: 'var(--radius-xl)',
    padding: 'clamp(28px, 4vh, 44px) clamp(24px, 3vw, 40px)',
    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.05)',
    border: '2px solid #E2E8F0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '18px'
  },
  successIconOuter: {
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    background: '#DCFCE7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 0 8px #F0FDF4'
  },
  successIconInner: {
    width: '54px',
    height: '54px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 6px 16px rgba(16, 185, 129, 0.4)'
  },
  leadIdBadge: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '999px',
    background: '#F1F5F9',
    color: '#475569',
    fontSize: '0.78rem',
    fontWeight: 700,
    letterSpacing: '0.5px',
    marginBottom: '8px'
  },
  successTitle: {
    fontSize: 'clamp(1.25rem, 1.6vw, 1.65rem)',
    fontWeight: 800,
    color: '#0F172A',
    marginBottom: '8px'
  },
  successDesc: {
    fontSize: 'clamp(0.85rem, 0.95vw, 0.96rem)',
    color: '#475569',
    lineHeight: 1.55,
    maxWidth: '440px',
    margin: '0 auto'
  },
  confirmBox: {
    width: '100%',
    background: '#F8FAFC',
    borderRadius: '14px',
    padding: '14px 18px',
    border: '1px solid #E2E8F0',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  confirmRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.85rem',
    padding: '2px 0'
  },
  confirmLabel: {
    color: '#64748B',
    fontWeight: 500
  },
  confirmValue: {
    color: '#0F172A',
    fontWeight: 700
  },
  successActions: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '6px'
  },
  zaloActionBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '13px 20px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #0088FF 0%, #0066EE 100%)',
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: '0.92rem',
    textDecoration: 'none',
    boxShadow: '0 6px 20px rgba(0, 102, 238, 0.35)',
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  },
  resetBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    padding: '10px 16px',
    borderRadius: '10px',
    background: 'transparent',
    border: '1px solid #E2E8F0',
    color: '#64748B',
    fontWeight: 600,
    fontSize: '0.82rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  }
};