#!/bin/bash

# Configure Vercel Build Hooks and GitHub Webhooks for HomebuilderAI
# This script will help you set up the automated deployment pipeline

set -e

echo "🔗 Configuring HomebuilderAI → url1234.com Webhook Integration"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Step 1: Create Vercel Build Hook${NC}"
echo ""
echo "1. Go to: https://vercel.com/deven-projects/url1234-com/settings/git"
echo "2. Scroll to 'Deploy Hooks'"
echo "3. Click 'Create Hook'"
echo "4. Configure:"
echo "   - Hook Name: HomebuilderAI Auto Deploy"
echo "   - Git Branch: main (or your default branch)"
echo "5. Copy the webhook URL (it will look like: https://api.vercel.com/v1/integrations/deploy/prj_xxx/xxx)"
echo ""
read -p "Press Enter when you have the webhook URL ready..."

echo ""
echo -e "${YELLOW}Please paste your Vercel Build Hook URL:${NC}"
read -r VERCEL_HOOK_URL

if [[ ! "$VERCEL_HOOK_URL" =~ ^https://api\.vercel\.com/v1/integrations/deploy/.* ]]; then
    echo -e "${RED}❌ Invalid Vercel hook URL format${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Vercel hook URL saved${NC}"

echo ""
echo -e "${BLUE}📋 Step 2: Configure GitHub Webhook${NC}"
echo ""
echo -e "${YELLOW}Now we'll add the webhook to your HomebuilderAI repository:${NC}"
echo ""
echo "1. Go to: https://github.com/devenspear/HomebuilderAI/settings/hooks"
echo "2. Click 'Add webhook'"
echo "3. Configure:"
echo "   - Payload URL: $VERCEL_HOOK_URL"
echo "   - Content type: application/json"
echo "   - Which events: Just the push event"
echo "   - Active: ✅ checked"
echo "4. Click 'Add webhook'"
echo ""
read -p "Press Enter when you've configured the GitHub webhook..."

echo ""
echo -e "${BLUE}📋 Step 3: Test the Integration${NC}"
echo ""
echo "Let's create a simple test to verify everything works:"

# Create a test commit message template
cat > test-homebuilder-integration.md << EOF
# HomebuilderAI Integration Test

This file was created to test the automated integration between:
- HomebuilderAI repository: https://github.com/devenspear/HomebuilderAI
- url1234.com subdomain: https://homebuilderai.url1234.com

## How it works:
1. Push code to HomebuilderAI repo
2. GitHub webhook triggers Vercel build hook
3. Vercel rebuilds url1234.com with latest HomebuilderAI content
4. homebuilderai.url1234.com updates automatically

## Test Instructions:
1. Add this file to your HomebuilderAI repo
2. Commit and push to GitHub
3. Check Vercel dashboard for automatic deployment
4. Verify homebuilderai.url1234.com updates

Created: $(date)
EOF

echo -e "${GREEN}✅ Test file created: test-homebuilder-integration.md${NC}"
echo ""
echo -e "${BLUE}To test the integration:${NC}"
echo "1. Copy test-homebuilder-integration.md to your HomebuilderAI project"
echo "2. Commit and push to GitHub"
echo "3. Watch Vercel dashboard for automatic deployment"
echo "4. Check homebuilderai.url1234.com for updates"

echo ""
echo -e "${GREEN}🎉 Integration Configuration Complete!${NC}"
echo ""
echo -e "${BLUE}📊 Summary:${NC}"
echo "• ✅ Vercel Build Hook configured"
echo "• ✅ GitHub Webhook configured"
echo "• ✅ Automatic deployment pipeline active"
echo ""
echo -e "${YELLOW}💡 Development Workflow:${NC}"
echo "1. Work in: /Users/devenspear/VibeCodingProjects/homebuilder-AI"
echo "2. Push to GitHub → Automatic deployment"
echo "3. No manual steps required!"
echo ""
echo -e "${GREEN}🌍 Live URL: https://homebuilderai.url1234.com${NC}"

# Save configuration for future reference
cat > .homebuilder-integration-config << EOF
# HomebuilderAI Integration Configuration
VERCEL_HOOK_URL=$VERCEL_HOOK_URL
GITHUB_REPO=https://github.com/devenspear/HomebuilderAI
SUBDOMAIN_URL=https://homebuilderai.url1234.com
CONFIGURED_DATE=$(date)
EOF

echo ""
echo -e "${BLUE}📝 Configuration saved to .homebuilder-integration-config${NC}"