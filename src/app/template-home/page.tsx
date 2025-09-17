'use client'

import Link from 'next/link'
import { ArrowRight, Code, Palette, Layers } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function TemplateHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Next-Shad-Starter 2.0
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modular landing page template system built with Next.js 15, Shadcn/UI, and Tailwind CSS
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <Code className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Modular Components</h3>
            <p className="text-gray-600 text-sm">
              Pre-built sections that you can mix and match to create unique landing pages
            </p>
          </Card>
          
          <Card className="p-6">
            <Palette className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Beautiful Design</h3>
            <p className="text-gray-600 text-sm">
              Modern, responsive design with smooth animations and professional styling
            </p>
          </Card>
          
          <Card className="p-6">
            <Layers className="w-10 h-10 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Easy to Customize</h3>
            <p className="text-gray-600 text-sm">
              Simple props-based API makes it easy to customize every aspect
            </p>
          </Card>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Available Templates</h2>
          <div className="space-y-4">
            <Link
              href="/template-example"
              className="block p-4 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold group-hover:text-blue-600">Example Landing Page</h3>
                  <p className="text-sm text-gray-600">A complete example showing all available sections</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
              </div>
            </Link>
            
            <Link
              href="/page-simple"
              className="block p-4 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold group-hover:text-blue-600">Simple Page</h3>
                  <p className="text-sm text-gray-600">Minimal landing page template</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
              </div>
            </Link>
            
            <Link
              href="/page-complex"
              className="block p-4 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold group-hover:text-blue-600">Complex Page</h3>
                  <p className="text-sm text-gray-600">Advanced landing page with more features</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
              </div>
            </Link>
            
            <Link
              href="/"
              className="block p-4 border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold group-hover:text-blue-600">Alys Beach Clone</h3>
                  <p className="text-sm text-gray-600">Real estate landing page with video hero</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Quick Start Guide</h2>
          <div className="space-y-3 font-mono text-sm">
            <p className="text-gray-400"># 1. Copy any template page to create a new landing page</p>
            <div className="bg-gray-800 p-3 rounded">
              cp src/app/template-example/page.tsx src/app/my-landing/page.tsx
            </div>
            
            <p className="text-gray-400 mt-4"># 2. Customize the content and components</p>
            <div className="bg-gray-800 p-3 rounded">
              {`// Import the components you need
import { HeroSection, FeaturesSection } from '@/components/template/sections'

// Customize with your content
<HeroSection title="Your Title" description="Your description" />`}
            </div>
            
            <p className="text-gray-400 mt-4"># 3. Run the development server</p>
            <div className="bg-gray-800 p-3 rounded">
              npm run dev
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}