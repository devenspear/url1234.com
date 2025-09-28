'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'

interface AdminConsoleProps {
  rootDomain: string
  wildcardHint: string
}

interface ProjectSummary {
  id: string
  name: string
  framework: string
  latestAlias?: string | null
  updatedAt?: number | null
  gitRepository?: string | null
}

interface ProjectDomain {
  name: string
  createdAt?: number
  redirect?: string | null
  redirectStatusCode?: number | null
}

interface StatusPayload {
  ok: boolean
  message: string
  rootDomain: string
  wildcardHint: string
  teamId: string | null
}

const styles: Record<string, CSSProperties> = {
  container: {
    padding: '3rem clamp(1.5rem, 4vw, 6rem) 4rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
    margin: '0 auto',
    maxWidth: '1200px',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  title: {
    margin: 0,
    fontSize: '2.5rem',
    lineHeight: 1.1,
  },
  subtitle: {
    margin: 0,
    color: 'var(--muted)',
    maxWidth: '70ch',
    lineHeight: 1.6,
  },
  statusCard: {
    padding: '1.5rem',
    borderRadius: '20px',
    background: 'rgba(17,26,34,0.85)',
    border: '1px solid rgba(255,255,255,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
  },
  statusHeadline: {
    fontSize: '1.1rem',
    fontWeight: 600,
    margin: 0,
  },
  statusDetail: {
    margin: 0,
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.5,
  },
  layout: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'minmax(260px, 320px) 1fr',
  },
  card: {
    borderRadius: '20px',
    background: 'rgba(17,26,34,0.78)',
    border: '1px solid rgba(255,255,255,0.08)',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    minHeight: 0,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  cardTitle: {
    margin: 0,
    fontSize: '1.1rem',
  },
  searchForm: {
    display: 'flex',
    gap: '0.5rem',
  },
  input: {
    flex: 1,
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(12,16,22,0.6)',
    padding: '0.65rem 1.1rem',
    color: 'var(--fg)',
  },
  button: {
    borderRadius: '999px',
    border: '1px solid rgba(108,240,194,0.55)',
    background: 'rgba(108,240,194,0.16)',
    color: '#6cf0c2',
    padding: '0.65rem 1.4rem',
    fontWeight: 600,
    cursor: 'pointer',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    overflowY: 'auto',
    maxHeight: '420px',
  },
  listItem: {
    borderRadius: '16px',
    padding: '0.75rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid transparent',
    cursor: 'pointer',
  },
  listItemActive: {
    borderColor: 'rgba(108,240,194,0.6)',
    background: 'rgba(108,240,194,0.1)',
  },
  listItemTitle: {
    fontSize: '1rem',
    margin: 0,
  },
  listItemMeta: {
    margin: '0.35rem 0 0 0',
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.6)',
  },
  callout: {
    borderRadius: '16px',
    padding: '1rem',
    background: 'rgba(255,255,255,0.05)',
    fontSize: '0.9rem',
    lineHeight: 1.5,
    color: 'rgba(255,255,255,0.7)',
  },
  domainsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    maxHeight: '320px',
    overflowY: 'auto',
  },
  domainRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '14px',
    border: '1px solid rgba(255,255,255,0.08)',
    padding: '0.75rem 1rem',
    background: 'rgba(255,255,255,0.03)',
  },
  domainName: {
    fontWeight: 600,
  },
  dangerButton: {
    borderRadius: '999px',
    border: '1px solid rgba(255,99,132,0.5)',
    background: 'rgba(255,99,132,0.1)',
    color: 'rgba(255,99,132,0.85)',
    padding: '0.4rem 0.9rem',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    paddingTop: '1rem',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.7)',
  },
  helper: {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.5)',
  },
  actions: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  ghostButton: {
    borderRadius: '999px',
    border: '1px solid rgba(255,255,255,0.16)',
    background: 'transparent',
    color: 'rgba(255,255,255,0.75)',
    padding: '0.6rem 1.2rem',
    cursor: 'pointer',
  },
  message: {
    padding: '0.75rem 1rem',
    borderRadius: '12px',
    background: 'rgba(108,240,194,0.1)',
    border: '1px solid rgba(108,240,194,0.4)',
    color: '#6cf0c2',
    fontSize: '0.9rem',
  },
  error: {
    background: 'rgba(255,99,132,0.1)',
    border: '1px solid rgba(255,99,132,0.45)',
    color: 'rgba(255,99,132,0.9)',
  },
}

