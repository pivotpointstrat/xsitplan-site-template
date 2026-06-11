import Link from 'next/link'
import { config } from '@/lib/config'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      textAlign: 'center',
      padding: '40px 24px',
      background: '#f9fafb',
      borderTop: '1px solid #e5e7eb',
    }}>
      <p style={{ fontSize: 14, fontWeight: 700, color: '#374151', marginBottom: 12 }}>
        {config.businessName}
      </p>
      {config.tagline && (
        <p style={{ fontSize: 13, color: '#9ca3af', marginBottom: 16 }}>{config.tagline}</p>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginBottom: 20 }}>
        <Link href="/about" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>About</Link>
        <Link href="/services" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>Services</Link>
        <Link href="/contact" style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>Contact</Link>
        {config.founderLinkedin && (
          <a href={config.founderLinkedin} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}>LinkedIn</a>
        )}
      </div>
      <p style={{ fontSize: 12, color: '#9ca3af' }}>
        &copy; {year} {config.businessName} &middot; Built with{' '}
        <a href="https://xsitplan.com" style={{ color: config.brandPrimary, textDecoration: 'none', fontWeight: 600 }}>XsitPlan</a>
      </p>
    </footer>
  )
}
