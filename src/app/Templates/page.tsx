'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { 
  Layout, 
  Plus, 
  Eye, 
  Code, 
  Settings, 
  Database,
  Globe,
  Sparkles,
  Copy,
  Check,
  Loader2,
  ExternalLink
} from 'lucide-react'

interface Template {
  id: string
  name: string
  description: string
  category: string
  preview: string
  features: string[]
  status: 'active' | 'beta' | 'archived'
}

interface DeployedPage {
  id: string
  name: string
  url: string
  template: string
  createdAt: string
  status: 'live' | 'draft' | 'building'
}

export default function TemplateAdminPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [deployedPages, setDeployedPages] = useState<DeployedPage[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [newPageUrl, setNewPageUrl] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [copiedCode, setCopiedCode] = useState(false)

  const templates: Template[] = [
    {
      id: 'hero-landing',
      name: 'Hero Landing',
      description: 'Full-featured landing page with hero, features, testimonials, and CTA sections',
      category: 'Marketing',
      preview: '/template-example',
      features: ['Hero Section', 'Features Grid', 'Testimonials', 'Multiple CTAs', 'Dark Footer'],
      status: 'active'
    },
    {
      id: 'simple-landing',
      name: 'Simple Landing',
      description: 'Minimal landing page with essential sections only',
      category: 'Minimal',
      preview: '/page-simple',
      features: ['Clean Hero', 'Simple CTA', 'Basic Footer'],
      status: 'active'
    },
    {
      id: 'complex-landing',
      name: 'Complex Landing',
      description: 'Advanced landing page with multiple sections and interactions',
      category: 'Advanced',
      preview: '/page-complex',
      features: ['Video Hero', 'Animation', 'Multiple Sections', 'Interactive Elements'],
      status: 'active'
    },
    {
      id: 'real-estate',
      name: 'Real Estate Showcase',
      description: 'Property showcase with video backgrounds and elegant design',
      category: 'Industry',
      preview: '/',
      features: ['Video Background', 'Property Gallery', 'Contact Forms', 'Map Integration'],
      status: 'active'
    },
    {
      id: 'saas-product',
      name: 'SaaS Product',
      description: 'Software product landing with pricing, features, and demo CTA',
      category: 'Product',
      preview: '#',
      features: ['Pricing Table', 'Feature Comparison', 'Demo Booking', 'Integration Showcase'],
      status: 'beta'
    },
    {
      id: 'portfolio',
      name: 'Portfolio Showcase',
      description: 'Creative portfolio with project galleries and case studies',
      category: 'Creative',
      preview: '#',
      features: ['Project Gallery', 'Case Studies', 'Client Logos', 'Contact Form'],
      status: 'beta'
    }
  ]

  useEffect(() => {
    // Load deployed pages from localStorage (in production, this would be from a database)
    const saved = localStorage.getItem('deployedPages')
    if (saved) {
      setDeployedPages(JSON.parse(saved))
    }
  }, [])

  const handleCreatePage = async () => {
    if (!selectedTemplate || !newPageUrl) return

    setIsCreating(true)
    
    // Simulate page creation (in production, this would call an API)
    const newPage: DeployedPage = {
      id: Date.now().toString(),
      name: newPageUrl.split('/').pop() || 'untitled',
      url: `url1234.com/${newPageUrl}`,
      template: selectedTemplate.name,
      createdAt: new Date().toISOString(),
      status: 'building'
    }

    const updatedPages = [...deployedPages, newPage]
    setDeployedPages(updatedPages)
    localStorage.setItem('deployedPages', JSON.stringify(updatedPages))

    // Simulate build process
    setTimeout(() => {
      setDeployedPages(prev => 
        prev.map(p => p.id === newPage.id ? { ...p, status: 'live' } : p)
      )
      localStorage.setItem('deployedPages', JSON.stringify(
        updatedPages.map(p => p.id === newPage.id ? { ...p, status: 'live' } : p)
      ))
      setIsCreating(false)
      setNewPageUrl('')
      setSelectedTemplate(null)
    }, 3000)
  }

  const copyCodeSnippet = () => {
    const code = `import { LandingPageTemplate } from '@/components/template/LandingPageTemplate'
import { HeroSection, FeaturesSection } from '@/components/template/sections'

export default function ${newPageUrl || 'YourPage'}Page() {
  return (
    <LandingPageTemplate>
      <HeroSection title="Your Title" />
      <FeaturesSection features={[...]} />
    </LandingPageTemplate>
  )
}`
    navigator.clipboard.writeText(code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Layout className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold">Template Manager</h1>
                <p className="text-sm text-gray-600">url1234.com/Templates</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="gap-1">
                <Globe className="w-3 h-3" />
                Vercel Hosted
              </Badge>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Page
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="templates" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="deployed">Deployed Pages</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="templates" className="space-y-6">
            {/* Template Selection */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-xl font-semibold">Available Templates</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {templates.map((template) => (
                    <Card 
                      key={template.id}
                      className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
                        selectedTemplate?.id === template.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      onClick={() => setSelectedTemplate(template)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{template.name}</h3>
                        <Badge 
                          variant={template.status === 'active' ? 'default' : 
                                  template.status === 'beta' ? 'secondary' : 'outline'}
                        >
                          {template.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {template.features.slice(0, 3).map((feature, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {template.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{template.features.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button 
                          className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(template.preview, '_blank')
                          }}
                        >
                          <Eye className="w-3 h-3" />
                          Preview
                        </button>
                        <button 
                          className="text-xs text-gray-600 hover:underline flex items-center gap-1"
                          onClick={(e) => {
                            e.stopPropagation()
                            copyCodeSnippet()
                          }}
                        >
                          <Code className="w-3 h-3" />
                          Code
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Configuration Panel */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Configure New Page</h2>
                <Card className="p-6 space-y-4">
                  {selectedTemplate ? (
                    <>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Selected Template</label>
                        <div className="mt-1 p-3 bg-blue-50 rounded-lg">
                          <p className="font-semibold text-blue-900">{selectedTemplate.name}</p>
                          <p className="text-sm text-blue-700">{selectedTemplate.category}</p>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">Page URL</label>
                        <div className="mt-1 flex items-center">
                          <span className="text-sm text-gray-500 mr-2">url1234.com/</span>
                          <input
                            type="text"
                            value={newPageUrl}
                            onChange={(e) => setNewPageUrl(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                            placeholder="page-name"
                            className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-gray-700">Features to Include</label>
                        <div className="mt-2 space-y-2">
                          {selectedTemplate.features.map((feature, i) => (
                            <label key={i} className="flex items-center gap-2">
                              <input type="checkbox" defaultChecked className="rounded" />
                              <span className="text-sm">{feature}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <button
                          onClick={handleCreatePage}
                          disabled={!newPageUrl || isCreating}
                          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                        >
                          {isCreating ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Creating Page...
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-4 h-4" />
                              Create & Deploy
                            </>
                          )}
                        </button>

                        <button
                          onClick={copyCodeSnippet}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                        >
                          {copiedCode ? (
                            <>
                              <Check className="w-4 h-4 text-green-600" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              Copy Code Template
                            </>
                          )}
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Layout className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                      <p>Select a template to get started</p>
                    </div>
                  )}
                </Card>

                {/* Quick Actions */}
                <Card className="p-4 space-y-3">
                  <h3 className="font-semibold text-sm">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg flex items-center gap-2">
                      <Database className="w-4 h-4 text-gray-600" />
                      Connect Database
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg flex items-center gap-2">
                      <Settings className="w-4 h-4 text-gray-600" />
                      API Configuration
                    </button>
                    <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg flex items-center gap-2">
                      <Globe className="w-4 h-4 text-gray-600" />
                      Domain Settings
                    </button>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="deployed" className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Deployed Pages</h2>
              {deployedPages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {deployedPages.map((page) => (
                    <Card key={page.id} className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{page.name}</h3>
                        <Badge 
                          variant={page.status === 'live' ? 'default' : 
                                  page.status === 'building' ? 'secondary' : 'outline'}
                        >
                          {page.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{page.url}</p>
                      <p className="text-xs text-gray-500 mb-3">
                        Template: {page.template}
                      </p>
                      <p className="text-xs text-gray-400 mb-3">
                        Created: {new Date(page.createdAt).toLocaleDateString()}
                      </p>
                      <div className="flex gap-2">
                        <button className="text-xs text-blue-600 hover:underline flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          Visit
                        </button>
                        <button className="text-xs text-gray-600 hover:underline">
                          Edit
                        </button>
                        <button className="text-xs text-red-600 hover:underline">
                          Delete
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center">
                  <Globe className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p className="text-gray-500">No pages deployed yet</p>
                  <p className="text-sm text-gray-400 mt-1">Create your first page from the Templates tab</p>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold mb-4">Settings</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Deployment Configuration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Vercel Project</label>
                      <input
                        type="text"
                        defaultValue="url1234-main"
                        className="mt-1 w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Production Domain</label>
                      <input
                        type="text"
                        defaultValue="url1234.com"
                        className="mt-1 w-full px-3 py-2 border rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Environment Variables</label>
                      <textarea
                        rows={4}
                        placeholder="DATABASE_URL=..."
                        className="mt-1 w-full px-3 py-2 border rounded-lg font-mono text-sm"
                      />
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold mb-4">API Integration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Database Provider</label>
                      <select className="mt-1 w-full px-3 py-2 border rounded-lg">
                        <option>PostgreSQL (Supabase)</option>
                        <option>MySQL (PlanetScale)</option>
                        <option>MongoDB (Atlas)</option>
                        <option>SQLite (Turso)</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Authentication Provider</label>
                      <select className="mt-1 w-full px-3 py-2 border rounded-lg">
                        <option>NextAuth.js</option>
                        <option>Clerk</option>
                        <option>Auth0</option>
                        <option>Supabase Auth</option>
                      </select>
                    </div>
                  </div>
                </Card>

                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Save Settings
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}