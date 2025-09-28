import { NextResponse } from 'next/server'
import { vercelFetch } from '@/lib/vercel'

interface VercelProject {
  id: string
  name: string
  framework?: string
  latestDeployments?: Array<{
    alias?: string[]
    readyState?: string
    createdAt?: number
  }>
  updatedAt?: number
  gitRepository?: {
    repoOwner: string
    repoSlug: string
  } | null
}

interface ProjectsResponse {
  projects: VercelProject[]
}

const DEFAULT_LIMIT = 50

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Number(searchParams.get('limit') ?? DEFAULT_LIMIT)
    const search = searchParams.get('search')?.trim()

    const query = new URLSearchParams({ limit: String(Math.min(limit, 200)) })
    if (search) {
      query.set('search', search)
    }

    const data = await vercelFetch<ProjectsResponse>(`/v9/projects?${query.toString()}`)

    const projects = data.projects.map(project => ({
      id: project.id,
      name: project.name,
      framework: project.framework ?? 'unknown',
      latestAlias: project.latestDeployments?.[0]?.alias?.[0],
      updatedAt: project.updatedAt ?? null,
      gitRepository: project.gitRepository
        ? `${project.gitRepository.repoOwner}/${project.gitRepository.repoSlug}`
        : null,
    }))

    return NextResponse.json({ projects })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
