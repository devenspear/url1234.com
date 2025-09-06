'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface RealImageComponentProps {
  spreadId: string
  alt: string
  className?: string
  position?: { top: string; left: string; rotate: string }
}

export default function RealImageComponent({ spreadId, alt, className = '', position }: RealImageComponentProps) {
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
        src={getImagePath()}
        alt={alt}
        fill
        className="object-contain"
        style={{
          filter: 'none',
        }}
        sizes="(max-width: 768px) 300px, 400px"
        priority={true}
      />
    </motion.div>
  )
}