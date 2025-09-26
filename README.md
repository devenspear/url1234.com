# URL1234 Multi-Tenant Template & Subdomain Manager

A sophisticated multi-tenant system for managing both template-based landing pages and subdomain integrations with automated CI/CD workflows.

## Project Overview

**Live Site**: https://url1234.com
**Admin Interface**: https://url1234.com/admin (subdomain management) + https://url1234.com/templates (page templates)
**Local Development**: http://localhost:3002

## What This Project Does

### 🎯 **Core Capabilities**
1. **Template Manager UI** - Visual interface for creating landing pages from templates
2. **Subdomain Architecture** - Multi-tenant subdomains with case-insensitive routing
3. **Git Submodule Integration** - Seamlessly integrate external projects as subdomains
4. **Automated CI/CD** - GitHub Actions workflows for automatic deployments
5. **Real File Generation** - Creates actual Next.js page files, not simulations
6. **Vercel Integration** - Wildcard domain configuration with SSL certificates
7. **Local Development** - Edit generated pages with Claude Code or any IDE

### 🌐 **Subdomain System**
- **homebuilderai.url1234.com** - HomebuilderAI Interactive Demo (Git submodule)
- **bunny-garden.url1234.com** - Interactive Book Template
- **kaleidoscope.url1234.com** - Recovery Center Template
- **[custom].url1234.com** - Add new subdomains via admin interface

## Architecture

### 📄 **Template System Architecture**
```
Template Manager → Generate Files → Git Commit → GitHub → Vercel → Live Site
                ↓
        Local Development ← Git Pull ← Edit with IDE/Claude Code
```

### 🌐 **Subdomain Architecture**
```
Subdomain Request (homebuilderai.url1234.com)
           ↓
    Next.js Middleware (subdomain detection)
           ↓
    Dynamic Route (/subdomains/[subdomain]/page.tsx)
           ↓
    Git Submodule Integration (src/homebuilder-source/)
           ↓
    Component Rendering (splash page, dashboard, etc.)
```

### 🔄 **CI/CD Automation**
```
HomebuilderAI Project Push → GitHub Actions (15min schedule)
           ↓
    Update Git Submodule → Build Test → Auto Commit
           ↓
    Vercel Auto Deploy → Live Subdomain Update
```

---

## 🚀 SUBDOMAIN INTEGRATION SYSTEM

### Overview
The url1234.com project now supports multi-tenant subdomain architecture with automated CI/CD integration. Each subdomain can be a standalone project integrated via Git submodules or a template-based page.

