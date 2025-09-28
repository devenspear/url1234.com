export const LAB_ROOT_DOMAIN = process.env.LAB_ROOT_DOMAIN ?? 'url1234.com'
export const LAB_ROOT_SUBDOMAIN_HINT = `*.${LAB_ROOT_DOMAIN}`
export const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID || undefined

export function assertVercelToken(): string {
  const token = process.env.VERCEL_API_TOKEN
  if (!token) {
    throw new Error('Missing VERCEL_API_TOKEN environment variable')
  }
  return token
}
