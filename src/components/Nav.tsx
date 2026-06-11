import Link from 'next/link'
import { config } from '@/lib/config'

export function Nav() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #e5e7eb',
      padding: '0 24px',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Link href="/" style={{
        fontWeight: 800,
        fontSize: 20,
        color: config.brandPrimary,
        letterSpacing: '-0.5px',
        textDecoration: 'none',
      }}>
        {config.businessName}
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <Link href="/about" style={{ fontSize: 14, fontWeight: 500, color: '#374151', textDecoration: 'none' }}>About</Link>
        <Link href="/services" style={{ fontSize: 14, fontWeight: 500, color: '#374151', textDecoration: 'none' }}>Services</Link>
        <Link href="/contact" style={{ fontSize: 14, fontWeight: 500, color: '#374151', textDecoration: 'none' }}>Contact</Link>
        <Link href="/contact" style={{
          background: config.brandPrimary,
          color: '#fff',
          padding: '9px 22px',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 14,
          transition: 'opacity .15s',
        }}>Work With Me</Link>
      </div>
    </nav>
  )
}
