'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Layout, 
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
  Palette,
  ArrowRight,
  Moon,
  Sun,
  FileText,
  RefreshCw
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
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [newPageUrl, setNewPageUrl] = useState('')
  const [copiedCode, setCopiedCode] = useState(false)
  const [activeTab, setActiveTab] = useState('templates')
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
    loadDeployedPages()
    
    const darkMode = localStorage.getItem('darkMode')
    if (darkMode === 'true') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const loadDeployedPages = async (showLoading = false) => {
    if (showLoading) setIsRefreshing(true)
    try {
      const response = await fetch('/api/pages')
      if (response.ok) {
        const data = await response.json()
        setDeployedPages(data)
      }
    } catch (error) {
      console.error('Failed to load pages:', error)
    } finally {
      if (showLoading) setIsRefreshing(false)
    }
  }

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
            subtitle: 'Created with Page Manager',
            description: `A page created using the ${selectedTemplate.name} template`,
            companyName: 'Your Company'
          }
        })
      })

      if (response.ok) {
        const result = await response.json()
        await loadDeployedPages()
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
      const response = await fetch(`/api/pages/delete?page=${pageName}`, {
        method: 'DELETE'
      })

      if (response.ok) {
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
    localStorage.setItem('pageManagerSettings', JSON.stringify(settings))
    setSettingsSaved(true)
    setTimeout(() => setSettingsSaved(false), 2000)
  }

  const handleSettingChange = (field: string, value: string) => {
    setSettings(prev => ({ ...prev, [field]: value }))
  }

  const navigationItems = [
    { id: 'templates', label: 'Templates', icon: Layout, count: templates.length },
    { id: 'pages', label: 'Pages', icon: FileText, count: deployedPages.length },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Left Sidebar Navigation */}
      <div className={`w-64 border-r transition-all duration-200 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        {/* Logo/Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
              <Layout className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Page Manager
              </h1>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                url1234.com
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                activeTab === item.id
                  ? isDarkMode
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                  : isDarkMode
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
              {item.count !== undefined && (
                <div className={`px-3 py-1 rounded-lg font-bold text-lg ${
                  activeTab === item.id 
                    ? 'bg-white/20 text-white' 
                    : isDarkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-200 text-gray-700'
                }`}>
                  {item.count}
                </div>
              )}
            </button>
          ))}
        </nav>

        {/* Bottom Section - Dark Mode Toggle */}
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              isDarkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            <span className="font-medium">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className={`border-b transition-colors duration-200 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {activeTab === 'templates' && 'Templates'}
                  {activeTab === 'pages' && 'Pages'}
                  {activeTab === 'settings' && 'Settings'}
                </h1>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {activeTab === 'templates' && 'Choose and deploy professional templates'}
                  {activeTab === 'pages' && 'Manage your deployed pages'}
                  {activeTab === 'settings' && 'Configure your page manager'}
                </p>
              </div>
              
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Templates Tab */}
          {activeTab === 'templates' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
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
                            <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{template.name}</h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{template.category}</p>
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
                      
                      <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{template.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template.features.slice(0, 3).map((feature, i) => (
                          <span key={i} className={`px-3 py-1 text-xs rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                            {feature}
                          </span>
                        ))}
                        {template.features.length > 3 && (
                          <span className={`px-3 py-1 text-xs rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                            +{template.features.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-3">
                        <button 
                          className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(template.preview, '_blank')
                          }}
                        >
                          <Eye className="w-4 h-4" />
                          Preview
                        </button>
                        <button 
                          className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
                            isDarkMode ? 'text-gray-300 bg-gray-700 hover:bg-gray-600' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                          }`}
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
                <Card className={`p-6 space-y-6 ${isDarkMode ? 'bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-indigo-700/50' : 'bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200'}`}>
                  <div>
                    <h2 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Create New Page</h2>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Configure your new landing page</p>
                  </div>
                  
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
                        <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-indigo-200' : 'text-indigo-800'}`}>Page URL</label>
                        <div className="flex items-center space-x-0">
                          <span className={`px-3 py-3 text-sm rounded-l-xl border border-r-0 ${isDarkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'bg-white text-gray-500 border-gray-300'}`}>
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
                        <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-indigo-200' : 'text-indigo-800'}`}>Template Features</label>
                        <div className="space-y-3 max-h-40 overflow-y-auto">
                          {selectedTemplate.features.map((feature, i) => (
                            <label key={i} className="flex items-center gap-3 cursor-pointer group">
                              <input 
                                type="checkbox" 
                                defaultChecked 
                                className="w-4 h-4 text-blue-600 rounded border-2 border-gray-300 focus:ring-blue-500 focus:ring-2"
                              />
                              <span className={`text-sm group-hover:text-blue-600 transition-colors ${isDarkMode ? 'text-indigo-100' : 'text-indigo-700'}`}>
                                {feature}
                              </span>
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
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${isDarkMode ? 'bg-gradient-to-r from-indigo-800 to-purple-800' : 'bg-gradient-to-r from-blue-100 to-indigo-200'}`}>
                        <Layout className={`w-8 h-8 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}`} />
                      </div>
                      <p className={`mb-2 ${isDarkMode ? 'text-indigo-200' : 'text-indigo-700'}`}>No template selected</p>
                      <p className={`text-sm ${isDarkMode ? 'text-indigo-300' : 'text-indigo-500'}`}>Choose a template to get started</p>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          )}

          {/* Pages Tab */}
          {activeTab === 'pages' && (
            <div className="space-y-6">
              {/* Pages Header with Refresh Button */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Deployed Pages
                  </h2>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {deployedPages.length} page{deployedPages.length !== 1 ? 's' : ''} deployed
                  </p>
                </div>
                <button
                  onClick={() => loadDeployedPages(true)}
                  disabled={isRefreshing}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    isDarkMode 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-800 disabled:opacity-50' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-300'
                  }`}
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  {isRefreshing ? 'Refreshing...' : 'Refresh'}
                </button>
              </div>

              {deployedPages.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {deployedPages.map((page) => (
                    <Card key={page.id} className={`p-8 hover:shadow-lg transition-shadow duration-200 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-r from-blue-800 to-indigo-800' : 'bg-gradient-to-r from-blue-100 to-indigo-100'}`}>
                            <Globe className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{page.name}</h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{page.template}</p>
                          </div>
                        </div>
                        <Badge 
                          variant={page.status === 'live' ? 'default' : 
                                  page.status === 'building' ? 'secondary' : 'outline'}
                          className={`text-sm px-3 py-1 ${page.status === 'live' ? 'bg-green-100 text-green-800 border-green-200' : ''}`}
                        >
                          {page.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3 mb-8">
                        <p className={`text-base font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{page.url}</p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>
                          Created: {new Date(page.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      
                      <div className="flex gap-3">
                        <button 
                          className="flex-1 px-6 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
                          onClick={() => window.open(`/${page.name}`, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit Page
                        </button>
                        <button 
                          onClick={() => {
                            setSelectedTemplate(templates.find(t => t.name === page.template) || null)
                            setNewPageUrl(`${page.name}-v2`)
                            setActiveTab('templates')
                          }}
                          className={`px-4 py-4 border font-medium rounded-xl transition-colors flex items-center justify-center ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeletePage(page.id, page.name)}
                          className="px-4 py-4 border border-red-300 text-red-600 font-medium rounded-xl hover:bg-red-50 transition-colors flex items-center justify-center">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className={`p-16 text-center ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-gray-100 to-gray-200'}`}>
                    <Globe className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>No pages deployed yet</h3>
                  <p className={`text-base mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Create your first page from the Templates section</p>
                  <button 
                    onClick={() => setActiveTab('templates')}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-3 mx-auto"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Get Started with Templates
                  </button>
                </Card>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="max-w-4xl space-y-8">
              <Card className={`p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <h3 className={`font-bold text-xl mb-6 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Database className="w-6 h-6" />
                  Deployment Configuration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={`block text-base font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Vercel Project</label>
                    <input
                      type="text"
                      value={settings.vercelProject}
                      onChange={(e) => handleSettingChange('vercelProject', e.target.value)}
                      className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-base font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Production Domain</label>
                    <input
                      type="text"
                      value={settings.productionDomain}
                      onChange={(e) => handleSettingChange('productionDomain', e.target.value)}
                      className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    />
                  </div>
                </div>
              </Card>

              <Card className={`p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <h3 className={`font-bold text-xl mb-6 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Settings className="w-6 h-6" />
                  API Integration
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={`block text-base font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Database Provider</label>
                    <select 
                      value={settings.databaseProvider}
                      onChange={(e) => handleSettingChange('databaseProvider', e.target.value)}
                      className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    >
                      <option>PostgreSQL (Supabase)</option>
                      <option>MySQL (PlanetScale)</option>
                      <option>MongoDB (Atlas)</option>
                      <option>SQLite (Turso)</option>
                    </select>
                  </div>
                  <div>
                    <label className={`block text-base font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Authentication Provider</label>
                    <select 
                      value={settings.authProvider}
                      onChange={(e) => handleSettingChange('authProvider', e.target.value)}
                      className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
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
                  className={`px-8 py-4 font-semibold rounded-xl transition-all duration-200 shadow-lg flex items-center gap-3 text-base ${
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
          )}
        </div>
      </div>
    </div>
  )
}