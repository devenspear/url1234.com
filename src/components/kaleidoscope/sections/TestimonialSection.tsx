'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoPlaceholder = ({ title }: { title: string }) => (
  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent flex items-center justify-center">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
        aria-label="Play video"
      >
        <Play className="w-8 h-8 ml-1" fill="currentColor" />
      </motion.button>
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
      <div className="text-white text-lg font-medium">{title}</div>
    </div>
  </div>
);

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonial" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Testimonial
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <VideoPlaceholder title="Video: Bill Testimonial" />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;