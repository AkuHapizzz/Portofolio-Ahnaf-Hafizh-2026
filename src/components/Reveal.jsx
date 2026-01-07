import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }} 

      whileInView={{ opacity: 1, y: 0 }} 

      viewport={{ once: true, margin: "-100px" }}

      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;