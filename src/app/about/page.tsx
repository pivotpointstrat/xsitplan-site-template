import Link from 'next/link'
import { config } from '@/lib/config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `About | ${config.businessName}`,
  description: config.founderBio || config.seoDescription,
}

function hexToRgb(hex: string) {
  const h = hex.replace('#', '')
  try { return `${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)}` }
  catch { return '124,58,237' }
}

export default function AboutPage() {
  const rgb = hexToRgb(config.brandPrimary)
  const p = config.brandPrimary

  return (
    <>
      {/* Page header */}
      <section style={{
        background: `linear-gradient(135deg, rgba(${rgb},0.06) 0%, rgba(${rgb},0.02) 100%)`,
        borderBottom: `1px solid rgba(${rgb},0.12)`,
        padding: 'clamp(56px,7vw,80px) 24px',
        textAlign: 'center',
      }}>
        <div style={{ display: 'inline-block', background: `rgba(${rgb},0.1)`, color: p, fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100, marginBottom: 24 }}>About</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: -1.5, color: '#0f172a', maxWidth: 700, margin: '0 auto 16px', lineHeight: 1.15 }}>
          Hi, I&apos;m {config.founderName}
        </h1>
        {config.tagline && <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 500, margin: '0 auto' }}>{config.tagline}</p>}
      </section>

      {/* Story */}
      <section style={{ padding: 'clamp(56px,7vw,80px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, color: '#0f172a', marginBottom: 24, letterSpacing: -0.5 }}>My Story</h2>
          {(config.founderBio || config.aboutParagraph).split('\n').filter(Boolean).map((para, i) => (
            <p key={i} style={{ fontSize: 17, color: '#374151', lineHeight: 1.8, marginBottom: 20 }}>{para}</p>
          ))}
          {config.linkedinHeadline && (
            <div style={{
              background: `rgba(${rgb},0.07)`,
              border: `1px solid rgba(${rgb},0.15)`,
              borderRadius: 12, padding: '20px 24px', marginTop: 32,
            }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: '#0f172a', fontStyle: 'italic' }}>&ldquo;{config.linkedinHeadline}&rdquo;</p>
            </div>
          )}
        </div>
      </section>

      {/* What I do */}
      {config.aboutAccentText && (
        <section style={{ padding: 'clamp(56px,7vw,80px) 24px', background: '#fafafa' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: p, marginBottom: 12 }}>{config.aboutAccentLabel}</div>
            <h2 style={{ fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, color: '#0f172a', marginBottom: 16, letterSpacing: -0.5, lineHeight: 1.3 }}>
              {config.aboutAccentText}
            </h2>
            {config.offerStatement && (
              <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.75 }}>{config.offerStatement}</p>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: 'clamp(56px,7vw,80px) 24px', background: '#fff', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(24px,3.5vw,36px)', fontWeight: 800, color: '#0f172a', marginBottom: 12, letterSpacing: -0.5 }}>Ready to work together?</h2>
        <p style={{ fontSize: 17, color: '#6b7280', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
          Let&apos;s have a conversation about where you are and where you want to go.
        </p>
        <Link href="/contact" style={{
          display: 'inline-block', background: p, color: '#fff',
          padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 16,
          textDecoration: 'none', boxShadow: `0 4px 14px rgba(${rgb},0.3)`,
        }}>{config.heroCtaText} &rarr;</Link>
      </section>
    </>
  )
}