### Current Subdomains
| Subdomain | Type | Source | Status |
|-----------|------|--------|--------|
| homebuilderai.url1234.com | Git Submodule | [HomebuilderAI](https://github.com/devenspear/HomebuilderAI) | ✅ Active |
| bunny-garden.url1234.com | Template | Local template | ✅ Active |
| kaleidoscope.url1234.com | Template | Local template | ✅ Active |

---

## 📋 ADDING NEW SUBDOMAINS - STEP BY STEP WORKFLOW

### Method 1: Git Submodule Integration (For External Projects)

#### Step 1: Prepare External Project
```bash
# Ensure your external project is pushed to GitHub
cd /path/to/your-project
git add .
git commit -m "Prepare for subdomain integration"
git push origin main
```

#### Step 2: Add Git Submodule
```bash
cd /Users/devenspear/VibeCodingProjects/url1234.com
git submodule add https://github.com/username/project-repo.git src/[project-name]-source
git submodule update --init --recursive
```

#### Step 3: Create Subdomain Route Structure
```bash
mkdir -p src/app/subdomains/[subdomain-name]
mkdir -p src/app/subdomains/[subdomain-name]/dashboard
```

#### Step 4: Create Subdomain Page Component
```tsx
// src/app/subdomains/[subdomain-name]/page.tsx
'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const ProjectSplashPage = dynamic(
  () => import('../../../[project-name]-source/components/splash-page'),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Loading [Project Name]</h2>
          <p className="text-gray-600">Preparing your experience...</p>
        </div>
      </div>
    )
  }
)

export default function ProjectSubdomain() {
  const [showApp, setShowApp] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    document.title = '[Project Name] - Description'
  }, [])

  const handleEnterApp = () => {
    setShowApp(true)
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse w-16 h-16 bg-blue-200 rounded-full mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">[Project Name]</h2>
          <p className="text-gray-600">Initializing...</p>
        </div>
      </div>
    )
  }

  if (!showApp) {
    return <ProjectSplashPage onEnter={handleEnterApp} />
  }

  if (typeof window !== 'undefined') {
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to [Project Name]
        </h1>
        <button
          onClick={() => window.location.href = '/dashboard'}
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
        >
          <span>🚀 Enter Dashboard</span>
        </button>
      </div>
    </div>
  )
}
```

#### Step 5: Create Layout with Metadata
```tsx
// src/app/subdomains/[subdomain-name]/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[Project Name] - Description',
  description: '[Project description for SEO]',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: '[Author Name]' }],
  robots: 'index, follow',
  openGraph: {
    title: '[Project Name]',
    description: '[Project description]',
    type: 'website',
    url: 'https://[subdomain].url1234.com',
  },
}

export const viewport = 'width=device-width, initial-scale=1'

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
```

#### Step 6: Create Dashboard Route (if needed)
```tsx
// src/app/subdomains/[subdomain-name]/dashboard/page.tsx
'use client'

export default function ProjectDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            [Project Name] Dashboard
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Coming Soon: Your complete dashboard
          </p>
          <a
            href="https://github.com/username/project-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>View GitHub Repository</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
```

#### Step 7: Update Subdomain API Configuration
```tsx
// Add to src/app/api/subdomains/route.ts
const mockSubdomains = [
  // ... existing subdomains
  {
    id: '[subdomain-name]',
    name: '[Subdomain Name]',
    template: 'external-project',
    domain: '[subdomain-name].url1234.com',
    config: {
      title: '[Project Name]',
      description: '[Project description]',
      primaryColor: '#3B82F6',
      github_repo: 'https://github.com/username/project-repo'
    },
    createdAt: new Date().toISOString(),
    status: 'active'
  }
]
```

#### Step 8: Create GitHub Actions Workflow (if automated sync needed)
```yaml
# .github/workflows/sync-[project-name].yml
name: Sync [Project Name] Updates

on:
  repository_dispatch:
    types: [project-updated]
  workflow_dispatch:
  schedule:
    - cron: '*/15 * * * *'

jobs:
  sync-project:
    runs-on: ubuntu-latest
    if: github.repository_owner == 'deven-projects'

    steps:
      - name: Checkout url1234.com
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          submodules: recursive

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Update [Project Name] Submodule
        run: |
          git submodule update --remote src/[project-name]-source

      - name: Check for Changes
        id: changes
        run: |
          git diff --quiet HEAD^ || echo "changes=true" >> $GITHUB_OUTPUT

      - name: Install Dependencies
        if: steps.changes.outputs.changes == 'true'
        run: npm ci

      - name: Build Project
        if: steps.changes.outputs.changes == 'true'
        run: npm run build

      - name: Commit Updates
        if: steps.changes.outputs.changes == 'true'
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action Bot"
          git add .
          git commit -m "🤖 Auto-sync [Project Name] updates [skip ci]" || exit 0
          git push

      - name: Trigger Vercel Deployment
        if: steps.changes.outputs.changes == 'true'
        run: |
          echo "✅ [Project Name] changes detected and pushed"
          echo "🚀 Vercel will automatically redeploy [subdomain].url1234.com"
```

#### Step 9: Configure Vercel Domain
```bash
# Add the subdomain to Vercel
npx vercel domains add [subdomain].url1234.com --scope=deven-projects
```

#### Step 10: Commit and Deploy
```bash
git add .
git commit -m "Add [Project Name] subdomain integration with automated sync

- Git submodule integration at src/[project-name]-source
- Subdomain route at /subdomains/[subdomain-name]
- Automated CI/CD via GitHub Actions
- Proper metadata and SEO configuration
- Dashboard placeholder ready for real components

🤖 Generated with [Claude Code](https://claude.ai/code)"

git push origin main
```

### Method 2: Template-Based Subdomain (For Simple Pages)

#### Step 1: Create Subdomain Route Structure
```bash
mkdir -p src/app/subdomains/[subdomain-name]
```

#### Step 2: Create Template-Based Page
```tsx
// src/app/subdomains/[subdomain-name]/page.tsx
export default function TemplateSubdomain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            [Subdomain Name]
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            [Description of this subdomain]
          </p>
          {/* Add your template content here */}
        </div>
      </div>
    </div>
  )
}
```

#### Step 3: Add Layout and Commit
Follow steps 5 and 10 from Method 1.

---

## Current Features (Phase 1, 2 & 3 - COMPLETE)

### ✅ **Subdomain System (NEW)**
- **Multi-Tenant Architecture** - Unlimited subdomains with individual routing
- **Git Submodule Integration** - External projects as subdomains
- **Case-Insensitive URLs** - homebuilderai.url1234.com = HomeBuilderAI.url1234.com
- **Automated CI/CD** - GitHub Actions sync external project updates every 15 minutes
- **Wildcard SSL** - Automatic HTTPS for all subdomains
- **Proper SEO** - Individual metadata and page titles per subdomain
- **Admin Interface** - Manage subdomains via /admin dashboard

### ✅ Core Template System
- **6 Pre-built Templates**: Hero Landing, Simple Landing, Complex Landing, Real Estate, SaaS Product, Portfolio
- **Real File Generation**: Creates `src/app/[pagename]/page.tsx` + `metadata.json`
- **Template Configuration**: Title, subtitle, description, company name
- **Clean Code Output**: Maintainable Next.js components with proper imports

### ✅ Page Management
- **Create Pages**: Via Template Manager UI at `/templates`
- **List Pages**: File system-based page listing (not localStorage)
- **Delete Pages**: Remove pages and auto-commit deletion
- **Edit Pages**: Full local development workflow

### ✅ Validation & Safety
- **Lowercase Enforcement**: Page names must be lowercase only
- **Duplicate Prevention**: Cannot create pages that already exist
- **Input Sanitization**: Only allows letters, numbers, and dashes
- **Development-Only Creation**: File operations only work locally

### ✅ Git & Deployment
- **Auto-Commit**: Descriptive commit messages for each page
- **Auto-Push**: Changes go to GitHub immediately
- **Auto-Deploy**: Vercel deploys from GitHub automatically
- **Version Control**: Full git history of all changes

### ✅ User Interface
- **Apple-Style Design**: Modern gradients and smooth animations
- **Dark Mode**: Full dark theme with toggle
- **Responsive**: Works on desktop and mobile
- **Futuristic Homepage**: Black background with gradient "Hello World"

### ✅ Development Workflow
- **Local Server**: `npm run dev` on port 3002
- **Instant Preview**: See changes immediately at `localhost:3002/[pagename]`
- **IDE Integration**: Edit in VS Code, WebStorm, or Claude Code
- **Hot Reload**: Changes appear instantly during development

### ✅ Error Prevention & Debugging
- **404 Protection**: Dynamic route excludes system pages
- **Debug Endpoint**: `/debug` provides route analysis
- **Route Conflict Prevention**: System pages protected from dynamic routing
- **Comprehensive Validation**: Input sanitization and duplicate checking

## File Structure

```
url1234.com/
├── src/
│   ├── app/
│   │   ├── page.tsx                           # Homepage (black gradient "Hello World")
│   │   ├── admin/page.tsx                     # Subdomain Management Dashboard
│   │   ├── templates/page.tsx                 # Template Manager UI
│   │   ├── subdomains/                        # Subdomain Architecture
│   │   │   ├── [subdomain]/                   # Dynamic subdomain routing
│   │   │   │   ├── page.tsx                   # Main subdomain page
│   │   │   │   ├── layout.tsx                 # Subdomain-specific metadata
│   │   │   │   ├── dashboard/page.tsx         # Subdomain dashboard (optional)
│   │   │   │   └── [...path]/page.tsx         # Nested subdomain routes
│   │   │   ├── homebuilderai/                 # HomebuilderAI Subdomain
│   │   │   │   ├── page.tsx                   # Splash page integration
│   │   │   │   ├── layout.tsx                 # Metadata configuration
│   │   │   │   └── dashboard/page.tsx         # Dashboard placeholder
│   │   │   ├── bunny-garden/                  # Bunny Garden Subdomain
│   │   │   └── kaleidoscope/                  # Kaleidoscope Subdomain
│   │   ├── p/[slug]/page.tsx                  # Dynamic route for generated pages
│   │   ├── p/[generated-page-name]/           # Generated page directories
│   │   │   ├── page.tsx                       # Page component
│   │   │   └── metadata.json                  # Creation metadata
│   │   ├── api/
│   │   │   ├── templates/create/              # Page creation API
│   │   │   ├── pages/list/                    # Page listing API
│   │   │   ├── pages/delete/                  # Page deletion API
│   │   │   ├── subdomains/                    # Subdomain management API
│   │   │   │   ├── route.ts                   # List/create subdomains
│   │   │   │   └── [subdomain]/route.ts       # Individual subdomain ops
│   │   │   └── debug/                         # Route debugging API
│   │   └── middleware.ts                      # Subdomain detection & routing
│   ├── components/
│   │   ├── template/                          # Template components
│   │   │   ├── LandingPageTemplate.tsx
│   │   │   └── sections/                      # Reusable sections
│   │   └── subdomain/                         # Subdomain components
│   │       └── SubdomainRenderer.tsx          # Dynamic subdomain renderer
│   └── homebuilder-source/                    # Git Submodule (HomebuilderAI)
│       ├── app/                               # HomebuilderAI Next.js app
│       ├── components/                        # HomebuilderAI components
│       └── [external project structure]
├── .github/workflows/
│   ├── sync-homebuilder.yml                   # HomebuilderAI sync workflow
│   └── [additional sync workflows]
├── scripts/
│   ├── setup-homebuilder-integration.sh       # Integration setup script
│   └── configure-webhooks.sh                  # Webhook configuration
├── README.md                                  # This comprehensive guide
├── HOMEBUILDER_INTEGRATION.md                 # HomebuilderAI integration docs
├── next.config.js                             # Next.js config (TypeScript/ESLint ignore)
├── .eslintignore                              # ESLint ignore for submodules
└── package.json
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Access locally
http://localhost:3002/templates      # Template Manager
http://localhost:3002/p/[page-name] # Generated pages
http://localhost:3002/debug         # Route debugging
```

## Creating Pages Workflow

1. **Create**: Visit `http://localhost:3002/templates`
2. **Select Template**: Choose from 6 available templates
3. **Configure**: Set page name, title, subtitle, description
4. **Generate**: Page files created automatically
5. **Auto-Deploy**: Committed to git and deployed to Vercel
6. **Edit Locally**: `git pull` and edit with your preferred IDE
7. **Deploy Changes**: `git push` to deploy updates

## API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/templates/create` | POST | Create new pages |
| `/api/pages/list` | GET | List all generated pages |
| `/api/pages/delete?page=name` | DELETE | Delete specific page |
| `/debug` | GET | Debug routing issues |

## Template Types Available

1. **Hero Landing** - Full-featured with hero, features, testimonials, CTA
2. **Simple Landing** - Minimal with hero and CTA only  
3. **Complex Landing** - Advanced with video, animations, multiple sections
4. **Real Estate Showcase** - Property focused with video backgrounds
5. **SaaS Product** - Software product with pricing and features
6. **Portfolio Showcase** - Creative portfolio with project galleries

## Error Prevention & Debugging

### 404 Error Protection
- **Route Separation**: Dynamic routes moved to `/p/[slug]` to prevent conflicts with static routes  
- **Debug Endpoint**: `/debug` provides route analysis and troubleshooting
- **Validation**: Comprehensive input validation prevents invalid pages

### Common Issues & Solutions

**Problem**: Templates page shows 404  
**Solution**: ✅ RESOLVED - Dynamic routes moved to `/p/[slug]` to prevent conflicts

**Problem**: Page creation fails  
**Solution**: Must run locally (development mode), not on Vercel

**Problem**: Uppercase page names  
**Solution**: System enforces lowercase only

**Problem**: Duplicate pages  
**Solution**: System prevents creating existing pages

## Technical Stack

- **Framework**: Next.js 15 with App Router
- **UI**: Shadcn/UI + Tailwind CSS
- **Animation**: Framer Motion
- **Deployment**: Vercel
- **Version Control**: GitHub
- **Development**: Local file system + git integration

---

## Phase 3: Future Development (Planned Features)

*The following features are identified for future development but not currently implemented:*

### 🎨 Enhanced Template System
- **Custom Template Creation**: Build templates visually
- **Advanced Configuration**: Colors, fonts, layouts via UI
- **Template Marketplace**: Share and import community templates
- **Component Library**: Drag-and-drop section builder

### 🖼️ Content Management
- **Image Upload System**: Upload and manage images/logos
- **Rich Text Editor**: In-browser content editing
- **Media Library**: Centralized asset management
- **Dynamic Content**: Database-driven content

### 📱 Enhanced User Experience
- **In-Browser Preview**: Preview changes without local server
- **Mobile Editor**: Touch-friendly mobile interface
- **Keyboard Shortcuts**: Power user shortcuts
- **Undo/Redo System**: Change history management

### 🔧 Developer Tools
- **Template Hot Reload**: Update templates without restart
- **Code Export**: Export pages as standalone projects
- **Custom CSS Injection**: Add custom styles per page
- **Component Inspector**: Debug template structure

### 📊 Analytics & Optimization
- **Page Performance**: Load time tracking
- **SEO Tools**: Meta tag management
- **A/B Testing**: Template variations
- **Usage Analytics**: Creation and usage stats

### 🚀 Advanced Deployment
- **Multi-Environment**: Dev, staging, production
- **Branch Deployment**: Feature branch previews
- **CDN Integration**: Optimized asset delivery
- **Custom Domains**: Page-specific domains

### 🔒 Enterprise Features
- **User Management**: Multi-user support (if needed)
- **Role-Based Access**: Admin/editor permissions
- **Audit Logs**: Change tracking
- **Backup System**: Automated backups

### 🔌 Integrations
- **CMS Integration**: Contentful, Sanity, etc.
- **Analytics**: Google Analytics, Mixpanel
- **Email Marketing**: Mailchimp, ConvertKit
- **E-commerce**: Stripe, Shopify integration

## Current Status: PRODUCTION READY ✅

The template manager is fully functional and production-ready for single-user workflows. All core features are implemented and tested. The system successfully generates real pages, integrates with git, and deploys to production.

### Recent Updates (September 2025)
- ✅ **MAJOR FIX**: Resolved persistent 404 errors on `/templates` page
- ✅ **Route Restructure**: Moved dynamic routes to `/p/[slug]` to prevent conflicts with static routes
- ✅ **URL Updates**: Generated pages now accessible at `url1234.com/p/[pagename]` instead of `url1234.com/[pagename]`
- ✅ **API Updates**: All APIs updated to work with new routing structure
- ✅ **Error Prevention**: Comprehensive routing conflict prevention implemented

**Last Updated**: September 2025  
**Version**: 2.1 (Routing Issues Resolved)  
**Next Session**: Use this README to quickly understand project status and continue development.