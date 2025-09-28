import { NextResponse } from 'next/server'
import { vercelFetch } from '@/lib/vercel'

interface ProjectDomain {
  name: string
  createdAt?: number
  redirect?: string | null
  redirectStatusCode?: number | null
  projectId?: string
}

interface DomainsResponse {
  domains: ProjectDomain[]
}

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const data = await vercelFetch<DomainsResponse>(`/v9/projects/${id}/domains`)
    return NextResponse.json({ domains: data.domains })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
