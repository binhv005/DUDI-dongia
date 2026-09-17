import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function SectionWrapper({ id, children, className = "", style = {}, noAnimation = false }) {
  const prefersReducedMotion = useReducedMotion();

  const sectionVariants = {
    hidden: {
      opacity: prefersReducedMotion || noAnimation ? 1 : 0,
      y: prefersReducedMotion || noAnimation ? 0 : 24,
      filter: prefersReducedMotion || noAnimation ? 'none' : 'blur(4px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id={id} className={`section-wrapper ${className}`} style={style}>
      <motion.div
        className="section-container"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
