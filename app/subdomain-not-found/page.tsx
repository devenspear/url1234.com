import type { CSSProperties } from 'react'
import Link from 'next/link'
import { LAB_ROOT_DOMAIN } from '@/lib/config'

interface SearchParams {
  subdomain?: string
}

interface PageProps {
  searchParams: Promise<SearchParams>
}

export default async function SubdomainNotFound({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams
  const subdomain = resolvedSearchParams.subdomain || 'unknown'

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <div style={styles.iconContainer}>
          <div style={styles.searchIcon}>🔍</div>
        </div>

        <h1 style={styles.title}>Subdomain Not Found</h1>

        <p style={styles.description}>
          The subdomain <strong>{subdomain}.{LAB_ROOT_DOMAIN}</strong> doesn&apos;t exist or hasn&apos;t been configured yet.
        </p>

        <div style={styles.suggestions}>
          <p style={styles.suggestionText}>You can:</p>
          <ul style={styles.suggestionList}>
            <li>Check the URL for typos</li>
            <li>Visit the main site at <Link href={`https://${LAB_ROOT_DOMAIN}`} style={styles.link}>{LAB_ROOT_DOMAIN}</Link></li>
            <li>Contact the site administrator if you believe this is an error</li>
          </ul>
        </div>

        <Link href={`https://${LAB_ROOT_DOMAIN}`} style={styles.homeButton}>
          Go to Main Site
        </Link>
      </div>
    </main>
  )
}

const styles: Record<string, CSSProperties> = {
  main: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    background: 'linear-gradient(135deg, #0c1016 0%, #111a22 100%)',
    color: '#ffffff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  container: {
    maxWidth: '600px',
    textAlign: 'center',
    padding: '3rem',
    borderRadius: '24px',
    background: 'rgba(17,26,34,0.8)',
    border: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  iconContainer: {
    marginBottom: '2rem',
  },
  searchIcon: {
    fontSize: '4rem',
    opacity: 0.6,
  },
  title: {
    fontSize: '2.5rem',
    margin: '0 0 1.5rem 0',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #6cf0c2, #5881ff)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  description: {
    fontSize: '1.1rem',
    margin: '0 0 2rem 0',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 1.6,
  },
  suggestions: {
    marginBottom: '2.5rem',
    textAlign: 'left',
  },
  suggestionText: {
    fontSize: '1rem',
    margin: '0 0 1rem 0',
    color: 'rgba(255,255,255,0.9)',
    fontWeight: 600,
  },
  suggestionList: {
    margin: 0,
    paddingLeft: '1.5rem',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.8,
  },
  link: {
    color: '#6cf0c2',
    textDecoration: 'none',
    fontWeight: 600,
  },
  homeButton: {
    display: 'inline-block',
    padding: '0.875rem 2rem',
    borderRadius: '999px',
    background: 'linear-gradient(135deg, #6cf0c2, #5881ff)',
    color: '#0c1016',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'transform 0.2s ease',
  },
}