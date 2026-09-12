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
              style={{
                ...styles.item,
                borderColor: isOpen ? 'var(--border-red-bright)' : 'var(--border-glass)',
                background: isOpen ? '#FFF8F8' : '#FFFFFF',
                boxShadow: 'var(--shadow-sm)'
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
                    color: 'var(--dudi-red-bright)',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
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
    </SectionWrapper>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '7px',
    maxWidth: '860px',
    margin: '0 auto',
    width: '100%'
  },
  item: {
    border: '1px solid',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    transition: 'all 0.2s ease'
  },
  questionBtn: {
    width: '100%',
    padding: '10px 14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    color: 'var(--text-pure)',
    fontWeight: 600,
    fontSize: '0.86rem',
    cursor: 'pointer',
    textAlign: 'left'
  },
  answerText: {
    padding: '0 14px 10px 14px',
    color: 'var(--text-body)',
    fontSize: '0.8rem',
    lineHeight: 1.5
  }
};
