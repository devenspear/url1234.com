export interface LabProjectSummary {
  slug: string
  title: string
  tagline: string
  description: string
  repoUrl: string
  liveUrl?: string
}

export const LAB_PROJECTS: LabProjectSummary[] = [
  {
    slug: 'bunny-garden',
    title: "Bunny's Garden",
    tagline: 'Interactive gratitude storybook for kids',
    description:
      'An immersive, animated picture book that blends watercolor art, ambient soundscapes, and playful interactions — best experienced on iPad or desktop.',
    repoUrl: 'https://github.com/devenspear/bunny-interactive-book',
    liveUrl: 'https://bunny-garden.url1234.com',
  },
  {
    slug: 'homebuilder-ai',
    title: 'HomebuilderAI',
    tagline: 'Sales enablement lab for new home construction',
    description:
      'A modular AI training environment with glossaries, playbooks, drip campaigns, and simulators tailored to the new-home sales process.',
    repoUrl: 'https://github.com/devenspear/HomebuilderAI',
    liveUrl: 'https://homebuilder-ai.url1234.com',
  },
]
