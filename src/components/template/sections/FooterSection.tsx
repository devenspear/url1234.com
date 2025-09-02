interface FooterLink {
  label: string
  href: string
}

interface FooterColumn {
  title: string
  links: FooterLink[]
}

interface FooterSectionProps {
  companyName: string
  tagline?: string
  columns?: FooterColumn[]
  socialLinks?: {
    platform: string
    href: string
    icon?: React.ReactNode
  }[]
  copyright?: string
  backgroundColor?: 'dark' | 'light' | 'muted'
}

export function FooterSection({
  companyName,
  tagline,
  columns = [],
  socialLinks = [],
  copyright,
  backgroundColor = 'dark'
}: FooterSectionProps) {
  const bgClasses = {
    dark: 'bg-gray-900 text-white',
    light: 'bg-white text-gray-900',
    muted: 'bg-muted text-foreground'
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className={`py-12 ${bgClasses[backgroundColor]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-2">{companyName}</h3>
            {tagline && (
              <p className="opacity-70 text-sm">{tagline}</p>
            )}
            
            {socialLinks.length > 0 && (
              <div className="flex gap-4 mt-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.icon || link.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          {columns.map((column, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="opacity-70 hover:opacity-100 transition-opacity text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-current/10 pt-8 text-center text-sm opacity-70">
          <p>
            {copyright || `© ${currentYear} ${companyName}. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}