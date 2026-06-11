import { config } from '@/lib/config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Contact | ${config.businessName}`,
  description: `Get in touch with ${config.founderName} at ${config.businessName}.`,
}

function hexToRgb(hex: string) {
  const h = hex.replace('#', '')
  try { return `${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)}` }
  catch { return '124,58,237' }
}

export default function ContactPage() {
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
        <div style={{ display: 'inline-block', background: `rgba(${rgb},0.1)`, color: p, fontSize: 13, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 100, marginBottom: 24 }}>Contact</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 800, letterSpacing: -1.5, color: '#0f172a', maxWidth: 700, margin: '0 auto 16px', lineHeight: 1.15 }}>
          {config.contactHeadline}
        </h1>
        <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 480, margin: '0 auto' }}>{config.contactSubtext}</p>
      </section>

      {/* Contact form (Netlify Forms) */}
      <section style={{ padding: 'clamp(56px,7vw,80px) 24px', background: '#fff' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/contact/success"
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: 'none' }}><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6 }}>First Name</label>
                <input type="text" name="first_name" required style={{
                  width: '100%', padding: '11px 14px',
                  border: '1px solid #d1d5db', borderRadius: 8, fontSize: 15,
                  outline: 'none', background: '#fff',
                }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Last Name</label>
                <input type="text" name="last_name" required style={{
                  width: '100%', padding: '11px 14px',
                  border: '1px solid #d1d5db', borderRadius: 8, fontSize: 15,
                  outline: 'none', background: '#fff',
                }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6 }}>Email</label>
              <input type="email" name="email" required style={{
                width: '100%', padding: '11px 14px',
                border: '1px solid #d1d5db', borderRadius: 8, fontSize: 15,
                outline: 'none', background: '#fff',
              }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#374151', marginBottom: 6 }}>What can I help you with?</label>
              <textarea name="message" required rows={5} style={{
                width: '100%', padding: '11px 14px',
                border: '1px solid #d1d5db', borderRadius: 8, fontSize: 15,
                outline: 'none', background: '#fff', resize: 'vertical',
              }} />
            </div>

            {config.leadMagnetTitle && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <input type="checkbox" name="lead_magnet" id="lead_magnet" style={{ marginTop: 3 }} />
                <label htmlFor="lead_magnet" style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.5 }}>
                  Send me the free guide: &ldquo;{config.leadMagnetTitle}&rdquo;
                </label>
              </div>
            )}

            <button type="submit" style={{
              background: p, color: '#fff',
              padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 16,
              border: 'none', cursor: 'pointer',
              boxShadow: `0 4px 14px rgba(${rgb},0.3)`,
            }}>Send Message &rarr;</button>
          </form>

          {config.contactEmail && (
            <p style={{ textAlign: 'center', marginTop: 24, fontSize: 14, color: '#9ca3af' }}>
              Or email directly:{' '}
              <a href={`mailto:${config.contactEmail}`} style={{ color: p, fontWeight: 600, textDecoration: 'none' }}>
                {config.contactEmail}
              </a>
            </p>
          )}
        </div>
      </section>
    </>
  )
}
