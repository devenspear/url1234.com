import 'server-only'

import { assertVercelToken, VERCEL_TEAM_ID } from '@/lib/config'

const VERCEL_API_BASE = 'https://api.vercel.com'

type HTTPMethod = 'GET' | 'POST' | 'DELETE'

interface VercelRequestInit extends RequestInit {
  method?: HTTPMethod
}

export async function vercelFetch<T>(path: string, init: VercelRequestInit = {}): Promise<T> {
  const token = assertVercelToken()
  const url = new URL(path, VERCEL_API_BASE)

  if (VERCEL_TEAM_ID && !url.searchParams.has('teamId')) {
    url.searchParams.set('teamId', VERCEL_TEAM_ID)
  }

  const response = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    const text = await response.text()
    throw new Error(`Vercel API ${url.pathname} failed: ${response.status} ${response.statusText} — ${text}`)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return response.json() as Promise<T>
}