export default function AdminConsole({ rootDomain, wildcardHint }: AdminConsoleProps) {
  const [status, setStatus] = useState<StatusPayload | null>(null)
  const [statusError, setStatusError] = useState<string | null>(null)

  const [projects, setProjects] = useState<ProjectSummary[]>([])
  const [projectsLoading, setProjectsLoading] = useState(false)
  const [projectsError, setProjectsError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const [domains, setDomains] = useState<ProjectDomain[]>([])
  const [domainsLoading, setDomainsLoading] = useState(false)
  const [domainsError, setDomainsError] = useState<string | null>(null)

  const [subdomainInput, setSubdomainInput] = useState('')
  const [actionMessage, setActionMessage] = useState<string | null>(null)
  const [actionError, setActionError] = useState<string | null>(null)

  const selectedProject = useMemo(
    () => projects.find(project => project.id === selectedProjectId) ?? null,
    [projects, selectedProjectId],
  )

  const fetchStatus = useCallback(async () => {
    try {
      const response = await fetch('/api/vercel/status', { cache: 'no-store' })
      if (!response.ok) {
        throw new Error(`Status request failed (${response.status})`)
      }
      const payload = (await response.json()) as StatusPayload
      setStatus(payload)
      setStatusError(null)
    } catch (error) {
      setStatusError(error instanceof Error ? error.message : 'Unable to determine status')
    }
  }, [])

  const loadProjects = useCallback(
    async (search?: string) => {
      try {
        setProjectsLoading(true)
        setProjectsError(null)
        const query = new URLSearchParams()
        if (search) {
          query.set('search', search)
        }
        const response = await fetch(`/api/projects${query.toString() ? `?${query.toString()}` : ''}`, {
          cache: 'no-store',
        })
        if (!response.ok) {
          throw new Error(`Project fetch failed (${response.status})`)
        }
        const payload = (await response.json()) as { projects: ProjectSummary[] }
        setProjects(payload.projects)

        setSelectedProjectId(current => {
          if (current && payload.projects.some(project => project.id === current)) {
            return current
          }
          return payload.projects[0]?.id ?? null
        })
      } catch (error) {
        setProjectsError(error instanceof Error ? error.message : 'Unable to load projects')
      } finally {
        setProjectsLoading(false)
      }
    },
    [],
  )

  const loadDomains = useCallback(
    async (projectId: string) => {
      try {
        setDomainsLoading(true)
        setDomainsError(null)
        const response = await fetch(`/api/projects/${projectId}/domains`, { cache: 'no-store' })
        if (!response.ok) {
          throw new Error(`Domains request failed (${response.status})`)
        }
        const payload = (await response.json()) as { domains: ProjectDomain[] }
        setDomains(payload.domains)
      } catch (error) {
        setDomainsError(error instanceof Error ? error.message : 'Unable to load domains')
      } finally {
        setDomainsLoading(false)
      }
    },
    [],
  )

  useEffect(() => {
    fetchStatus()
    loadProjects()
  }, [fetchStatus, loadProjects])

  useEffect(() => {
    if (selectedProjectId) {
      loadDomains(selectedProjectId)
    } else {
      setDomains([])
    }
  }, [selectedProjectId, loadDomains])

  const handleSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await loadProjects(searchTerm.trim() || undefined)
  }

  const handleAttachDomain = async () => {
    if (!selectedProjectId) return
    const value = subdomainInput.trim()
    if (!value) {
      setActionError('Enter a subdomain or full domain to attach.')
      return
    }

    try {
      setActionError(null)
      setActionMessage(null)
      const response = await fetch('/api/domains', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId: selectedProjectId, domain: value }),
      })
      const payload = await response.json()
      if (!response.ok) {
        throw new Error(payload.error ?? 'Failed to attach domain')
      }
      setActionMessage(`Attached ${payload.result?.name ?? value} to ${selectedProject?.name ?? 'project'}.`)
      setSubdomainInput('')
      loadDomains(selectedProjectId)
    } catch (error) {
      setActionError(error instanceof Error ? error.message : 'Failed to attach domain')
    }
  }

  const handleRemoveDomain = async (domain: string) => {
    if (!selectedProjectId) return
    try {
      setActionError(null)
      setActionMessage(null)
      const response = await fetch('/api/domains', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId: selectedProjectId, domain }),
      })
      const payload = await response.json()
      if (!response.ok) {
        throw new Error(payload.error ?? 'Failed to remove domain')
      }
      setActionMessage(`Removed ${domain} from ${selectedProject?.name ?? 'project'}.`)
      loadDomains(selectedProjectId)
    } catch (error) {
      setActionError(error instanceof Error ? error.message : 'Failed to remove domain')
    }
  }

  return (
    <div style={styles.container}>
      <section style={styles.header}>
        <h1 style={styles.title}>Subdomain control center</h1>
        <p style={styles.subtitle}>
          Attach any subdomain beneath <strong>{rootDomain}</strong> to a deployed Vercel project. Wildcard DNS
          ({wildcardHint}) should point to Vercel once — everything else is automated here.
        </p>
      </section>

      <section style={styles.statusCard}>
        <h2 style={styles.statusHeadline}>Environment status</h2>
        {status && (
          <p style={styles.statusDetail}>
            {status.message}
            {status.teamId ? ` · Team scope: ${status.teamId}` : ''}
          </p>
        )}
        {!status && !statusError && <p style={styles.statusDetail}>Checking Vercel credentials…</p>}
        {statusError && (
          <div style={{ ...styles.message, ...styles.error }}>{statusError}</div>
        )}
        <div style={styles.callout}>
          <strong>Setup reminder:</strong> Create a wildcard CNAME for {wildcardHint} that targets `cname.vercel-dns.com`
          once in your DNS provider. After that, every new project assignment happens instantly from this dashboard.
        </div>
      </section>

      <div style={styles.layout}>
        <aside style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Projects</h2>
            <p style={styles.helper}>Pulls directly from Vercel — search by project or repo name.</p>
          </div>

          <form style={styles.searchForm} onSubmit={handleSearchSubmit}>
            <input
              style={styles.input}
              placeholder="Search projects"
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)}
            />
            <button type="submit" style={styles.button} disabled={projectsLoading}>
              {projectsLoading ? 'Searching…' : 'Search'}
            </button>
          </form>

          {projectsError && <div style={{ ...styles.message, ...styles.error }}>{projectsError}</div>}

          <div style={styles.list}>
            {projectsLoading && projects.length === 0 && <p style={styles.helper}>Loading projects…</p>}
            {!projectsLoading && projects.length === 0 && <p style={styles.helper}>No projects found.</p>}
            {projects.map(project => {
              const active = project.id === selectedProjectId
              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedProjectId(project.id)}
                  style={{
                    ...styles.listItem,
                    ...(active ? styles.listItemActive : {}),
                  }}
                >
                  <h3 style={styles.listItemTitle}>{project.name}</h3>
                  <p style={styles.listItemMeta}>
                    {project.gitRepository ?? project.framework}
                    {project.latestAlias ? ` · ${project.latestAlias}` : ''}
                  </p>
                </button>
              )
            })}
          </div>
        </aside>

        <section style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Domains</h2>
            <p style={styles.helper}>
              View and manage the domains pointing at the selected project. Removing a domain only unlinks it inside
              Vercel; DNS stays as configured.
            </p>
          </div>

          {!selectedProject && <p style={styles.helper}>Select a project to manage its subdomains.</p>}

          {selectedProject && (
            <>
              <div style={styles.callout}>
                <strong>{selectedProject.name}</strong>
                {selectedProject.gitRepository ? ` · ${selectedProject.gitRepository}` : ''}
                {selectedProject.latestAlias ? ` · latest: ${selectedProject.latestAlias}` : ''}
              </div>

              {domainsError && <div style={{ ...styles.message, ...styles.error }}>{domainsError}</div>}

              <div style={styles.domainsList}>
                {domainsLoading && <p style={styles.helper}>Loading domains…</p>}
                {!domainsLoading && domains.length === 0 && (
                  <p style={styles.helper}>No domains attached yet — add your first subdomain below.</p>
                )}
                {domains.map(domain => (
                  <div key={domain.name} style={styles.domainRow}>
                    <div>
                      <div style={styles.domainName}>{domain.name}</div>
                      {domain.redirect && (
                        <div style={styles.helper}>
                          Redirect → {domain.redirect}{' '}
                          {domain.redirectStatusCode ? `(${domain.redirectStatusCode})` : '(302)'}
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      style={styles.dangerButton}
                      onClick={() => handleRemoveDomain(domain.name)}
                      disabled={domainsLoading}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div style={styles.form}>
                <label style={styles.label}>
                  Subdomain or domain
                  <input
                    style={styles.input}
                    placeholder={`e.g. new-experiment or custom.${rootDomain}`}
                    value={subdomainInput}
                    onChange={event => setSubdomainInput(event.target.value)}
                  />
                  <span style={styles.helper}>{`Enter the slug (e.g. new-experiment) or a full domain (e.g. new-experiment.${rootDomain}).`}</span>
                </label>
                <div style={styles.actions}>
                  <button type="button" style={styles.button} onClick={handleAttachDomain} disabled={domainsLoading}>
                    Attach to project
                  </button>
                  <button
                    type="button"
                    style={styles.ghostButton}
                    onClick={() => loadDomains(selectedProject.id)}
                    disabled={domainsLoading}
                  >
                    Refresh list
                  </button>
                </div>
                {actionMessage && <div style={styles.message}>{actionMessage}</div>}
                {actionError && <div style={{ ...styles.message, ...styles.error }}>{actionError}</div>}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  )
}
