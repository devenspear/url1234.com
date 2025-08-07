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
      transition={{ duration: 0.2 }}
    >
      {/* Placeholder background pattern */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
      </div>
      
      {/* Video title overlay */}
      <div className="absolute top-4 left-4 right-4">
        <h3 className="text-white font-semibold text-lg leading-tight drop-shadow-lg">
          {title}
        </h3>
      </div>
      
      {/* Play button */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-colors">
          <Play className="w-12 h-12 text-white ml-1" fill="currentColor" />
        </div>
      </motion.div>
      
      {/* Controls overlay */}
      {showControls && (
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white/80">
            <Volume2 className="w-4 h-4" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="text-white/60 text-xs">
            Video Placeholder
          </div>
        </div>
      )}
    </motion.div>
  );
}