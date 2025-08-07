"use client";

import { Play, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

interface VideoPlaceholderProps {
  title: string;
  duration?: string;
  className?: string;
  showControls?: boolean;
}

export function VideoPlaceholder({ 
  title, 
  duration = "2:45", 
  className = "",
  showControls = true 
}: VideoPlaceholderProps) {
  return (
    <motion.div 
      className={`relative aspect-video bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-lg overflow-hidden cursor-pointer group ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {/* Placeholder background pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      </div>
      
      {/* Video title overlay */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4">
        <h3 className="text-white font-semibold text-base sm:text-lg leading-tight drop-shadow-lg">
          {title}
        </h3>
      </div>
      
      {/* Play button */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 sm:p-6 group-hover:bg-white/30 transition-colors min-h-[60px] min-w-[60px] sm:min-h-[80px] sm:min-w-[80px] flex items-center justify-center">
          <Play className="w-8 h-8 sm:w-12 sm:h-12 text-white ml-0.5 sm:ml-1" fill="currentColor" />
        </div>
      </motion.div>
      
      {/* Controls overlay */}
      {showControls && (
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white/80">
            <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">{duration}</span>
          </div>
          <div className="text-white/60 text-xs">
            Video Placeholder
          </div>
        </div>
      )}
    </motion.div>
  );
}