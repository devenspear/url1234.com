import { NextResponse } from 'next/server'

export async function GET() {
  const templates = [
    {
      id: 'hero-landing',
      name: 'Hero Landing',
      description: 'Full-featured landing page with hero, features, testimonials, and CTA sections',
      category: 'Marketing',
      preview: '/template-example',
      features: ['Hero Section', 'Features Grid', 'Testimonials', 'Multiple CTAs', 'Dark Footer'],
      status: 'active',
      fields: [
        { name: 'title', label: 'Page Title', type: 'text', required: true },
        { name: 'subtitle', label: 'Subtitle', type: 'text', required: false },
        { name: 'description', label: 'Description', type: 'textarea', required: true },
        { name: 'companyName', label: 'Company Name', type: 'text', required: true }
      ]
    },
    {
      id: 'simple-landing',
      name: 'Simple Landing',
      description: 'Minimal landing page with essential sections only',
      category: 'Minimal',
      preview: '/page-simple',
      features: ['Clean Hero', 'Simple CTA', 'Basic Footer'],
      status: 'active',
      fields: [
        { name: 'title', label: 'Page Title', type: 'text', required: true },
        { name: 'description', label: 'Description', type: 'textarea', required: true },
        { name: 'companyName', label: 'Company Name', type: 'text', required: true }
      ]
    },
    {
      id: 'saas-product',
      name: 'SaaS Product',
      description: 'Software product landing with pricing, features, and demo CTA',
      category: 'Product',
      preview: '#',
      features: ['Pricing Table', 'Feature Comparison', 'Demo Booking', 'Integration Showcase'],
      status: 'active',
      fields: [
        { name: 'title', label: 'Product Name', type: 'text', required: true },
        { name: 'description', label: 'Product Description', type: 'textarea', required: true },
        { name: 'companyName', label: 'Company Name', type: 'text', required: true },
        { name: 'pricing', label: 'Starting Price', type: 'text', required: false }
      ]
    },
    {
      id: 'real-estate',
      name: 'Real Estate Showcase',
      description: 'Property showcase with video backgrounds and elegant design',
      category: 'Industry',
      preview: '/',
      features: ['Video Background', 'Property Gallery', 'Contact Forms', 'Map Integration'],
      status: 'active',
      fields: [
        { name: 'title', label: 'Property/Company Name', type: 'text', required: true },
        { name: 'location', label: 'Location', type: 'text', required: true },
        { name: 'description', label: 'Description', type: 'textarea', required: true },
        { name: 'companyName', label: 'Company Name', type: 'text', required: true }
      ]
    },
    {
      id: 'portfolio',
      name: 'Portfolio Showcase',
      description: 'Creative portfolio with project galleries and case studies',
      category: 'Creative',
      preview: '#',
      features: ['Project Gallery', 'Case Studies', 'Client Logos', 'Contact Form'],
      status: 'beta',
      fields: [
        { name: 'title', label: 'Your Name', type: 'text', required: true },
        { name: 'subtitle', label: 'Professional Title', type: 'text', required: true },
        { name: 'description', label: 'Bio/Description', type: 'textarea', required: true },
        { name: 'email', label: 'Contact Email', type: 'email', required: true }
      ]
    }
  ]

  return NextResponse.json(templates)
}