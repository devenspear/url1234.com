'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw } from 'lucide-react'

export default function OrientationPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const checkOrientation = () => {
      // Only show on mobile devices (width < 768px) in portrait mode
      const isMobile = window.innerWidth < 768
      const isPortrait = window.innerHeight > window.innerWidth
      const shouldShow = isMobile && isPortrait && !dismissed
      
      setShowPrompt(shouldShow)
    }

    checkOrientation()
    window.addEventListener('resize', checkOrientation)
    window.addEventListener('orientationchange', checkOrientation)

    return () => {
      window.removeEventListener('resize', checkOrientation)
      window.removeEventListener('orientationchange', checkOrientation)
    }
  }, [dismissed])

  const handleDismiss = () => {
    setDismissed(true)
    setShowPrompt(false)
  }

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-sm text-center shadow-2xl"
          >
            <motion.div
              animate={{ rotate: [0, -90, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mb-6"
            >
              <RotateCcw className="w-16 h-16 mx-auto text-blue-500" />
            </motion.div>
            
            <h3 className="text-xl font-bubblegum font-bold text-gray-800 mb-4">
              📚 Better Reading Experience!
            </h3>
            
            <p className="text-gray-600 mb-6 font-baloo leading-relaxed">
              For the best experience reading Bunny&apos;s story, please rotate your device to <strong>landscape mode</strong> (sideways) 📱➡️📱
            </p>
            
            <div className="space-y-3">
              <button
                onClick={handleDismiss}
                className="w-full px-6 py-3 bg-green-500 text-white rounded-full font-baloo font-semibold hover:bg-green-600 transition-colors"
              >
                Got it! 👍
              </button>
              <button
                onClick={handleDismiss}
                className="w-full px-6 py-3 bg-gray-100 text-gray-600 rounded-full font-baloo hover:bg-gray-200 transition-colors text-sm"
              >
                Continue in Portrait
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}