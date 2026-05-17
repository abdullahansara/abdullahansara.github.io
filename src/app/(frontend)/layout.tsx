import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'

import './styles.css'

export const metadata: Metadata = {
  title: 'Abdullah Ansar',
  description: 'Academic website and essay archive of Abdullah Ansar.',
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link className="brand" href="/">
              <span className="brand-name">Abdullah Ansar</span>
              <span className="brand-line">Academia and essays</span>
            </Link>
            <nav className="nav" aria-label="Main navigation">
              <Link href="/">Home</Link>
              <Link href="/publications">Publications</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/research">Research</Link>
              <Link href="/about">About</Link>
              <Link href="/admin">Admin</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <span>© {new Date().getFullYear()} Abdullah Ansar</span>
            <span>Built with Payload CMS and Next.js</span>
          </div>
        </footer>
      </body>
    </html>
  )
}
