export function getAdminPassword(): string {
  const password = process.env.ADMIN_PASSWORD
  if (!password) {
    throw new Error('ADMIN_PASSWORD environment variable is required')
  }
  return password
}

export function validateAdminAccess(password: string): boolean {
  try {
    const adminPassword = getAdminPassword()
    return password === adminPassword
  } catch {
    return false
  }
}