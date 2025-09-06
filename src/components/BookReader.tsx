'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react'
import { pages } from '@/utils/bookData'
import { SoundManager } from '@/utils/soundManager'
import PageComponent from '@/components/PageComponent'
import OrientationPrompt from '@/components/OrientationPrompt'

export default function BookReader() {
  const [currentPage, setCurrentPage] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [soundManager, setSoundManager] = useState<SoundManager | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const sm = new SoundManager()
    setSoundManager(sm)
  }, [])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextPage()
      } else if (event.key === 'ArrowLeft') {
        prevPage()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentPage])

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      if (soundManager && soundEnabled) {
        soundManager.playPageTurn()
      }
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      if (soundManager && soundEnabled) {
        soundManager.playPageTurn()
      }
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < pages.length) {
      if (soundManager && soundEnabled) {
        soundManager.playPageTurn()
      }
      setCurrentPage(pageIndex)
    }
  }

  const playPageSound = () => {
    if (soundManager && soundEnabled) {
      const currentPageData = pages[currentPage]
      if (currentPageData.sound) {
        soundManager.playContextSound(currentPageData.sound)
      }
    }
  }

  if (!isClient) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <>
      <OrientationPrompt />
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-sky-100 via-green-50 to-yellow-50">

      {/* Book container */}
      <div className="relative w-full max-w-6xl aspect-[16/10] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative w-full h-full" style={{ perspective: '2000px' }}>
          <AnimatePresence mode="wait" custom={currentPage}>
            <motion.div
              key={currentPage}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="absolute inset-0 backface-hidden"
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
            >
              <motion.div
                className="w-full h-full bg-white shadow-2xl"
                style={{
                  borderRadius: '4px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  boxShadow: `
                    0 10px 40px rgba(0,0,0,0.2),
                    0 2px 8px rgba(0,0,0,0.1),
                    inset 0 1px 0 rgba(255,255,255,0.8)
                  `
                }}
              >
                <PageComponent 
                  page={pages[currentPage]} 
                  pageIndex={currentPage}
                  onInteract={playPageSound}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg transition-all duration-200 z-10 ${
            currentPage === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white hover:bg-blue-50 text-blue-600 hover:scale-110 active:scale-95'
          }`}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg transition-all duration-200 z-10 ${
            currentPage === pages.length - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-white hover:bg-blue-50 text-blue-600 hover:scale-110 active:scale-95'
          }`}
          aria-label="Next page"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Page indicator dots */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 px-4 max-w-4xl">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-12 h-12 rounded-full transition-all duration-200 touch-manipulation ${
              index === currentPage
                ? 'bg-green-500 scale-125 shadow-md'
                : 'bg-green-200 hover:bg-green-300 hover:scale-110'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Page counter */}
      <div className="mt-4 text-center">
        <span className="text-lg font-medium text-green-700">
          Page {currentPage + 1} of {pages.length}
        </span>
      </div>

      {/* Sound controls */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-3 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg"
          aria-label={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
        >
          {soundEnabled ? (
            <Volume2 className="w-7 h-7 text-green-600" />
          ) : (
            <VolumeX className="w-7 h-7 text-gray-400" />
          )}
        </button>
        
        {/* Sound trigger button */}
        <button
          onClick={playPageSound}
          className="px-6 py-3 rounded-full bg-yellow-300 hover:bg-yellow-400 transition-colors shadow-lg text-base font-baloo font-semibold text-brown-800"
        >
          🔊 Page Sound
        </button>
      </div>

      {/* Mobile-friendly navigation */}
      <div className="md:hidden flex justify-center gap-4 mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            currentPage === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95'
          }`}
        >
          ← Previous
        </button>
        
        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            currentPage === pages.length - 1
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95'
          }`}
        >
          Next →
        </button>
      </div>
    </div>
    </>
  )
}