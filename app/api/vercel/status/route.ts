import { NextResponse } from 'next/server'
import { LAB_ROOT_DOMAIN, LAB_ROOT_SUBDOMAIN_HINT, VERCEL_TEAM_ID } from '@/lib/config'

export async function GET() {
  const tokenPresent = Boolean(process.env.VERCEL_API_TOKEN)
  return NextResponse.json({
    ok: tokenPresent,
    rootDomain: LAB_ROOT_DOMAIN,
    wildcardHint: LAB_ROOT_SUBDOMAIN_HINT,
    teamId: VERCEL_TEAM_ID ?? null,
    message: tokenPresent
      ? 'Ready to call Vercel API.'
      : 'Set VERCEL_API_TOKEN in your environment (and optionally VERCEL_TEAM_ID).',
  })
}
