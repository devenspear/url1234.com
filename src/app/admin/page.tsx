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
  RefreshCw,
  Server,
  Plus,
  AlertCircle,
  CheckCircle,
  Clock,
  Search
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

interface SubdomainConfig {
  subdomain: string
  templateId: string
  configuration: {
    title?: string
    subtitle?: string
    description?: string
    companyName?: string
    theme?: 'light' | 'dark'
    features?: Array<{title: string; description: string}>
    testimonials?: Array<{name: string; content: string; role: string; rating: number}>
  }
  status: 'active' | 'inactive' | 'maintenance'
  createdAt: string
  lastModified: string
}

export default function SubdomainManagerPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [subdomains, setSubdomains] = useState<SubdomainConfig[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [newSubdomainName, setNewSubdomainName] = useState('')
  const [copiedCode, setCopiedCode] = useState(false)
  const [activeTab, setActiveTab] = useState('templates')
  const [searchTerm, setSearchTerm] = useState('')
  const [vercelToken, setVercelToken] = useState('')
  const [settings, setSettings] = useState({
    vercelProject: 'url1234-com',
    baseDomain: 'url1234.com',
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
      preview: 'https://url1234.com/template-example',
      features: ['Hero Section', 'Features Grid', 'Testimonials', 'Multiple CTAs', 'Dark Footer'],
      status: 'active'
    },
    {
      id: 'simple-landing',
      name: 'Simple Landing',
      description: 'Minimal landing page with essential sections only',
      category: 'Minimal',
      preview: 'https://url1234.com/page-simple',
      features: ['Clean Hero', 'Simple CTA', 'Basic Footer'],
      status: 'active'
    },
    {
      id: 'complex-landing',
      name: 'Complex Landing',
      description: 'Advanced landing page with multiple sections and interactions',
      category: 'Advanced',
      preview: 'https://url1234.com/page-complex',
      features: ['Video Hero', 'Animation', 'Multiple Sections', 'Interactive Elements'],
      status: 'active'
    },
    {
      id: 'kaleidoscope-recovery',
      name: 'Kaleidoscope Recovery',
      description: 'Specialized template for recovery and wellness websites',
      category: 'Healthcare',
      preview: 'https://url1234.com/kaleidoscope',
      features: ['Recovery-focused', 'Multi-section', 'Professional', 'Call-to-Action'],
      status: 'active'
    },
    {
      id: 'book-reader',
      name: 'Interactive Book Reader',
      description: 'Book reading experience with navigation and interactive elements',
      category: 'Education',
      preview: 'https://url1234.com/bunny-garden',
      features: ['Chapter Navigation', 'Reading Progress', 'Interactive Elements', 'Responsive Design'],
      status: 'active'
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
    loadSubdomains()

    const darkMode = localStorage.getItem('darkMode')
    if (darkMode === 'true') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }

    const savedToken = localStorage.getItem('vercelToken')
    if (savedToken) {
      setVercelToken(savedToken)
    }
  }, [])

  const loadSubdomains = async (showLoading = false) => {
    if (showLoading) setIsRefreshing(true)
    try {
      const response = await fetch('/api/subdomains')
      if (response.ok) {
        const data = await response.json()
        setSubdomains(data)
      }
    } catch (error) {
      console.error('Failed to load subdomains:', error)
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

  const handleCreateSubdomain = async () => {
    if (!selectedTemplate || !newSubdomainName) return

    setIsCreating(true)

    try {
      const response = await fetch('/api/subdomains', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subdomain: newSubdomainName,
          templateId: selectedTemplate.id,
          configuration: {
            title: `${selectedTemplate.name} - ${formatSubdomainTitle(newSubdomainName)}`,
            subtitle: 'Created with Subdomain Manager',
            description: `A ${selectedTemplate.name.toLowerCase()} created using the subdomain manager`,
            companyName: 'Your Company'
          },
          vercelToken: vercelToken || undefined
        })
      })

      if (response.ok) {
        const result = await response.json()
        await loadSubdomains()
        setNewSubdomainName('')
        setSelectedTemplate(null)

        // Show success message with URL
        alert(`Subdomain created successfully! Visit: ${result.url}`)
      } else {
        const error = await response.json()
        alert(`Failed to create subdomain: ${error.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error creating subdomain:', error)
      alert('An error occurred while creating the subdomain.')
    } finally {
      setIsCreating(false)
    }
  }

  const handleDeleteSubdomain = async (subdomain: string) => {
    if (!confirm(`Are you sure you want to delete "${subdomain}.url1234.com"? This action cannot be undone.`)) {
      return
    }

    try {
      const response = await fetch(`/api/subdomains/${subdomain}?vercelToken=${vercelToken}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        await loadSubdomains()
        alert('Subdomain deleted successfully!')
      } else {
        const errorData = await response.json().catch(() => ({}))
        alert(`Failed to delete subdomain: ${errorData.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error deleting subdomain:', error)
      alert('An error occurred while deleting the subdomain.')
    }
  }

  const copyCodeSnippet = () => {
    const code = `// Access your subdomain at: https://${newSubdomainName || 'your-subdomain'}.url1234.com
// Template: ${selectedTemplate?.name || 'Selected Template'}

const config = {
  subdomain: "${newSubdomainName || 'your-subdomain'}",
  templateId: "${selectedTemplate?.id || 'template-id'}",
  configuration: {
    title: "Your Title",
    subtitle: "Your Subtitle",
    description: "Your Description"
  }
}`
    navigator.clipboard.writeText(code)
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  const handleSaveSettings = () => {
    localStorage.setItem('subdomainManagerSettings', JSON.stringify(settings))
    if (vercelToken) {
      localStorage.setItem('vercelToken', vercelToken)
    }
    setSettingsSaved(true)
    setTimeout(() => setSettingsSaved(false), 2000)
  }

  const handleSettingChange = (field: string, value: string) => {
    setSettings(prev => ({ ...prev, [field]: value }))
  }

  const formatSubdomainTitle = (subdomain: string): string => {
    return subdomain
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const filteredSubdomains = subdomains.filter(subdomain =>
    subdomain.subdomain.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subdomain.configuration.title?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const navigationItems = [
    { id: 'templates', label: 'Templates', icon: Layout, count: templates.length },
    { id: 'subdomains', label: 'Subdomains', icon: Server, count: subdomains.length },
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
              <Server className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Subdomain Manager
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
                  {activeTab === 'subdomains' && 'Subdomains'}
                  {activeTab === 'settings' && 'Settings'}
                </h1>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {activeTab === 'templates' && 'Choose templates to create new subdomains'}
                  {activeTab === 'subdomains' && 'Manage your active subdomains'}
                  {activeTab === 'settings' && 'Configure your subdomain manager'}
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

              {/* Subdomain Creation Panel */}
              <div className="space-y-6">
                <Card className={`p-6 space-y-6 ${isDarkMode ? 'bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border-indigo-700/50' : 'bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200'}`}>
                  <div>
                    <h2 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Create New Subdomain</h2>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Configure your new subdomain project</p>
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
                        <label className={`block text-sm font-semibold mb-3 ${isDarkMode ? 'text-indigo-200' : 'text-indigo-800'}`}>Subdomain Name</label>
                        <div className="flex items-center space-x-0">
                          <input
                            type="text"
                            value={newSubdomainName}
                            onChange={(e) => {
                              // Convert to lowercase and remove invalid characters
                              const value = e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '')
                              setNewSubdomainName(value)
                            }}
                            placeholder="my-subdomain"
                            className={`flex-1 px-4 py-3 border rounded-l-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                          />
                          <span className={`px-3 py-3 text-sm rounded-r-xl border border-l-0 ${isDarkMode ? 'bg-gray-700 text-gray-300 border-gray-600' : 'bg-white text-gray-500 border-gray-300'}`}>
                            .url1234.com
                          </span>
                        </div>
                        {newSubdomainName && (
                          <p className={`text-sm mt-2 ${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                            Will be available at: <strong>https://{newSubdomainName}.url1234.com</strong>
                          </p>
                        )}
                      </div>

                      <div className="space-y-3">
                        <button
                          onClick={handleCreateSubdomain}
                          disabled={!newSubdomainName || isCreating}
                          className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        >
                          {isCreating ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Creating Subdomain...
                            </>
                          ) : (
                            <>
                              <Plus className="w-5 h-5" />
                              Create Subdomain
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
                              Copy Configuration
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

          {/* Subdomains Tab */}
          {activeTab === 'subdomains' && (
            <div className="space-y-6">
              {/* Subdomains Header with Search and Refresh */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Active Subdomains
                  </h2>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {filteredSubdomains.length} subdomain{filteredSubdomains.length !== 1 ? 's' : ''} deployed
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <input
                      type="text"
                      placeholder="Search subdomains..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className={`pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'}`}
                    />
                  </div>
                  <button
                    onClick={() => loadSubdomains(true)}
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
              </div>

              {filteredSubdomains.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSubdomains.map((subdomain) => (
                    <Card key={subdomain.subdomain} className={`p-6 hover:shadow-lg transition-shadow duration-200 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-gradient-to-r from-blue-800 to-indigo-800' : 'bg-gradient-to-r from-blue-100 to-indigo-100'}`}>
                            <Globe className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{subdomain.subdomain}</h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {templates.find(t => t.id === subdomain.templateId)?.name || subdomain.templateId}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {subdomain.status === 'active' && (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          )}
                          {subdomain.status === 'maintenance' && (
                            <Clock className="w-5 h-5 text-yellow-500" />
                          )}
                          {subdomain.status === 'inactive' && (
                            <AlertCircle className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          https://{subdomain.subdomain}.url1234.com
                        </p>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>
                          {subdomain.configuration.title || 'No title set'}
                        </p>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                          Created: {new Date(subdomain.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-sm"
                          onClick={() => window.open(`https://${subdomain.subdomain}.url1234.com`, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit
                        </button>
                        <button
                          onClick={() => {
                            const template = templates.find(t => t.id === subdomain.templateId)
                            if (template) {
                              setSelectedTemplate(template)
                              setNewSubdomainName(`${subdomain.subdomain}-v2`)
                              setActiveTab('templates')
                            }
                          }}
                          className={`px-3 py-2 border font-medium rounded-lg transition-colors flex items-center justify-center ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteSubdomain(subdomain.subdomain)}
                          className="px-3 py-2 border border-red-300 text-red-600 font-medium rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className={`p-16 text-center ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${isDarkMode ? 'bg-gradient-to-r from-gray-700 to-gray-600' : 'bg-gradient-to-r from-gray-100 to-gray-200'}`}>
                    <Server className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {searchTerm ? 'No subdomains found' : 'No subdomains deployed yet'}
                  </h3>
                  <p className={`text-base mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {searchTerm
                      ? `No subdomains match "${searchTerm}"`
                      : 'Create your first subdomain from the Templates section'
                    }
                  </p>
                  {!searchTerm && (
                    <button
                      onClick={() => setActiveTab('templates')}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-3 mx-auto"
                    >
                      <ArrowRight className="w-5 h-5" />
                      Get Started with Templates
                    </button>
                  )}
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
                  Subdomain Configuration
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
                    <label className={`block text-base font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Base Domain</label>
                    <input
                      type="text"
                      value={settings.baseDomain}
                      onChange={(e) => handleSettingChange('baseDomain', e.target.value)}
                      className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    />
                  </div>
                </div>
              </Card>

              <Card className={`p-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <h3 className={`font-bold text-xl mb-6 flex items-center gap-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  <Settings className="w-6 h-6" />
                  Vercel Integration
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className={`block text-base font-semibold mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Vercel API Token (Optional)
                    </label>
                    <input
                      type="password"
                      value={vercelToken}
                      onChange={(e) => setVercelToken(e.target.value)}
                      placeholder="Enter your Vercel API token for automatic DNS management"
                      className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-base ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                    />
                    <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      This token allows automatic DNS record creation. Get it from your{' '}
                      <a href="https://vercel.com/account/tokens" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                        Vercel dashboard
                      </a>.
                    </p>
                  </div>
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