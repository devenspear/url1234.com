'use client'

import { motion } from 'framer-motion'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  primaryCTA?: {
    text: string
    onClick?: () => void
    href?: string
  }
  secondaryCTA?: {
    text: string
    onClick?: () => void
    href?: string
  }
  backgroundImage?: string
  backgroundVideo?: string
  overlay?: boolean
  height?: 'full' | 'large' | 'medium'
  alignment?: 'left' | 'center' | 'right'
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  backgroundVideo,
  overlay = true,
  height = 'full',
  alignment = 'center'
}: HeroSectionProps) {
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[80vh]',
    medium: 'min-h-[60vh]'
  }

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      
      {backgroundImage && !backgroundVideo && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {overlay && (backgroundImage || backgroundVideo) && (
        <div className="absolute inset-0 bg-black/40" />
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`flex flex-col ${alignmentClasses[alignment]}`}
        >
          {subtitle && (
            <p className="text-sm uppercase tracking-widest mb-4 opacity-90">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl max-w-2xl mb-8 opacity-90">
              {description}
            </p>
          )}
          
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-wrap gap-4 justify-center">
              {primaryCTA && (
                <button
                  onClick={primaryCTA.onClick}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {primaryCTA.text}
                </button>
              )}
              {secondaryCTA && (
                <button
                  onClick={secondaryCTA.onClick}
                  className="px-8 py-3 border border-current rounded-lg hover:bg-white/10 transition-colors"
                >
                  {secondaryCTA.text}
                </button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}