import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  RotateCcw, 
  Send, 
  Sparkles, 
  CheckCheck, 
  ChevronRight,
  MessageSquare,
  Code
} from 'lucide-react';

const QUICK_SUGGESTIONS = [
  { id: 'pricing', label: '💰 Bảng đơn giá lập trình theo giờ', query: 'Bảng đơn giá thuê lập trình viên theo giờ tại DUDI như thế nào?' },
  { id: 'roles', label: '👨‍💻 Các vị trí nhân sự (Junior, Mid, Senior)', query: 'DUDI cung cấp những cấp bậc nhân sự IT nào và kỹ năng ra sao?' },
  { id: 'process', label: '⚡ Quy trình tiếp nhận & Báo giá Backlog', query: 'Quy trình phân tích backlog và triển khai sprint như thế nào?' },
  { id: 'output', label: '📦 Hạng mục cam kết bàn giao', query: 'Khi nghiệm thu dự án DUDI sẽ bàn giao những gì?' },
  { id: 'contact', label: '📞 Kết nối tư vấn kỹ thuật trực tiếp', query: 'Tôi muốn trao đổi trực tiếp với Technical Lead' }
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: `Xin chào! 👋\nTôi là Trợ lý AI Báo giá & Tư vấn Kỹ thuật DUDI.\nBạn đang cần tham khảo đơn giá lập trình viên hay cần ước tính chi phí cho backlog dự án?`,
    time: '10:30',
    type: 'text'
  }
];

