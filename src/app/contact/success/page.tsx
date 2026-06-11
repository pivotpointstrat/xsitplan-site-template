import Link from 'next/link'
import { config } from '@/lib/config'

function hexToRgb(hex: string) {
  const h = hex.replace('#', '')
  try { return `${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)}` }
  catch { return '124,58,237' }
}

export default function ContactSuccessPage() {
  const rgb = hexToRgb(config.brandPrimary)
  const p = config.brandPrimary
  return (
    <section style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px', textAlign: 'center' }}>
      <div style={{ fontSize: 48, marginBottom: 24 }}>&#127881;</div>
      <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, color: '#0f172a', marginBottom: 16, letterSpacing: -1 }}>Message sent!</h1>
      <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 440, marginBottom: 36, lineHeight: 1.65 }}>
        Thanks for reaching out. {config.founderName} will be in touch within 1 business day.
      </p>
      <Link href="/" style={{
        display: 'inline-block', background: p, color: '#fff',
        padding: '13px 28px', borderRadius: 9, fontWeight: 700, fontSize: 15,
        textDecoration: 'none', boxShadow: `0 4px 14px rgba(${rgb},0.3)`,
      }}>Back to Home</Link>
    </section>
  )
}
