import type { CSSProperties } from 'react'
import Link from 'next/link'
import { LAB_PROJECTS } from '@/lib/lab-projects'
import { LAB_ROOT_DOMAIN, LAB_ROOT_SUBDOMAIN_HINT } from '@/lib/config'

function Hero() {
  return (
    <header style={styles.hero}>
      <div style={styles.heroBadge}>URL1234 LAB</div>
      <h1 style={styles.heroTitle}>Curated AI-native experiences under one domain.</h1>
      <p style={styles.heroSubtitle}>
        Independent experiments designed, coded, and shipped as standalone Vercel projects — unified here so you can
        explore everything without leaving <strong>{LAB_ROOT_DOMAIN}</strong>.
      </p>
      <div style={styles.heroActions}>
        <Link href="/admin" style={styles.primaryButton}>
          Manage subdomains
        </Link>
        <a href="#projects" style={styles.secondaryButton}>
          Browse the lab
        </a>
      </div>
      <div style={styles.heroHint}>Wildcard DNS ready: {LAB_ROOT_SUBDOMAIN_HINT}</div>
    </header>
  )
}

function ProjectCard({ project }: { project: (typeof LAB_PROJECTS)[number] }) {
  return (
    <article style={styles.card}>
      <div style={styles.cardHeader}>
        <h2 style={styles.cardTitle}>{project.title}</h2>
        <span style={styles.cardTagline}>{project.tagline}</span>
      </div>
      <p style={styles.cardDescription}>{project.description}</p>
      <div style={styles.cardLinks}>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" style={styles.linkButton}>
            Visit experience ↗
          </a>
        )}
        <a href={project.repoUrl} target="_blank" rel="noreferrer" style={styles.linkGhost}>
          View repo ↗
        </a>
      </div>
    </article>
  )
}

export default function Home() {
  return (
    <main style={styles.main}>
      <Hero />
      <section id="projects" style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Active experiments</h2>
          <p style={styles.sectionSubtitle}>
            Each experiment deploys from its own GitHub repo and Vercel project. Attach any subdomain via the admin panel
            to surface new work instantly.
          </p>
        </div>
        <div style={styles.grid}>
          {LAB_PROJECTS.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}

const styles: Record<string, CSSProperties> = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4rem',
    padding: '4rem clamp(1.5rem, 4vw, 6rem) 6rem',
    margin: '0 auto',
    maxWidth: '1180px',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    padding: '3rem clamp(1.5rem, 4vw, 4rem)',
    borderRadius: '28px',
    background: 'linear-gradient(145deg, rgba(12,16,22,0.85), rgba(17,26,34,0.75))',
    border: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 30px 80px rgba(0,0,0,0.3)',
  },
  heroBadge: {
    alignSelf: 'flex-start',
    fontSize: '0.75rem',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    padding: '0.35rem 0.85rem',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.12)',
    color: 'rgba(255,255,255,0.7)',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
    lineHeight: 1.1,
    margin: 0,
  },
  heroSubtitle: {
    margin: 0,
    maxWidth: '60ch',
    color: 'var(--muted)',
    fontSize: '1.05rem',
    lineHeight: 1.6,
  },
  heroActions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '0.5rem',
  },
  primaryButton: {
    background: 'linear-gradient(135deg, #6cf0c2, #5881ff)',
    color: '#0c1016',
    padding: '0.85rem 1.6rem',
    borderRadius: '999px',
    fontWeight: 600,
    border: 'none',
  },
  secondaryButton: {
    padding: '0.85rem 1.6rem',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.16)',
    color: 'var(--fg)',
  },
  heroHint: {
    marginTop: '1rem',
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.55)',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  sectionHeader: {
    maxWidth: '70ch',
  },
  sectionTitle: {
    margin: '0 0 0.75rem 0',
    fontSize: '2rem',
  },
  sectionSubtitle: {
    margin: 0,
    fontSize: '1rem',
    color: 'var(--muted)',
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '1.75rem',
    borderRadius: '24px',
    background: 'rgba(17,26,34,0.78)',
    border: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  },
  cardTitle: {
    margin: 0,
    fontSize: '1.4rem',
  },
  cardTagline: {
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: '0.02em',
  },
  cardDescription: {
    margin: 0,
    color: 'var(--muted)',
    lineHeight: 1.6,
  },
  cardLinks: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  linkButton: {
    padding: '0.65rem 1.2rem',
    borderRadius: '999px',
    background: 'rgba(108,240,194,0.16)',
    border: '1px solid rgba(108,240,194,0.65)',
    color: '#6cf0c2',
    fontWeight: 600,
  },
  linkGhost: {
    padding: '0.65rem 1.2rem',
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.16)',
    color: 'rgba(255,255,255,0.7)',
  },
}
