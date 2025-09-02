'use client'

import { LandingPageTemplate } from '@/components/template/LandingPageTemplate'
import {
  HeroSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
  FooterSection
} from '@/components/template/sections'
import { Heart, Brain, Users, Sparkles } from 'lucide-react'

export default function KaleidoscopePage() {
  const features = [
    {
      title: 'Holistic Healing',
      description: 'Addressing the whole person - mind, body, and spirit for complete transformation',
      icon: Heart
    },
    {
      title: 'Science-Based Approach',
      description: 'Evidence-based methodologies combined with ancient wisdom for optimal results',
      icon: Brain
    },
    {
      title: 'Community Support',
      description: 'Join a supportive community of individuals on their healing journey',
      icon: Users
    },
    {
      title: 'Personalized Methods',
      description: 'Tailored approaches that adapt to your unique needs and circumstances',
      icon: Sparkles
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Client',
      content: 'The kaleidoscope method completely transformed my approach to healing. I found clarity I never thought possible.',
      rating: 5
    },
    {
      name: 'Michael R.',
      role: 'Participant',
      content: 'After years of searching, I finally found a method that addresses all aspects of wellness. Truly life-changing.',
      rating: 5
    },
    {
      name: 'Lisa K.',
      role: 'Student',
      content: 'The personalized approach made all the difference. I felt heard, understood, and genuinely supported.',
      rating: 5
    }
  ]

  const footerColumns = [
    {
      title: 'Services',
      links: [
        { label: 'Individual Sessions', href: '#sessions' },
        { label: 'Group Programs', href: '#programs' },
        { label: 'Workshops', href: '#workshops' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'About the Method', href: '#method' },
        { label: 'Success Stories', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'Book Consultation', href: '#booking' },
        { label: 'Contact Us', href: '#contact' },
        { label: 'Newsletter', href: '#newsletter' }
      ]
    }
  ]

  return (
    <LandingPageTemplate>
      <HeroSection
        title="Kaleidoscope Healing Method"
        subtitle="Transform Your Life"
        description="Discover a revolutionary approach to healing that addresses mind, body, and spirit through personalized, science-based methodologies"
        primaryCTA={{
          text: 'Start Your Journey',
          onClick: () => console.log('Start journey clicked')
        }}
        secondaryCTA={{
          text: 'Learn More',
          onClick: () => console.log('Learn more clicked')
        }}
        height="full"
        alignment="center"
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
        overlay={true}
      />

      <FeaturesSection
        title="Why Choose Kaleidoscope?"
        subtitle="A Comprehensive Approach to Healing"
        features={features}
        columns={4}
        variant="cards"
      />

      <CTASection
        title="Ready to Transform Your Life?"
        description="Take the first step towards holistic healing and personal transformation"
        primaryCTA={{
          text: 'Book Free Consultation',
          onClick: () => console.log('Book consultation clicked')
        }}
        variant="gradient"
      />

      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="Real Stories of Transformation"
        testimonials={testimonials}
        columns={3}
        variant="cards"
      />

      <CTASection
        title="Begin Your Healing Journey Today"
        description="Join thousands who have discovered the power of the Kaleidoscope Method"
        primaryCTA={{
          text: 'Get Started Now',
          onClick: () => console.log('Get started clicked')
        }}
        secondaryCTA={{
          text: 'Download Free Guide',
          onClick: () => console.log('Download guide clicked')
        }}
        variant="centered"
      />

      <FooterSection
        companyName="Kaleidoscope Healing"
        tagline="Transforming lives through holistic healing"
        columns={footerColumns}
        backgroundColor="dark"
      />
    </LandingPageTemplate>
  )
}