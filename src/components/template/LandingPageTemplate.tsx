'use client'

import { ReactNode } from 'react'

interface LandingPageTemplateProps {
  children: ReactNode
  className?: string
}

export function LandingPageTemplate({ children, className = '' }: LandingPageTemplateProps) {
  return (
    <div className={`min-h-screen ${className}`}>
      {children}
    </div>
  )
}