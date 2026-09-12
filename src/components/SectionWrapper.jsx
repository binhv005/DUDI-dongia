import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function SectionWrapper({ id, children, className = "", style = {}, noAnimation = false }) {
  const prefersReducedMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: prefersReducedMotion || noAnimation ? 1 : 0, y: prefersReducedMotion || noAnimation ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id={id} className={`section-wrapper ${className}`} style={style}>
      <motion.div
        className="section-container"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
