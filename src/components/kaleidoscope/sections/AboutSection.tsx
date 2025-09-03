'use client';

import React from 'react';
import { motion } from 'framer-motion';

const VideoPlaceholder = ({ title }: { title: string }) => (
  <div className="aspect-square bg-gray-100 rounded-xl border-2 border-gray-200 flex items-center justify-center">
    <div className="text-center">
      <div className="mb-4 text-6xl text-primary">▶️</div>
      <p className="text-text-secondary font-medium">{title}</p>
    </div>
  </div>
);

const AboutSection: React.FC = () => {

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              What is Kaleidoscope
            </h2>
            
            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                Kaleidoscope is a radical recovery solution for those ready to be free from drinking and the pain beneath it. We guide individuals through a three-part journey—preparation, immersive healing, and ForeverCare™ support—custom-designed for lasting transformation.
              </p>
              
              <div className="space-y-4 mt-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-text-primary"
                >
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0" />
                    <span>Alcoholism is not a disease — it seems like the only solution to pain and trauma.</span>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-text-primary"
                >
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0" />
                    <span>Relapse is not part of recovery — the system has failed you.</span>
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-text-primary"
                >
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-primary rounded-full mr-4 mt-2 flex-shrink-0" />
                    <span>Not 12 steps, 1 transformative truth: The answers are already inside you. If you're truly ready, let's go find them together.</span>
                  </div>
                </motion.div>
              </div>
              
              <p className="mt-6">
                Kaleidoscope delivers complete personal transformation for alcoholics and their loved ones. We don't just treat symptoms - we eliminate pain at the source and permanently support each soul's unique healing journey. It's not about not drinking; it's about not even wanting to.
              </p>
            </div>
          </motion.div>

          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <VideoPlaceholder title="What is Kaleidoscope Video" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;