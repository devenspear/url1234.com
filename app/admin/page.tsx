import AdminConsole from '@/app/admin/ui/AdminConsole'
import { LAB_ROOT_DOMAIN, LAB_ROOT_SUBDOMAIN_HINT } from '@/lib/config'

export const metadata = {
  title: 'URL1234 Lab — Admin',
  description: 'Manage wildcard subdomains and attach them to Vercel projects.',
}

export default function AdminPage() {
  return (
    <AdminConsole
      rootDomain={LAB_ROOT_DOMAIN}
      wildcardHint={LAB_ROOT_SUBDOMAIN_HINT}
    />
  )
}
