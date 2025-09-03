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
  ArrowRight,
  Moon,
  Sun
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

export default function PageManagerPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [deployedPages, setDeployedPages] = useState<DeployedPage[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [newPageUrl, setNewPageUrl] = useState('')
  const [copiedCode, setCopiedCode] = useState(false)
  const [settings, setSettings] = useState({
    vercelProject: 'url1234-main',
    productionDomain: 'url1234.com',
    databaseProvider: 'PostgreSQL (Supabase)',
    authProvider: 'NextAuth.js'
  })
  const [settingsSaved, setSettingsSaved] = useState(false)

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
    // Load deployed pages from API
    loadDeployedPages()
    
    // Load dark mode preference
    const darkMode = localStorage.getItem('darkMode')
    if (darkMode === 'true') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const loadDeployedPages = async () => {
    try {
      const response = await fetch('/api/pages/list')
      if (response.ok) {
        const data = await response.json()
        setDeployedPages(data.pages)
      }
    } catch (error) {
      console.error('Failed to load pages:', error)
    }
  }

  // Dark mode toggle effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }, [isDarkMode])

  const handleCreatePage = async () => {
    if (!selectedTemplate || !newPageUrl) return

    setIsCreating(true)
    
    try {
      // Call the API to create the page
      const response = await fetch('/api/templates/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          templateId: selectedTemplate.id,
          pageName: newPageUrl,
          configuration: {
            title: `${selectedTemplate.name} Page`,
            subtitle: 'Created with Template Manager',
            description: `A page created using the ${selectedTemplate.name} template`,
            companyName: 'Your Company'
          }
        })
      })

      if (response.ok) {
        const result = await response.json()
        
        // Refresh the pages list from the API
        await loadDeployedPages()
        
        // Reset form
        setNewPageUrl('')
        setSelectedTemplate(null)
      } else {
        const error = await response.json()
        alert(`Failed to create page: ${error.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error creating page:', error)
      alert('An error occurred while creating the page.')
    } finally {
      setIsCreating(false)
    }
  }

  const handleDeletePage = async (pageId: string, pageName: string) => {
    if (!confirm(`Are you sure you want to delete "${pageName}"? This action cannot be undone.`)) {
      return
    }

    try {
      // Call the API to delete the page
      const response = await fetch(`/api/pages/delete?page=${pageName}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        // Refresh the pages list from the API
        await loadDeployedPages()
      } else {
        const errorData = await response.json().catch(() => ({}))
        alert(`Failed to delete page: ${errorData.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error deleting page:', error)
      alert('An error occurred while deleting the page.')
    }
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

  const handleSaveSettings = () => {
    localStorage.setItem('templateManagerSettings', JSON.stringify(settings))
    setSettingsSaved(true)
    setTimeout(() => setSettingsSaved(false), 2000)
  }

  const handleSettingChange = (field: string, value: string) => {
    setSettings(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-white to-slate-50'}`}>
      {/* Header */}
      <div className={`relative overflow-hidden border-b transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
        <div className={`absolute inset-0 opacity-50 ${isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-blue-50 to-indigo-50'}`}></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
          {/* Dark Mode Toggle */}
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-3 rounded-full transition-all duration-200 hover:scale-105 ${isDarkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                <Layout className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent' : 'bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'}`}>
              Page Manager
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <Tabs defaultValue="templates" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className={`grid w-full max-w-md grid-cols-3 h-14 p-1 rounded-2xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}>
              <TabsTrigger value="templates" className="text-sm font-medium rounded-xl">Templates</TabsTrigger>
              <TabsTrigger value="deployed" className="text-sm font-medium rounded-xl">Pages</TabsTrigger>
              <TabsTrigger value="settings" className="text-sm font-medium rounded-xl">Settings</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="templates" className="space-y-8">
            {/* Hero Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className={`p-6 ${isDarkMode ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-700' : 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200'}`}>
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-blue-300' : 'text-blue-900'}`}>{templates.length}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>Templates Available</p>
                  </div>
                </div>
              </Card>
              
              <Card className={`p-6 ${isDarkMode ? 'bg-gradient-to-br from-green-900/20 to-green-800/20 border-green-700' : 'bg-gradient-to-br from-green-50 to-green-100 border-green-200'}`}>
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-green-600" />
                  <div>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-green-300' : 'text-green-900'}`}>{deployedPages.length}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-green-400' : 'text-green-700'}`}>Pages Deployed</p>
                  </div>
                </div>
              </Card>
              
              <Card className={`p-6 ${isDarkMode ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-purple-700' : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200'}`}>
                <div className="flex items-center gap-3">
                  <Layers className="w-8 h-8 text-purple-600" />
                  <div>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-purple-300' : 'text-purple-900'}`}>∞</p>
                    <p className={`text-sm ${isDarkMode ? 'text-purple-400' : 'text-purple-700'}`}>Possibilities</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Template Selection */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Choose Your Template</h2>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Select from our collection of professionally designed templates</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {templates.map((template) => (
                    <Card 
                      key={template.id}
                      className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                        selectedTemplate?.id === template.id 
                          ? `ring-2 ring-blue-500 shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-blue-900/30 to-indigo-900/30' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}` 
                          : 'hover:shadow-md'
                      } ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
                      onClick={() => setSelectedTemplate(template)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-gray-100 to-gray-200'}`}>
                            <Palette className={`w-5 h-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                          </div>
                          <div>
                            <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{template.name}</h3>
                            <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{template.category}</p>
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
                      
                      <p className={`text-sm mb-4 line-clamp-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{template.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template.features.slice(0, 3).map((feature, i) => (
                          <span key={i} className={`px-2 py-1 text-xs rounded-md ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                            {feature}
                          </span>
                        ))}
                        {template.features.length > 3 && (
                          <span className={`px-2 py-1 text-xs rounded-md ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
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
                  <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Create New Page</h2>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Configure your new landing page</p>
                </div>
                
                <Card className={`p-6 space-y-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  {selectedTemplate ? (
                    <>
                      <div className={`p-4 rounded-xl border ${isDarkMode ? 'bg-gradient-to-r from-blue-900/20 to-indigo-900/20 border-blue-700' : 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200'}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <p className={`font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-900'}`}>Selected Template</p>
                        </div>
                        <p className={`font-bold ${isDarkMode ? 'text-blue-300' : 'text-blue-900'}`}>{selectedTemplate.name}</p>
                        <p className={`text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-700'}`}>{selectedTemplate.category}</p>
                      </div>

                      <div>
                        <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Page URL</label>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-3 text-sm rounded-l-xl border border-r-0 ${isDarkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'bg-gray-50 text-gray-500 border-gray-300'}`}>
                            url1234.com/
                          </span>
                          <input
                            type="text"
                            value={newPageUrl}
                            onChange={(e) => setNewPageUrl(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                            placeholder="my-landing-page"
                            className={`flex-1 px-4 py-3 border border-l-0 rounded-r-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Template Features</label>
                        <div className="space-y-3">
                          {selectedTemplate.features.map((feature, i) => (
                            <label key={i} className="flex items-center gap-3">
                              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                              <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
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
                          className={`w-full px-6 py-4 border font-medium rounded-xl transition-colors flex items-center justify-center gap-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
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
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Deployed Pages</h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Manage your live landing pages</p>
              </div>
              <button 
                onClick={() => {
                  // Switch to templates tab
                  const templatesTab = document.querySelector('[value="templates"]') as HTMLButtonElement
                  templatesTab?.click()
                }}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <Plus className="w-5 h-5" />
                New Page
              </button>
            </div>

            {deployedPages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deployedPages.map((page) => (
                  <Card key={page.id} className={`p-6 hover:shadow-lg transition-shadow duration-200 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-r from-blue-800 to-indigo-800' : 'bg-gradient-to-r from-blue-100 to-indigo-100'}`}>
                          <Globe className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{page.name}</h3>
                          <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{page.template}</p>
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
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{page.url}</p>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>
                        Created: {new Date(page.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        className="flex-1 px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                        onClick={() => window.open(`/p/${page.name}`, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit
                      </button>
                      <button 
                        onClick={() => {
                          // Switch to templates tab and pre-fill form with page data
                          setSelectedTemplate(templates.find(t => t.name === page.template) || null)
                          setNewPageUrl(`${page.name}-v2`)
                          const templatesTab = document.querySelector('[value="templates"]') as HTMLButtonElement
                          templatesTab?.click()
                        }}
                        className={`px-4 py-3 border font-medium rounded-lg transition-colors flex items-center justify-center ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDeletePage(page.id, page.name)}
                        className="px-4 py-3 border border-red-300 text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className={`p-12 text-center ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-gray-100 to-gray-200'}`}>
                  <Globe className="w-8 h-8 text-gray-400" />
                </div>
                <p className={`mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>No pages deployed yet</p>
                <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Create your first page from the Templates tab</p>
                <button 
                  onClick={() => {
                    const templatesTab = document.querySelector('[value="templates"]') as HTMLButtonElement
                    templatesTab?.click()
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2 mx-auto"
                >
                  <ArrowRight className="w-4 h-4" />
                  Get Started
                </button>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div>
              <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Settings</h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Configure your template system</p>
            </div>
            
            <div className="max-w-4xl space-y-6">
              <Card className={`p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <h3 className={`font-bold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Database className="w-5 h-5" />
                  Deployment Configuration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Vercel Project</label>
                    <input
                      type="text"
                      value={settings.vercelProject}
                      onChange={(e) => handleSettingChange('vercelProject', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Production Domain</label>
                    <input
                      type="text"
                      value={settings.productionDomain}
                      onChange={(e) => handleSettingChange('productionDomain', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    />
                  </div>
                </div>
              </Card>

              <Card className={`p-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <h3 className={`font-bold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Settings className="w-5 h-5" />
                  API Integration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Database Provider</label>
                    <select 
                      value={settings.databaseProvider}
                      onChange={(e) => handleSettingChange('databaseProvider', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    >
                      <option>PostgreSQL (Supabase)</option>
                      <option>MySQL (PlanetScale)</option>
                      <option>MongoDB (Atlas)</option>
                      <option>SQLite (Turso)</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Authentication Provider</label>
                    <select 
                      value={settings.authProvider}
                      onChange={(e) => handleSettingChange('authProvider', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    >
                      <option>NextAuth.js</option>
                      <option>Clerk</option>
                      <option>Auth0</option>
                      <option>Supabase Auth</option>
                    </select>
                  </div>
                </div>
              </Card>

              <div className="flex justify-end">
                <button 
                  onClick={handleSaveSettings}
                  className={`px-6 py-3 font-semibold rounded-lg transition-all duration-200 shadow-lg flex items-center gap-2 ${
                    settingsSaved 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                  }`}
                >
                  {settingsSaved ? (
                    <>
                      <Check className="w-5 h-5" />
                      Settings Saved!
                    </>
                  ) : (
                    'Save Settings'
                  )}
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}