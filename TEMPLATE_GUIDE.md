# Next-Shad-Starter 2.0 - Landing Page Template System

A modular, reusable landing page template system built with Next.js 15, Shadcn/UI, and Tailwind CSS.

## Quick Start

### Method 1: Use the Generator Script
```bash
node scripts/create-landing-page.js
```
Follow the prompts to generate a new landing page with your custom content.

### Method 2: Manual Creation
1. Copy an existing template:
```bash
cp -r src/app/template-example src/app/your-page-name
```

2. Edit the page.tsx file with your content

3. Run the development server:
```bash
npm run dev
```

## Available Components

### Core Sections
All components are located in `src/components/template/sections/`

#### HeroSection
The main hero/header section of your landing page.
```tsx
<HeroSection
  title="Your Title"
  subtitle="Optional Subtitle"
  description="Your description text"
  primaryCTA={{ text: "Get Started", onClick: handleClick }}
  secondaryCTA={{ text: "Learn More", onClick: handleClick }}
  backgroundImage="/path/to/image.jpg"
  backgroundVideo="/path/to/video.mp4"
  overlay={true}
  height="full" // "full" | "large" | "medium"
  alignment="center" // "left" | "center" | "right"
/>
```

#### FeaturesSection
Display features or services in a grid layout.
```tsx
<FeaturesSection
  title="Features"
  subtitle="What We Offer"
  features={[
    {
      title: "Feature 1",
      description: "Description",
      icon: IconComponent, // Optional Lucide icon
      image: "/path/to/image.jpg" // Optional image
    }
  ]}
  columns={3} // 2 | 3 | 4
  variant="cards" // "cards" | "grid" | "list"
/>
```

#### TestimonialsSection
Show customer testimonials and reviews.
```tsx
<TestimonialsSection
  title="What Our Customers Say"
  subtitle="Trusted by thousands"
  testimonials={[
    {
      name: "John Doe",
      role: "CEO",
      company: "Company Inc",
      content: "Testimonial text",
      avatar: "/path/to/avatar.jpg",
      rating: 5
    }
  ]}
  columns={3} // 1 | 2 | 3
  variant="cards" // "cards" | "carousel" | "masonry"
/>
```

#### CTASection
Call-to-action sections to drive conversions.
```tsx
<CTASection
  title="Ready to Get Started?"
  description="Join thousands of satisfied customers"
  primaryCTA={{ text: "Start Now", onClick: handleClick }}
  secondaryCTA={{ text: "Learn More", onClick: handleClick }}
  variant="centered" // "centered" | "split" | "gradient"
  backgroundImage="/path/to/image.jpg" // Optional
/>
```

#### FooterSection
Footer with company info and links.
```tsx
<FooterSection
  companyName="Your Company"
  tagline="Your tagline"
  columns={[
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" }
      ]
    }
  ]}
  socialLinks={[
    { platform: "Twitter", href: "https://twitter.com/..." }
  ]}
  backgroundColor="dark" // "dark" | "light" | "muted"
/>
```

## Example Templates

### 1. Template Example (`/template-example`)
Full-featured landing page showing all available components.

### 2. Simple Page (`/page-simple`)
Minimal landing page with essential sections only.

### 3. Complex Page (`/page-complex`)
Advanced landing page with multiple sections and interactions.

### 4. Alys Beach Clone (`/`)
Real estate landing page with video hero section.

### 5. Template Home (`/template-home`)
Documentation and navigation page for all templates.

## Creating a New Landing Page

### Step 1: Plan Your Sections
Decide which sections you need:
- Hero (usually required)
- Features
- Testimonials
- Call-to-Action
- Footer

### Step 2: Create the Page Structure
```tsx
'use client'

import { LandingPageTemplate } from '@/components/template/LandingPageTemplate'
import {
  HeroSection,
  FeaturesSection,
  // Import other sections as needed
} from '@/components/template/sections'

export default function YourLandingPage() {
  return (
    <LandingPageTemplate>
      {/* Add your sections here */}
    </LandingPageTemplate>
  )
}
```

### Step 3: Customize Content
Replace placeholder content with your actual data.

### Step 4: Style Customization
- Edit `src/app/globals.css` for global styles
- Use Tailwind classes for component-level styling
- Modify component props for behavior changes

## Best Practices

1. **Keep It Modular**: Use individual section components that can be reused
2. **Responsive Design**: All components are mobile-first and responsive
3. **Performance**: Use Next.js Image component for optimized images
4. **SEO**: Add metadata to your pages using Next.js metadata API
5. **Accessibility**: Components follow WCAG guidelines

## Adding Custom Sections

Create a new component in `src/components/template/sections/`:

```tsx
interface CustomSectionProps {
  // Define your props
}

export function CustomSection({ ...props }: CustomSectionProps) {
  return (
    <section className="py-20">
      {/* Your section content */}
    </section>
  )
}
```

## Deployment

This template is ready for deployment on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Customization Tips

### Colors
Edit the CSS variables in `src/app/globals.css` to match your brand colors.

### Fonts
Update the font imports in `src/app/layout.tsx`.

### Icons
We use Lucide React icons. Import any icon from `lucide-react`.

### Animations
Framer Motion is included. Add animations to any component:
```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## Hosted Example

The Kaleidoscope landing page template is hosted at: **url1234.com**

## Support

For questions or issues, please refer to the example pages or create an issue in the repository.

---

Built with ❤️ using Next.js, Shadcn/UI, and Tailwind CSS