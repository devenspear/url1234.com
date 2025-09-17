'use client'

import { LandingPageTemplate } from '@/components/template/LandingPageTemplate'
import {
  HeroSection,
  CTASection,
  FooterSection
} from '@/components/template/sections'

export default function Page() {
  return (
    <LandingPageTemplate>
      <HeroSection
        title="Workflow Test"
        description="Testing the complete workflow"
        primaryCTA={{
          text: 'Get Started',
          onClick: () => console.log('CTA clicked')
        }}
        height="large"
        alignment="center"
      />

      <CTASection
        title="Start Your Journey"
        description="Simple, clean, effective"
        primaryCTA={{
          text: 'Begin Now',
          onClick: () => console.log('CTA clicked')
        }}
        variant="centered"
      />

      <FooterSection
        companyName="Workflow Co"
        backgroundColor="muted"
      />
    </LandingPageTemplate>
  )
}