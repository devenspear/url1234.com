'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface Feature {
  title: string
  description: string
  icon?: LucideIcon
  image?: string
}

interface FeaturesSectionProps {
  title?: string
  subtitle?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  variant?: 'cards' | 'grid' | 'list'
}

export function FeaturesSection({
  title,
  subtitle,
  features,
  columns = 3,
  variant = 'cards'
}: FeaturesSectionProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold">
                {title}
              </h2>
            )}
          </div>
        )}
        
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={variant === 'cards' ? 'p-6 rounded-lg border bg-card' : ''}
            >
              {feature.icon && (
                <div className="mb-4">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
              )}
              {feature.image && (
                <div className="mb-4 aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}