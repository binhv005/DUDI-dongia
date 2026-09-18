import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';
import { faqList } from '../data/faq';

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState("faq-1");

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <SectionWrapper id="s10-faq" className="faq-section">
      <div className="section-meta">
        <div className="section-tag">Giải Đáp Thắc Mắc</div>
        <h2>Câu Hỏi Thường Gặp (FAQ)</h2>
      </div>

      <div style={styles.container}>
        {faqList.map((faq) => {
          const isOpen = openFaq === faq.id;
          return (
            <div
              key={faq.id}
              className={`faq-accordion-card ${isOpen ? 'is-active' : ''}`}
              style={{
                ...styles.item,
                borderColor: isOpen ? '#E52E2E' : '#E2E8F0',
                background: isOpen ? '#FFFBFB' : '#FFFFFF',
                boxShadow: isOpen ? '0 4px 16px rgba(229, 46, 46, 0.08)' : '0 1px 3px rgba(0, 0, 0, 0.03)'
              }}
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                style={styles.questionBtn}
              >
                <span>{faq.question}</span>
                <span
                  style={{
                    color: isOpen ? '#E52E2E' : '#94A3B8',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease, color 0.25s ease'
                  }}
                >
                  ▼
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={styles.answerText}>
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .faq-accordion-card {
          border: 1px solid #E2E8F0;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .faq-accordion-card:hover {
          border-color: #CBD5E1;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.04) !important;
        }
        .faq-accordion-card.is-active {
          border-color: #E52E2E !important;
        }
      `}} />
    </SectionWrapper>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'clamp(10px, 1.2vh, 14px)',
    maxWidth: 'clamp(860px, 68vw, 1100px)',
    margin: '0 auto',
    width: '100%'
  },
  item: {
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden'
  },
  questionBtn: {
    width: '100%',
    padding: 'clamp(13px, 1.5vh, 18px) clamp(18px, 1.6vw, 24px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    color: '#0F172A',
    fontWeight: 700,
    fontSize: 'clamp(0.88rem, 1vw, 1.05rem)',
    cursor: 'pointer',
    textAlign: 'left'
  },
  answerText: {
    padding: '0 clamp(18px, 1.6vw, 24px) clamp(14px, 1.5vh, 18px) clamp(18px, 1.6vw, 24px)',
    color: '#475569',
    fontSize: 'clamp(0.82rem, 0.92vw, 0.96rem)',
    lineHeight: 1.6
  }
};
