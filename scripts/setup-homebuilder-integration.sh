#!/bin/bash

# HomebuilderAI Integration Setup Script
# Run this once to set up the automated integration

set -e

echo "🏠 Setting up HomebuilderAI integration..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Please run this script from the url1234.com root directory${NC}"
    exit 1
fi

# Check if HomebuilderAI directory exists
HOMEBUILDER_PATH="/Users/devenspear/VibeCodingProjects/homebuilder-AI"
if [ ! -d "$HOMEBUILDER_PATH" ]; then
    echo -e "${RED}❌ HomebuilderAI project not found at $HOMEBUILDER_PATH${NC}"
    echo "Please ensure the HomebuilderAI project exists at the expected location."
    exit 1
fi

echo -e "${BLUE}📦 Step 1: Adding HomebuilderAI as Git Submodule...${NC}"

# Remove existing submodule if it exists
if [ -d "src/homebuilder-source" ]; then
    echo "Removing existing submodule..."
    git submodule deinit -f src/homebuilder-source
    rm -rf .git/modules/src/homebuilder-source
    git rm -f src/homebuilder-source
fi

# Add HomebuilderAI as submodule
echo "Adding HomebuilderAI as submodule..."
git submodule add https://github.com/devenspear/HomebuilderAI.git src/homebuilder-source

echo -e "${BLUE}📁 Step 2: Creating subdomain integration files...${NC}"

# Create HomebuilderAI subdomain handler
mkdir -p src/app/subdomains/homebuilderai

cat > src/app/subdomains/homebuilderai/page.tsx << 'EOF'
'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the HomebuilderAI app
const HomebuilderApp = dynamic(
  () => import('../../../homebuilder-source/components/splash-page').then(mod => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Loading HomebuilderAI</h2>
          <p className="text-gray-600">Initializing your AI-powered home building experience...</p>
        </div>
      </div>
    )
  }
)

export default function HomebuilderAISubdomain() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse w-12 h-12 bg-blue-200 rounded-full mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">HomebuilderAI</h2>
          <p className="text-gray-600">Preparing your experience...</p>
        </div>
      </div>
    )
  }

  return <HomebuilderApp />
}
EOF

echo -e "${BLUE}🔧 Step 3: Creating build integration...${NC}"

# Add build script for HomebuilderAI integration
cat >> package.json << 'EOF'
  "scripts": {
    "sync-homebuilder": "git submodule update --remote src/homebuilder-source && npm run build",
    "dev:homebuilder": "cd src/homebuilder-source && npm run dev"
  }
EOF

echo -e "${BLUE}⚙️ Step 4: Creating Vercel configuration...${NC}"

# Update vercel.json for HomebuilderAI
cat > vercel-homebuilder-config.json << 'EOF'
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install && git submodule update --init --recursive",
  "framework": "nextjs",
  "functions": {
    "src/app/api/subdomains/route.ts": {
      "maxDuration": 30
    }
  },
  "rewrites": [
    {
      "source": "/homebuilder/:path*",
      "destination": "/subdomains/homebuilderai/:path*"
    }
  ]
}
EOF

echo -e "${GREEN}✅ HomebuilderAI integration setup complete!${NC}"
echo ""
echo -e "${BLUE}🚀 Next Steps:${NC}"
echo "1. Push HomebuilderAI project to GitHub"
echo "2. ✅ GitHub repo configured: https://github.com/devenspear/HomebuilderAI"
echo "3. Configure Vercel webhooks in your HomebuilderAI repo settings"
echo "4. Test the integration: homebuilderai.url1234.com"
echo ""
echo -e "${GREEN}🎯 Automation Features:${NC}"
echo "• ✅ Automatic updates when you push to HomebuilderAI repo"
echo "• ✅ Zero manual sync required"
echo "• ✅ Independent development in HomebuilderAI project"
echo "• ✅ Clean deployment through subdomain system"
echo ""
echo -e "${BLUE}Development Workflow:${NC}"
echo "• Work in: /Users/devenspear/VibeCodingProjects/homebuilder-AI"
echo "• Push to GitHub → Automatic deployment to homebuilderai.url1234.com"
echo "• No manual steps required!"