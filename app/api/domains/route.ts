import { NextResponse } from 'next/server'
import { LAB_ROOT_DOMAIN } from '@/lib/config'
import { vercelFetch } from '@/lib/vercel'

interface DomainRequestBody {
  projectId?: string
  domain?: string
}

function normalizeDomain(raw: string): string {
  const trimmed = raw.trim().toLowerCase()
  if (!trimmed) {
    throw new Error('Domain is required')
  }
  if (trimmed === LAB_ROOT_DOMAIN) {
    return trimmed
  }
  if (trimmed.endsWith(`.${LAB_ROOT_DOMAIN}`)) {
    return trimmed
  }
  if (!trimmed.includes('.')) {
    return `${trimmed}.${LAB_ROOT_DOMAIN}`
  }
  return trimmed
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as DomainRequestBody
    if (!body.projectId || !body.domain) {
      return NextResponse.json({ error: 'projectId and domain are required' }, { status: 400 })
    }

    const name = normalizeDomain(body.domain)

    const response = await vercelFetch(`/v10/projects/${body.projectId}/domains`, {
      method: 'POST',
      body: JSON.stringify({ name }),
    })

    return NextResponse.json({ success: true, result: response })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const body = (await request.json()) as DomainRequestBody
    if (!body.projectId || !body.domain) {
      return NextResponse.json({ error: 'projectId and domain are required' }, { status: 400 })
    }

    const name = normalizeDomain(body.domain)
    await vercelFetch(`/v10/projects/${body.projectId}/domains/${encodeURIComponent(name)}`, {
      method: 'DELETE',
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
