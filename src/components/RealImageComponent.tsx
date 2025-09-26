'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface RealImageComponentProps {
  spreadId: string
  alt: string
  className?: string
  position?: { top: string; left: string; rotate: string }
}

export default function RealImageComponent({ spreadId, alt, className = '', position }: RealImageComponentProps) {
  const [imageError, setImageError] = useState(false)
  const [imagePath, setImagePath] = useState<string | null>(null)
  // Convert spread ID to image filename format
  const getImagePath = () => {
    // Handle BunnyCover case
    if (spreadId === 'BunnyCover') {
      return '/Images/BunnyCover.png'
    }
    // Since spreadIds now match filenames exactly, use them directly
    return `/Images/${spreadId}.png`
  }

  // Check if this is for full-page cover layout
  const isFullPage = className.includes('max-w-none max-h-none')

  const handleImageError = () => {
    console.error(`Failed to load image: ${getImagePath()}`)
    setImageError(true)
  }

  const currentImagePath = imagePath || getImagePath()

  if (imageError) {
    return (
      <motion.div
        className={`relative ${className} flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300`}
        style={isFullPage ? {
          width: '100%',
          height: '100%'
        } : {
          width: '60vh',
          height: '60vh',
          maxWidth: '600px',
          maxHeight: '600px',
          minWidth: '300px',
          minHeight: '300px'
        }}
      >
        <div className="text-center p-4">
          <p className="text-gray-500 text-sm">Image not found</p>
          <p className="text-gray-400 text-xs mt-1">{spreadId}</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={isFullPage ? {
        width: '100%',
        height: '100%'
      } : {
        width: '60vh', // 60% of viewport height as requested
        height: '60vh',
        maxWidth: '600px',
        maxHeight: '600px',
        minWidth: '300px',
        minHeight: '300px'
      }}
      whileHover={{
        scale: 1.02,
        zIndex: 20
      }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
    >
      <Image
        src={currentImagePath}
        alt={alt}
        fill
        className="object-contain"
        style={{
          filter: 'none',
        }}
        sizes="(max-width: 768px) 300px, 400px"
        priority={true}
        onError={handleImageError}
      />
    </motion.div>
  )
}