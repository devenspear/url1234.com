#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

const templateContent = `'use client'

import { LandingPageTemplate } from '@/components/template/LandingPageTemplate'
import {
  HeroSection,
  FeaturesSection,
  TestimonialsSection,
  CTASection,
  FooterSection
} from '@/components/template/sections'

export default function {{PAGE_NAME}}() {
  return (
    <LandingPageTemplate>
      <HeroSection
        title="{{HERO_TITLE}}"
        subtitle="{{HERO_SUBTITLE}}"
        description="{{HERO_DESCRIPTION}}"
        primaryCTA={{
          text: 'Get Started',
          onClick: () => console.log('Primary CTA clicked')
        }}
        height="full"
        alignment="center"
      />

      <FeaturesSection
        title="Features"
        subtitle="What We Offer"
        features={[
          {
            title: 'Feature 1',
            description: 'Description of feature 1'
          },
          {
            title: 'Feature 2',
            description: 'Description of feature 2'
          },
          {
            title: 'Feature 3',
            description: 'Description of feature 3'
          }
        ]}
        columns={3}
        variant="cards"
      />

      <CTASection
        title="Ready to Get Started?"
        description="Join us today and transform your business"
        primaryCTA={{
          text: 'Start Now',
          onClick: () => console.log('CTA clicked')
        }}
        variant="gradient"
      />

      <FooterSection
        companyName="{{COMPANY_NAME}}"
        tagline="Your tagline here"
        backgroundColor="dark"
      />
    </LandingPageTemplate>
  )
}
`;

async function createLandingPage() {
  console.log('\\n🚀 Landing Page Generator\\n');

  try {
    const pageName = await question('Enter page name (e.g., "my-landing"): ');
    const heroTitle = await question('Enter hero title: ');
    const heroSubtitle = await question('Enter hero subtitle (optional): ');
    const heroDescription = await question('Enter hero description: ');
    const companyName = await question('Enter company name: ');

    const componentName = pageName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Page';

    let content = templateContent
      .replace(/{{PAGE_NAME}}/g, componentName)
      .replace(/{{HERO_TITLE}}/g, heroTitle)
      .replace(/{{HERO_SUBTITLE}}/g, heroSubtitle)
      .replace(/{{HERO_DESCRIPTION}}/g, heroDescription)
      .replace(/{{COMPANY_NAME}}/g, companyName);

    const appDir = path.join(__dirname, '..', 'src', 'app');
    const pageDir = path.join(appDir, pageName);
    const pagePath = path.join(pageDir, 'page.tsx');

    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    fs.writeFileSync(pagePath, content);

    console.log(`\\n✅ Landing page created successfully!`);
    console.log(`📁 Location: src/app/${pageName}/page.tsx`);
    console.log(`🌐 URL: http://localhost:3000/${pageName}`);
    console.log(`\\n💡 Next steps:`);
    console.log(`   1. Run "npm run dev" to start the development server`);
    console.log(`   2. Visit http://localhost:3000/${pageName}`);
    console.log(`   3. Customize the components in the generated file`);

  } catch (error) {
    console.error('\\n❌ Error creating landing page:', error.message);
  } finally {
    rl.close();
  }
}

createLandingPage();