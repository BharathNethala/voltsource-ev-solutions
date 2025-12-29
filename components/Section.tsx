import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = "", 
  id,
  delay = 0,
  containerClassName = ""
}) => {
  return (
    <section id={id} className={`py-20 md:py-32 ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.8, 
          delay: delay, 
          ease: [0.22, 1, 0.36, 1] // Custom luxury ease curve
        }}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;