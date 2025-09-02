'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Play } from 'lucide-react';

const VideoPlaceholder = ({ title }: { title: string }) => (
  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 mb-8">
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

const BookSection: React.FC = () => {
  return (
    <section id="book" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Smashed: Sober (with a twist)
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <VideoPlaceholder title="Video: Smashed: Sober (with a twist)" />
          
          <h3 className="text-2xl md:text-3xl font-light text-text-primary mb-8">
            It's Not About Not Drinking, It's About Not Wanting To.
          </h3>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-primary/25 flex items-center space-x-3"
            >
              <Download className="w-5 h-5" />
              <span>Download our book for free</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookSection;