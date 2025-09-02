'use client'

import { motion } from 'framer-motion'

interface CTASectionProps {
  title: string
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
  variant?: 'centered' | 'split' | 'gradient'
  backgroundImage?: string
}

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'centered',
  backgroundImage
}: CTASectionProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-primary to-primary/60 text-primary-foreground'
      case 'split':
        return 'bg-muted'
      default:
        return 'bg-background'
    }
  }

  return (
    <section className={`py-20 relative overflow-hidden ${getVariantClasses()}`}>
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={variant === 'split' ? 'grid md:grid-cols-2 gap-8 items-center' : 'text-center'}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            {description && (
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
          
          {(primaryCTA || secondaryCTA) && (
            <div className={`flex flex-wrap gap-4 ${variant === 'split' ? 'justify-start' : 'justify-center'}`}>
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