export default function AIChatModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [messages, isTyping, isOpen]);

  // Click outside and Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      const isToggleBtn = event.target.closest('[data-chat-toggle="true"]');
      if (isToggleBtn) return;

      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Reset conversation
  const handleReset = () => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: `Xin chào! 👋\nTôi là Trợ lý AI Báo giá & Tư vấn Kỹ thuật DUDI.\nBạn đang cần tham khảo đơn giá lập trình viên hay cần ước tính chi phí cho backlog dự án?`,
        time: timeStr,
        type: 'text'
      }
    ]);
  };

  // Smart Response Engine for Developer Pricing & IT Outsourcing
  const generateBotResponse = (userText) => {
    const query = userText.toLowerCase().trim();

    if (query.includes('giá') || query.includes('chi phí') || query.includes('bao nhiêu') || query.includes('giờ') || query.includes('đơn giá') || query.includes('báo giá')) {
      return {
        text: `DUDI cung cấp đơn giá nhân sự IT minh bạch theo giờ (Man-hour):\n\n` +
          `• 👨‍💻 **Junior Developer**: **150.000 – 250.000đ / giờ** (Fix bug, bảo trì, module rõ ràng)\n` +
          `• 🚀 **Mid-Level Developer**: **250.000 – 500.000đ / giờ** (Xây dựng module mới, tích hợp API, tối ưu UI)\n` +
          `• 🏆 **Senior Developer**: **500.000 – 1.000.000đ / giờ** (Kiến trúc hệ thống, Core logic, High Load)\n` +
          `• 🎨 **UI/UX Designer**: **300.000 – 700.000đ / giờ** (Design System, Prototype, luồng trải nghiệm)\n` +
          `• 📋 **Project Manager**: **500.000 – 1.200.000đ / giờ** (Điều phối Sprint, kiểm soát tiến độ & QA)\n\n` +
          `💡 Bạn có thể bấm nút bên dưới để xem bảng tra cứu tương tác chi tiết!`,
        actionType: 'pricing'
      };
    }

    if (query.includes('nhân sự') || query.includes('vị trí') || query.includes('senior') || query.includes('junior') || query.includes('mid') || query.includes('thuê')) {
      return {
        text: `Đội ngũ nhân sự IT tại DUDI đáp ứng đa dạng công nghệ & mô hình triển khai:\n\n` +
          `1. **Frontend**: React, Next.js, Vue.js, Tailwind CSS, TypeScript.\n` +
          `2. **Backend & API**: Node.js, Python, Golang, PHP/Laravel, RESTful/GraphQL.\n` +
          `3. **Database & Cloud**: PostgreSQL, MySQL, MongoDB, Redis, AWS, Docker.\n` +
          `4. **Mô hình linh hoạt**: Thuê theo giờ (Time & Material), theo Sprint hoặc trọn gói tính năng (Fixed-scope).`,
        actionType: 'roles'
      };
    }

    if (query.includes('quy trình') || query.includes('bước') || query.includes('backlog') || query.includes('sprint') || query.includes('triển khai')) {
      return {
        text: `Quy trình 4 bước chuẩn Agile tại DUDI giúp tối ưu ngân sách và đảm bảo tiến độ:\n\n` +
          `1. **Tiếp nhận & Phân rã Backlog**: Đánh giá độ phức tạp kỹ thuật và ước lượng số giờ thực tế.\n` +
          `2. **Chốt Báo giá & Đội hình**: Khách hàng chọn cấp bậc dev phù hợp ngân sách.\n` +
          `3. **Triển khai Sprint & Daily Demo**: Bàn giao tính năng liên tục theo từng tuần.\n` +
          `4. **Nghiệm thu & Bàn giao Mã nguồn**: Kiểm thử kỹ thuật, bàn giao 100% Git repo và tài liệu.`,
        actionType: 'process'
      };
    }

    if (query.includes('bàn giao') || query.includes('hạng mục') || query.includes('source code') || query.includes('kết quả') || query.includes('output')) {
      return {
        text: `DUDI cam kết bàn giao minh bạch và hoàn chỉnh:\n\n` +
          `✅ 100% **Mã nguồn (Source Code)** sạch, có chú thích và tài liệu kỹ thuật\n` +
          `✅ Báo cáo Timesheet chi tiết số giờ thực tế theo từng User Story\n` +
          `✅ Tài liệu cấu hình triển khai (CI/CD, Docker, Environment)\n` +
          `✅ Bảo hành kỹ thuật và hỗ trợ chuyển giao suôn sẻ cho team của bạn`,
        actionType: 'output'
      };
    }

    if (query.includes('liên hệ') || query.includes('tư vấn') || query.includes('số điện thoại') || query.includes('gặp') || query.includes('hotline') || query.includes('zalo')) {
      return {
        text: `Đội ngũ Technical Lead của DUDI luôn sẵn sàng thẩm định backlog cho bạn:\n\n` +
          `📞 Hotline: **0909 163 821**\n` +
          `💬 Zalo Kỹ thuật: Nhấn nút bên dưới để gửi tài liệu yêu cầu\n` +
          `📝 Điền form ước tính giờ để nhận bảng phân rã ngân sách chi tiết trong 2 giờ!`,
        actionType: 'contact'
      };
    }

    // Default intelligent answer
    return {
      text: `Cảm ơn bạn đã quan tâm! DUDI Software cung cấp dịch vụ lập trình và cung ứng nhân sự IT may đo theo giờ.\n\n` +
        `Bạn muốn tìm hiểu thêm về **Bảng đơn giá theo giờ**, **Hạng mục bàn giao** hay cần **Ước tính ngân sách backlog**?`,
      actionType: 'general'
    };
  };

  // Send message
  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newUserMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: timeStr,
      type: 'text'
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateBotResponse(text);
      const botTime = new Date();
      const botTimeStr = `${String(botTime.getHours()).padStart(2, '0')}:${String(botTime.getMinutes()).padStart(2, '0')}`;

      const newBotMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReply.text,
        time: botTimeStr,
        actionType: botReply.actionType
      };

      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      style={styles.modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-label="Cửa sổ trò chuyện với Trợ lý Báo giá DUDI"
    >
      {/* Backdrop for mobile */}
      <div 
        style={styles.mobileBackdrop}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Chatbox Window */}
      <div 
        ref={modalRef}
        style={styles.chatWindow}
      >
        
        {/* 1. Header */}
        <div style={styles.header}>
          <div style={styles.headerInfo}>
            {/* Robot Mascot Avatar */}
            <div style={styles.avatarWrapper}>
              <img 
                src="/robot-mascot.webp" 
                alt="Trợ lý Báo giá DUDI" 
                style={styles.avatarImg}
              />
              <span style={styles.onlineDot} />
            </div>

            <div>
              <h3 style={styles.title}>
                <span>Trợ lý Báo giá DUDI</span>
                <Sparkles style={{ width: 14, height: 14, color: '#F59E0B' }} />
              </h3>
              <p style={styles.subtitle}>
                <span style={styles.pulseDot} />
                <span>Báo giá theo giờ & Dự án</span>
              </p>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <button
              onClick={handleReset}
              title="Làm mới cuộc trò chuyện"
              style={styles.iconBtn}
            >
              <RotateCcw style={{ width: 16, height: 16 }} />
            </button>
            <button
              onClick={onClose}
              title="Đóng cửa sổ chat"
              style={styles.iconBtn}
            >
              <X style={{ width: 18, height: 18 }} />
            </button>
          </div>
        </div>

        {/* 2. Messages List */}
        <div style={styles.messageList}>
          {messages.map((msg) => {
            const isBot = msg.sender === 'bot';

            return (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: isBot ? 'flex-start' : 'flex-end',
                  marginBottom: 12
                }}
              >
                <div style={{ display: 'flex', gap: 8, maxWidth: '88%', flexDirection: isBot ? 'row' : 'row-reverse' }}>
                  {isBot && (
                    <div style={styles.botIconWrapper}>
                      <img 
                        src="/robot-mascot.webp" 
                        alt="Bot" 
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  )}

                  <div>
                    {/* Message Bubble */}
                    <div
                      style={{
                        padding: '11px 15px',
                        fontSize: '13.5px',
                        lineHeight: '1.6',
                        borderRadius: '16px',
                        borderTopLeftRadius: isBot ? '4px' : '16px',
                        borderTopRightRadius: isBot ? '16px' : '4px',
                        background: isBot ? '#FFFFFF' : 'linear-gradient(135deg, #E52E2E 0%, #D91B1B 100%)',
                        color: isBot ? '#0F172A' : '#FFFFFF',
                        border: isBot ? '1px solid #E2E8F0' : 'none',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                      }}
                    >
                      <p style={{ margin: 0, whiteSpace: 'pre-line', color: isBot ? '#0F172A' : '#FFFFFF', fontWeight: isBot ? 400 : 500 }}>
                        {msg.text.split('\n').map((line, i) => {
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          return (
                            <React.Fragment key={i}>
                              {parts.map((part, pIdx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={pIdx} style={{ fontWeight: 700, color: isBot ? '#0F172A' : '#FFFFFF' }}>{part.slice(2, -2)}</strong>;
                                }
                                return <span key={pIdx} style={{ color: isBot ? '#0F172A' : '#FFFFFF' }}>{part}</span>;
                              })}
                              {i < msg.text.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          );
                        })}
                      </p>

                      {/* Bot Quick Actions / Shortcuts */}
                      {isBot && msg.actionType && (
                        <div style={styles.actionButtonsRow}>
                          {msg.actionType === 'pricing' && (
                            <button
                              onClick={() => scrollToSection('s06-pricing')}
                              style={styles.actionBtnRed}
                            >
                              <span>Tra cứu Đơn giá chi tiết</span>
                              <ChevronRight style={{ width: 14, height: 14 }} />
                            </button>
                          )}
                          {msg.actionType === 'process' && (
                            <button
                              onClick={() => scrollToSection('s07-process')}
                              style={styles.actionBtnRed}
                            >
                              <span>Xem Quy trình 4 bước</span>
                              <ChevronRight style={{ width: 14, height: 14 }} />
                            </button>
                          )}
                          {msg.actionType === 'output' && (
                            <button
                              onClick={() => scrollToSection('s05-output')}
                              style={styles.actionBtnRed}
                            >
                              <span>Hạng mục bàn giao</span>
                              <ChevronRight style={{ width: 14, height: 14 }} />
                            </button>
                          )}
                          {msg.actionType === 'contact' && (
                            <>
                              <a
                                href="https://zalo.me/0909163821"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.actionBtnZalo}
                              >
                                <MessageSquare style={{ width: 14, height: 14 }} />
                                <span>Nhắn Zalo</span>
                              </a>
                              <button
                                onClick={() => scrollToSection('s11-form')}
                                style={styles.actionBtnGrey}
                              >
                                <span>Gửi yêu cầu Backlog</span>
                              </button>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Timestamp */}
                    <div style={{
                      fontSize: '11px',
                      color: '#94A3B8',
                      marginTop: 4,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      justifyContent: isBot ? 'flex-start' : 'flex-end'
                    }}>
                      <span>{msg.time}</span>
                      {!isBot && <CheckCheck style={{ width: 14, height: 14, color: '#E52E2E' }} />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isTyping && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <div style={styles.botIconWrapper}>
                <img 
                  src="/robot-mascot.webp" 
                  alt="Bot" 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div style={{
                padding: '10px 14px',
                background: '#FFFFFF',
                borderRadius: '16px',
                borderTopLeftRadius: '4px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                gap: 5
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E52E2E', animation: 'bounce 1s infinite' }} />
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E52E2E', animation: 'bounce 1s infinite 0.2s' }} />
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#E52E2E', animation: 'bounce 1s infinite 0.4s' }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* 3. Quick Suggestions Chips (Pure white background + Hidden scrollbar) */}
        <div style={styles.suggestionsContainer}>
          <div className="no-scrollbar" style={styles.suggestionsTrack}>
            {QUICK_SUGGESTIONS.map((chip) => (
              <button
                key={chip.id}
                onClick={() => handleSendMessage(chip.query)}
                style={styles.suggestionChip}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4. Footer Input Container */}
        <div style={styles.footer}>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            style={styles.inputForm}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập yêu cầu hoặc câu hỏi..."
              style={styles.inputField}
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              aria-label="Gửi tin nhắn"
              style={{
                ...styles.sendBtn,
                background: inputValue.trim() ? 'linear-gradient(135deg, #E52E2E 0%, #D91B1B 100%)' : '#E2E8F0',
                color: inputValue.trim() ? '#FFFFFF' : '#94A3B8',
                cursor: inputValue.trim() ? 'pointer' : 'not-allowed'
              }}
            >
              <Send style={{ width: 15, height: 15 }} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

const styles = {
  modalOverlay: {
    position: 'fixed',
    bottom: 'clamp(18px, 2.5vh, 32px)',
    right: 'clamp(80px, 8vw, 100px)',
    zIndex: 10000,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    animation: 'pageFadeIn 0.2s ease'
  },
  mobileBackdrop: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.4)',
    backdropFilter: 'blur(4px)',
    zIndex: -1,
    display: window.innerWidth > 768 ? 'none' : 'block'
  },
  chatWindow: {
    width: 'min(410px, 92vw)',
    height: '520px',
    maxHeight: 'calc(100dvh - 4.5rem)',
    background: '#FFFFFF',
    borderRadius: '24px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
    border: '1px solid #E2E8F0',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    color: '#0F172A',
    fontFamily: 'var(--font-sans, system-ui, sans-serif)'
  },
  header: {
    padding: '12px 18px',
    background: '#FFFFFF',
    borderBottom: '1px solid #F1F5F9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10
  },
  headerInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  avatarWrapper: {
    position: 'relative',
    width: '42px',
    height: '42px',
    borderRadius: '14px',
    background: '#FFF1F2',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #FFE4E6'
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  onlineDot: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 11,
    height: 11,
    background: '#10B981',
    border: '2px solid #FFFFFF',
    borderRadius: '50%'
  },
  title: {
    fontSize: '15.5px',
    fontWeight: 700,
    color: '#0F172A',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: 6
  },
  subtitle: {
    fontSize: '12px',
    color: '#64748B',
    margin: 0,
    marginTop: 2,
    display: 'flex',
    alignItems: 'center',
    gap: 6
  },
  pulseDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: '#10B981'
  },
  iconBtn: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    background: 'transparent',
    border: 'none',
    color: '#94A3B8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  messageList: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px 18px',
    background: '#F8FAFC'
  },
  botIconWrapper: {
    width: 28,
    height: 28,
    borderRadius: '10px',
    background: '#FFF1F2',
    padding: 2,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #FFE4E6',
    marginTop: 4
  },
  actionButtonsRow: {
    marginTop: 10,
    paddingTop: 8,
    borderTop: '1px solid #F1F5F9',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6
  },
  actionBtnRed: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '6px 10px',
    borderRadius: '8px',
    background: '#FFF1F2',
    color: '#E52E2E',
    fontSize: '12px',
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer'
  },
  actionBtnZalo: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '6px 10px',
    borderRadius: '8px',
    background: '#0068FF',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: 700,
    textDecoration: 'none'
  },
  actionBtnGrey: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '6px 10px',
    borderRadius: '8px',
    background: '#F1F5F9',
    color: '#334155',
    fontSize: '12px',
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer'
  },
  suggestionsContainer: {
    padding: '8px 14px',
    background: '#FFFFFF',
    borderTop: '1px solid #F1F5F9'
  },
  suggestionsTrack: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    paddingBottom: 2,
    scrollbarWidth: 'none',
    msOverflowStyle: 'none'
  },
  suggestionChip: {
    fontSize: '12px',
    fontWeight: 600,
    padding: '6px 12px',
    borderRadius: '999px',
    background: '#FFFFFF',
    color: '#334155',
    border: '1px solid #E2E8F0',
    flexShrink: 0,
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
  },
  footer: {
    padding: '12px 16px',
    background: '#FFFFFF',
    borderTop: '1px solid #F1F5F9'
  },
  inputForm: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: '#F1F5F9',
    borderRadius: '999px',
    border: '1px solid #E2E8F0',
    padding: '4px 6px 4px 14px'
  },
  inputField: {
    flex: 1,
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: '13.5px',
    color: '#0F172A'
  },
  sendBtn: {
    width: 34,
    height: 34,
    borderRadius: '50%',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s'
  }
};