'use client'

import { LandingPageTemplate } from '@/components/template/LandingPageTemplate'
import {
  HeroSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
  FooterSection
} from '@/components/template/sections'
import { Sparkles, Zap, Shield, Rocket } from 'lucide-react'

export default function TemplateExamplePage() {
  const features = [
    {
      title: 'Lightning Fast',
      description: 'Built with Next.js 15 and optimized for performance',
      icon: Zap
    },
    {
      title: 'Beautiful Design',
      description: 'Pre-built components with shadcn/ui and Tailwind CSS',
      icon: Sparkles
    },
    {
      title: 'Secure by Default',
      description: 'Following best practices for security and reliability',
      icon: Shield
    },
    {
      title: 'Ready to Scale',
      description: 'Modular architecture that grows with your business',
      icon: Rocket
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'This template saved us weeks of development time. The components are well-designed and easy to customize.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      company: 'DevCo',
      content: 'The best landing page template I have worked with. Clean code and excellent documentation.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'InnovateTech',
      content: 'Our conversion rate increased by 40% after switching to this template. Highly recommended!',
      rating: 5
    }
  ]

  const footerColumns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Demo', href: '#demo' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Blog', href: '#blog' },
        { label: 'Careers', href: '#careers' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Documentation', href: '#docs' },
        { label: 'Contact', href: '#contact' },
        { label: 'FAQ', href: '#faq' }
      ]
    }
  ]

  return (
    <LandingPageTemplate>
      <HeroSection
        title="Build Amazing Landing Pages"
        subtitle="Next.js + Shadcn/UI Template"
        description="Create stunning, high-converting landing pages in minutes with our modular component system"
        primaryCTA={{
          text: 'Get Started',
          onClick: () => window.open('/templates', '_self')
        }}
        secondaryCTA={{
          text: 'View Demo',
          onClick: () => window.open('https://github.com/devenspear/Next-Shad-Starter2.0', '_blank')
        }}
        height="full"
        alignment="center"
        backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop"
        overlay={true}
      />

      <FeaturesSection
        title="Why Choose Our Template?"
        subtitle="Built for Modern Web Development"
        features={features}
        columns={4}
        variant="cards"
      />

      <CTASection
        title="Ready to Transform Your Ideas?"
        description="Join thousands of developers who are building faster with our template"
        primaryCTA={{
          text: 'Start Building Today',
          onClick: () => window.open('/templates', '_self')
        }}
        variant="gradient"
      />

      <TestimonialsSection
        title="What Our Users Say"
        subtitle="Trusted by Developers Worldwide"
        testimonials={testimonials}
        columns={3}
        variant="cards"
      />

      <CTASection
        title="Start Your Project Today"
        description="Get access to all components and future updates"
        primaryCTA={{
          text: 'Download Template',
          onClick: () => window.open('https://github.com/devenspear/Next-Shad-Starter2.0/archive/refs/heads/main.zip', '_blank')
        }}
        secondaryCTA={{
          text: 'View Documentation',
          onClick: () => window.open('https://github.com/devenspear/Next-Shad-Starter2.0#readme', '_blank')
        }}
        variant="centered"
      />

      <FooterSection
        companyName="Next-Shad-Starter"
        tagline="Build better, ship faster"
        columns={footerColumns}
        backgroundColor="dark"
      />
    </LandingPageTemplate>
  )
}