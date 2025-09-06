'use client'

import { motion } from 'framer-motion'
import { BookPage } from '@/utils/bookData'
import RealImageComponent from '@/components/RealImageComponent'

interface PageComponentProps {
  page: BookPage
  pageIndex: number
  onInteract: () => void
}

export default function PageComponent({ page, pageIndex, onInteract }: PageComponentProps) {
  // Special layout for cover page (page 0) - full image only
  if (pageIndex === 0) {
    return (
      <motion.div
        className={`relative w-full h-full ${page.backgroundColor} overflow-hidden`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <RealImageComponent 
            spreadId={page.spreadId}
            alt={`Cover for ${page.title}`}
            className="w-full h-full max-w-none max-h-none"
          />
        </div>
      </motion.div>
    )
  }

  const renderContent = () => {
    const textContent = (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className={`${page.textColor} font-baloo font-bold leading-relaxed px-4 md:px-8 xl:px-20 py-4 md:py-6`}
      >
        {page.title && (
          <h2 className="font-bubblegum text-lg sm:text-xl md:text-2xl lg:text-5xl xl:text-5xl 2xl:text-6xl mb-3 leading-tight max-w-full text-center lg:text-left">
            {page.title}
          </h2>
        )}
        <div className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-3xl whitespace-pre-line leading-relaxed max-w-full text-center lg:text-left">
          {page.text}
        </div>
        
        {page.interactive && (
          <motion.button
            onClick={onInteract}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 rounded-full shadow-xl font-bubblegum text-xl text-white transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✨ Click for Magic! ✨
          </motion.button>
        )}
      </motion.div>
    )

    const imageContent = (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex items-center justify-center p-4"
      >
        <RealImageComponent 
          spreadId={page.spreadId}
          alt={`Watercolor illustration for ${page.title}`}
        />
      </motion.div>
    )

    // Layout based on image position
    if (page.imagePosition === 'center') {
      return (
        <div className="flex flex-col h-full">
          <div className="flex-1 flex items-center justify-center max-h-[60%]">
            {imageContent}
          </div>
          <div className="flex-shrink-0 text-center px-8 py-4 max-h-[40%] overflow-hidden">
            {textContent}
          </div>
        </div>
      )
    }

    // Left/Right layouts - responsive handling
    return (
      <div className="h-full">
        {/* Mobile Portrait: Stack vertically */}
        <div className="block md:hidden h-full">
          <div className="flex flex-col h-full">
            <div className="flex-1 flex items-center justify-center min-h-[45%] max-h-[55%]">
              {imageContent}
            </div>
            <div className="flex-shrink-0 px-4 py-3 max-h-[45%] overflow-y-auto">
              {textContent}
            </div>
          </div>
        </div>
        
        {/* Tablet Portrait: Better vertical stacking */}
        <div className="hidden md:block lg:hidden h-full">
          <div className="flex flex-col h-full p-4">
            <div className="flex-1 flex items-center justify-center max-h-[50%]">
              {imageContent}
            </div>
            <div className="flex-1 flex items-center justify-center px-6 py-4 max-h-[50%] overflow-y-auto">
              {textContent}
            </div>
          </div>
        </div>
        
        {/* Tablet Landscape & Desktop: Side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 h-full gap-6">
          {page.imagePosition === 'left' ? (
            <>
              <div className="flex items-center justify-center">
                {imageContent}
              </div>
              <div className="flex items-center justify-center">
                {textContent}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center">
                {textContent}
              </div>
              <div className="flex items-center justify-center">
                {imageContent}
              </div>
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className={`relative w-full h-full ${page.backgroundColor} overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Book spread layout with center crease */}
      <div className="relative w-full h-full flex">
        {/* Left page */}
        <div className="flex-1 relative">
          {/* Left page content area */}
        </div>
        
        {/* Center crease/seam */}
        <div className="w-px bg-gradient-to-b from-transparent via-gray-200/20 to-transparent relative z-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/10 to-transparent"></div>
        </div>
        
        {/* Right page */}
        <div className="flex-1 relative">
          {/* Right page content area */}
        </div>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 p-8">
        {renderContent()}
      </div>

      {/* Magical effects for interactive pages */}
      {page.sound === 'sparkle' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                rotate: [0, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
      
      {page.sound === 'bees' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              style={{
                left: `${15 + (i * 18)}%`,
                top: `${15 + (i * 12)}%`,
              }}
              animate={{
                x: [0, 60, -40, 0],
                y: [0, -25, 35, 0],
              }}
              transition={{
                duration: 4 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🐝
            </motion.div>
          ))}
        </div>
      )}

      {/* Wind animation */}
      {page.sound === 'wind' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, 200],
                opacity: [0, 1, 0],
                rotate: [0, 360, 720],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 3,
              }}
            >
              🍃
            </motion.div>
          ))}
        </div>
      )}

      {/* Sun animation */}
      {page.sound === 'sun' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          <motion.div
            className="absolute top-4 right-4 text-6xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ☀️
          </motion.div>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-60"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Rain animation */}
      {page.sound === 'rain' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-blue-400 text-lg opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10%`,
              }}
              animate={{
                y: [0, typeof window !== 'undefined' ? window.innerHeight + 100 : 800],
                x: [0, -20],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            >
              💧
            </motion.div>
          ))}
        </div>
      )}

      {/* Soil animation */}
      {page.sound === 'soil' && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-lg"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${60 + Math.random() * 30}%`,
              }}
              animate={{
                y: [0, -10, 0],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            >
              🌱
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
}