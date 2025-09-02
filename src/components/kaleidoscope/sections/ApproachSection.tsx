'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Alcoholism Is a Response to Pain: We Heal That Pain
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-lg text-text-secondary leading-relaxed mb-8">
            <p>
              Kaleidoscope was born from personal truth. After decades of personal and professional experiences with failed treatments and hollow promises, our founder realized what others won't say: alcoholism isn't a disease. It's a response to pain. And the pain can be extinguished. We only work with people who are truly ready - those willing to do whatever it takes to stop drinking and start living. When they are, we never let go.
            </p>
          </div>
          
          <div className="mt-12 text-sm text-text-secondary space-y-2 text-right italic">
            <p>1. Understanding Alcohol's Adverse Impact on Health (NIH, 2025)</p>
            <p>2. AA critiques (Dodes, 2006)</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;