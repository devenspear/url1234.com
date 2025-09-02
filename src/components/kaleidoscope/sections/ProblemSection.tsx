'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ProblemSection: React.FC = () => {

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Traditional Alcohol Rehab Fails Nearly Everyone
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-text-primary max-w-3xl mx-auto leading-relaxed">
            The statistics are staggering:
          </h3>
        </motion.div>

        {/* Statistics List */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span className="text-text-primary text-xl leading-relaxed font-medium">30M+ Americans, and over 150M people who support them, struggle with drinking problems.</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span className="text-text-primary text-xl leading-relaxed font-medium">Alcoholism costs the US over 178,000 lives and $249B¹ per year according to NIH.</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <span className="text-text-primary text-xl leading-relaxed font-medium">The alcohol treatment industry has a 90%² failure rat, relying almost entirely on AA, who do not publish any credible data.</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30"
        >
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            The industry treats people who are not ready , fails to facilitate actual healing, and then releases them into their old environment. It doesn't have to be this way.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;