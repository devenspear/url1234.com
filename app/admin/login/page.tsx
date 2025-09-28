'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { CSSProperties } from 'react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        // Set a session cookie or token
        document.cookie = 'admin-authenticated=true; path=/admin; secure; samesite=strict'
        router.push('/admin')
      } else {
        setError('Invalid password')
      }
    } catch {
      setError('Authentication failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={styles.main}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Admin Access</h1>
          <p style={styles.subtitle}>Enter the admin password to access the control panel</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter admin password"
              required
              autoFocus
            />
          </div>

          {error && <div style={styles.error}>{error}</div>}

          <button
            type="submit"
            disabled={loading || !password}
            style={{
              ...styles.button,
              ...(loading || !password ? styles.buttonDisabled : {}),
            }}
          >
            {loading ? 'Authenticating...' : 'Access Admin Panel'}
          </button>
        </form>

        <div style={styles.footer}>
          <Link href="/" style={styles.backLink}>
            ← Back to main site
          </Link>
        </div>
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
    width: '100%',
    maxWidth: '400px',
    padding: '2.5rem',
    borderRadius: '24px',
    background: 'rgba(17,26,34,0.8)',
    border: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    margin: '0 0 0.5rem 0',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #6cf0c2, #5881ff)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    margin: 0,
    color: 'rgba(255,255,255,0.7)',
    fontSize: '0.95rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: 'rgba(255,255,255,0.9)',
  },
  input: {
    padding: '0.875rem 1rem',
    borderRadius: '12px',
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(0,0,0,0.3)',
    color: '#ffffff',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  },
  button: {
    padding: '0.875rem 1.5rem',
    borderRadius: '12px',
    border: 'none',
    background: 'linear-gradient(135deg, #6cf0c2, #5881ff)',
    color: '#0c1016',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  buttonDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  error: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    background: 'rgba(255,99,132,0.1)',
    border: '1px solid rgba(255,99,132,0.3)',
    color: '#ff6384',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
  footer: {
    marginTop: '2rem',
    textAlign: 'center',
  },
  backLink: {
    color: 'rgba(255,255,255,0.6)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s ease',
  },
}