import Link from 'next/link'
import { config } from '@/lib/config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Services | ${config.businessName}`,
  description: `Services offered by ${config.businessName}.`,
}

function hexToRgb(hex: string) {
  const h = hex.replace('#', '')
  try { return `${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)}` }
  catch { return '124,58,237' }
}

export default function ServicesPage() {
  const rgb = hexToRgb(config.brandPrimary)
  const p = config.brandPrimary

  const services = [
    { name: config.service1Name, desc: config.service1Desc, price: config.service1Price, featured: false },
    { name: config.service2Name, desc: config.service2Desc, price: config.service2Price, featured: true },
    { name: config.service3Name, desc: config.service3Desc, price: config.service3Price, featured: false },
  ].filter(s => s.name)

  return (
    <>
      {/* Page header */}
      <section style={{
        background: `linear-gradient(135deg, rgba(${rgb},0.06) 0%, rgba(${rgb},0.02) 100%)`,
        borderBottom: `1px solid rgba(${rgb},0.12)`,
        padding: 'clamp(56px,7vw,80px) 24px',
        textAlign: 'center',
      }}>
        <div style={{ display: 'inline-block', background: `rgba(${rgb},0.1)`, color: p, fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100, marginBottom: 24 }}>Services</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: -1.5, color: '#0f172a', maxWidth: 700, margin: '0 auto 16px', lineHeight: 1.15 }}>
          How I Can Help
        </h1>
        <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 540, margin: '0 auto' }}>
          Choose the level of support that fits where you are today.
        </p>
      </section>

      {/* Service cards */}
      <section style={{ padding: 'clamp(56px,7vw,80px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {services.map((s, i) => (
              <div key={i} style={{
                background: '#fafafa',
                borderRadius: 20,
                border: s.featured ? `2px solid ${p}` : '1px solid #e5e7eb',
                padding: 36,
                position: 'relative',
              }}>
                {s.featured && (
                  <div style={{
                    position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
                    background: p, color: '#fff', fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    padding: '4px 16px', borderRadius: 100, whiteSpace: 'nowrap',
                  }}>Most Popular</div>
                )}
                <div style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>{s.name}</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: p, marginBottom: 20 }}>{s.price}</div>
                <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7, marginBottom: 28 }}>{s.desc}</p>
                <Link href="/contact" style={{
                  display: 'block', textAlign: 'center',
                  background: s.featured ? p : '#fff',
                  color: s.featured ? '#fff' : p,
                  border: s.featured ? 'none' : `2px solid ${p}`,
                  padding: 12, borderRadius: 9, fontWeight: 700, fontSize: 15,
                  textDecoration: 'none',
                }}>Get Started &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer statement */}
      {config.offerStatement && (
        <section style={{ padding: 'clamp(40px,6vw,64px) 24px', background: '#fafafa', textAlign: 'center' }}>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <p style={{ fontSize: 18, color: '#374151', lineHeight: 1.75, fontStyle: 'italic' }}>
              &ldquo;{config.offerStatement}&rdquo;
            </p>
            <p style={{ marginTop: 16, fontSize: 14, fontWeight: 700, color: p }}>— {config.founderName}</p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: 'clamp(56px,7vw,80px) 24px', background: '#fff', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px,3.5vw,36px)', fontWeight: 800, color: '#0f172a', marginBottom: 12, letterSpacing: -0.5 }}>Not sure which is right for you?</h2>
        <p style={{ fontSize: 17, color: '#6b7280', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>Let&apos;s talk. I&apos;ll help you find the best fit for where you are right now.</p>
        <Link href="/contact" style={{
          display: 'inline-block', background: p, color: '#fff',
          padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 16,
          textDecoration: 'none', boxShadow: `0 4px 14px rgba(${rgb},0.3)`,
        }}>Book a Free Call &rarr;</Link>
      </section>
    </>
  )
}
