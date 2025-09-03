# URL1234 Template Manager

A sophisticated template management system for rapidly creating and deploying landing pages with full local development integration.

## Project Overview

**Live Site**: https://url1234.com  
**Admin Interface**: https://url1234.com/templates  
**Local Development**: http://localhost:3002  

## What This Project Does

1. **Template Manager UI** - Visual interface for creating landing pages from templates
2. **Real File Generation** - Creates actual Next.js page files, not simulations
3. **Git Integration** - Auto-commits and pushes new pages to GitHub
4. **Auto-Deployment** - Vercel deploys changes automatically
5. **Local Development** - Edit generated pages with Claude Code or any IDE

## Architecture

```
Template Manager → Generate Files → Git Commit → GitHub → Vercel → Live Site
                ↓
        Local Development ← Git Pull ← Edit with IDE/Claude Code
```

## Current Features (Phase 1 & 2 - COMPLETE)

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
url1234-templates/
├── src/app/
│   ├── page.tsx                    # Homepage (black gradient "Hello World")
│   ├── templates/page.tsx          # Template Manager UI
│   ├── [slug]/page.tsx            # Dynamic route for generated pages
│   ├── api/templates/create/       # Page creation API
│   ├── api/pages/list/            # Page listing API  
│   ├── api/pages/delete/          # Page deletion API
│   ├── debug/                     # Route debugging API
│   ├── [generated-page-name]/     # Generated page directories
│   │   ├── page.tsx               # Page component
│   │   └── metadata.json          # Creation metadata
├── src/components/template/        # Template components
│   ├── LandingPageTemplate.tsx
│   └── sections/                  # Reusable sections
├── README.md                      # This file
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
http://localhost:3002/[page-name]   # Generated pages
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
- **Route Exclusion**: Dynamic route excludes system pages (`templates`, `api`, `admin`)
- **Debug Endpoint**: `/debug` provides route analysis and troubleshooting
- **Validation**: Comprehensive input validation prevents invalid pages

### Common Issues & Solutions

**Problem**: Templates page shows 404  
**Solution**: Check `/debug` endpoint, ensure `templates/page.tsx` exists

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

**Last Updated**: September 2025  
**Version**: 2.0 (Production Ready)  
**Next Session**: Use this README to quickly understand project status and continue development.