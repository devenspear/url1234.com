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
  ExternalLink,
  Trash2,
  Edit3,
  Zap,
  Palette,
  Layers,
  ArrowRight
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

export default function TemplateManagerPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [deployedPages, setDeployedPages] = useState<DeployedPage[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [newPageUrl, setNewPageUrl] = useState('')
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                <Layout className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
              Template Manager
            </h1>
            <p className="text-xl text-gray-600 mb-2">url1234.com/templates</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Create stunning landing pages in minutes with our professional template system
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <Tabs defaultValue="templates" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-3 h-14 p-1 bg-gray-100/50 rounded-2xl">
              <TabsTrigger value="templates" className="text-sm font-medium rounded-xl">Templates</TabsTrigger>
              <TabsTrigger value="deployed" className="text-sm font-medium rounded-xl">Pages</TabsTrigger>
              <TabsTrigger value="settings" className="text-sm font-medium rounded-xl">Settings</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="templates" className="space-y-8">
            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="text-2xl font-bold text-blue-900">{templates.length}</p>
                    <p className="text-sm text-blue-700">Templates Available</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="text-2xl font-bold text-green-900">{deployedPages.length}</p>
                    <p className="text-sm text-green-700">Pages Deployed</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <div className="flex items-center gap-3">
                  <Layers className="w-8 h-8 text-purple-600" />
                  <div>
                    <p className="text-2xl font-bold text-purple-900">∞</p>
                    <p className="text-sm text-purple-700">Possibilities</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Template Selection */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Template</h2>
                  <p className="text-gray-600">Select from our collection of professionally designed templates</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {templates.map((template) => (
                    <Card 
                      key={template.id}
                      className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                        selectedTemplate?.id === template.id 
                          ? 'ring-2 ring-blue-500 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50' 
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => setSelectedTemplate(template)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
                            <Palette className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">{template.name}</h3>
                            <p className="text-xs text-gray-500">{template.category}</p>
                          </div>
                        </div>
                        <Badge 
                          variant={template.status === 'active' ? 'default' : 
                                  template.status === 'beta' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {template.status}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{template.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template.features.slice(0, 3).map((feature, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded-md">
                            {feature}
                          </span>
                        ))}
                        {template.features.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded-md">
                            +{template.features.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-3">
                        <button 
                          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(template.preview, '_blank')
                          }}
                        >
                          <Eye className="w-4 h-4" />
                          Preview
                        </button>
                        <button 
                          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation()
                            copyCodeSnippet()
                          }}
                        >
                          <Code className="w-4 h-4" />
                          Code
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Configuration Panel */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Create New Page</h2>
                  <p className="text-gray-600">Configure your new landing page</p>
                </div>
                
                <Card className="p-6 space-y-6">
                  {selectedTemplate ? (
                    <>
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <p className="font-semibold text-blue-900">Selected Template</p>
                        </div>
                        <p className="font-bold text-blue-900">{selectedTemplate.name}</p>
                        <p className="text-sm text-blue-700">{selectedTemplate.category}</p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Page URL</label>
                        <div className="flex items-center space-x-2">
                          <span className="px-3 py-3 bg-gray-50 text-gray-500 text-sm rounded-l-xl border border-r-0">
                            url1234.com/
                          </span>
                          <input
                            type="text"
                            value={newPageUrl}
                            onChange={(e) => setNewPageUrl(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                            placeholder="my-landing-page"
                            className="flex-1 px-4 py-3 border border-l-0 rounded-r-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">Template Features</label>
                        <div className="space-y-3">
                          {selectedTemplate.features.map((feature, i) => (
                            <label key={i} className="flex items-center gap-3">
                              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <button
                          onClick={handleCreatePage}
                          disabled={!newPageUrl || isCreating}
                          className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        >
                          {isCreating ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Creating Page...
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-5 h-5" />
                              Create & Deploy
                            </>
                          )}
                        </button>

                        <button
                          onClick={copyCodeSnippet}
                          className="w-full px-6 py-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                        >
                          {copiedCode ? (
                            <>
                              <Check className="w-5 h-5 text-green-600" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-5 h-5" />
                              Copy Code Template
                            </>
                          )}
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Layout className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-500 mb-2">No template selected</p>
                      <p className="text-sm text-gray-400">Choose a template to get started</p>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="deployed" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Deployed Pages</h2>
                <p className="text-gray-600">Manage your live landing pages</p>
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center gap-2 shadow-lg">
                <Plus className="w-5 h-5" />
                New Page
              </button>
            </div>

            {deployedPages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deployedPages.map((page) => (
                  <Card key={page.id} className="p-6 hover:shadow-lg transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                          <Globe className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{page.name}</h3>
                          <p className="text-xs text-gray-500">{page.template}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={page.status === 'live' ? 'default' : 
                                page.status === 'building' ? 'secondary' : 'outline'}
                        className={`${page.status === 'live' ? 'bg-green-100 text-green-800 border-green-200' : ''}`}
                      >
                        {page.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-medium text-gray-600">{page.url}</p>
                      <p className="text-xs text-gray-400">
                        Created: {new Date(page.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        className="flex-1 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        onClick={() => window.open(`/${page.name}`, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit
                      </button>
                      <button className="px-4 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button className="px-4 py-3 border border-red-300 text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500 mb-2">No pages deployed yet</p>
                <p className="text-sm text-gray-400 mb-6">Create your first page from the Templates tab</p>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2 mx-auto">
                  <ArrowRight className="w-4 h-4" />
                  Get Started
                </button>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Settings</h2>
              <p className="text-gray-600">Configure your template system</p>
            </div>
            
            <div className="max-w-4xl space-y-6">
              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Deployment Configuration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Vercel Project</label>
                    <input
                      type="text"
                      defaultValue="url1234-main"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Production Domain</label>
                    <input
                      type="text"
                      defaultValue="url1234.com"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  API Integration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Database Provider</label>
                    <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                      <option>PostgreSQL (Supabase)</option>
                      <option>MySQL (PlanetScale)</option>
                      <option>MongoDB (Atlas)</option>
                      <option>SQLite (Turso)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Authentication Provider</label>
                    <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                      <option>NextAuth.js</option>
                      <option>Clerk</option>
                      <option>Auth0</option>
                      <option>Supabase Auth</option>
                    </select>
                  </div>
                </div>
              </Card>

              <div className="flex justify-end">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg">
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