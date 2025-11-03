import './globals.css'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <a className="brand" href="/">Summize</a>
          <nav>
            <a href="/pricing">Pricing</a>
            <a href="/dashboard">Dashboard</a>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">© {new Date().getFullYear()} Summize AI</footer>
      </body>
    </html>
  )
}
