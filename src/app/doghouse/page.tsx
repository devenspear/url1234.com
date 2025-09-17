'use client'

import { LandingPageTemplate } from '@/components/template/LandingPageTemplate'
import {
  HeroSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
  FooterSection
} from '@/components/template/sections'

export default function Page() {
  const features = [
  {
    "title": "Feature 1",
    "description": "Amazing feature description"
  },
  {
    "title": "Feature 2",
    "description": "Another great feature"
  },
  {
    "title": "Feature 3",
    "description": "Third awesome feature"
  }
]
  const testimonials = [
  {
    "name": "John Doe",
    "content": "Great product!",
    "role": "Customer",
    "rating": 5
  },
  {
    "name": "Jane Smith",
    "content": "Highly recommended!",
    "role": "User",
    "rating": 5
  }
]

  return (
    <LandingPageTemplate>
      <HeroSection
        title="Doghouse Demo"
        subtitle="Created with Template Manager"
        description="A page created using the Hero Landing template"
        primaryCTA={{
          text: 'Get Started',
          onClick: () => console.log('Primary CTA clicked')
        }}
        secondaryCTA={{
          text: 'Learn More',
          onClick: () => console.log('Secondary CTA clicked')
        }}
        height="full"
        alignment="center"
      />

      <FeaturesSection
        title="Features"
        subtitle="What We Offer"
        features={features}
        columns={3}
        variant="cards"
      />

      <TestimonialsSection
        title="What Our Customers Say"
        testimonials={testimonials}
        columns={3}
        variant="cards"
      />

      <CTASection
        title="Ready to Get Started?"
        description="Join thousands of satisfied customers today"
        primaryCTA={{
          text: 'Start Now',
          onClick: () => console.log('CTA clicked')
        }}
        variant="gradient"
      />

      <FooterSection
        companyName="Your Company"
        tagline="Building the future"
        backgroundColor="dark"
      />
    </LandingPageTemplate>
  )
}