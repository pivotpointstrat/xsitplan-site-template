import Link from 'next/link'
import { config } from '@/lib/config'

function hexToRgb(hex: string) {
  const h = hex.replace('#', '')
  try {
    return `${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)}`
  } catch { return '124,58,237' }
}

export default function HomePage() {
  const rgb = hexToRgb(config.brandPrimary)
  const p = config.brandPrimary

  const socialProofs = [config.socialProof1, config.socialProof2, config.socialProof3].filter(Boolean)
  const services = [
    { name: config.service1Name, desc: config.service1Desc, price: config.service1Price },
    { name: config.service2Name, desc: config.service2Desc, price: config.service2Price },
    { name: config.service3Name, desc: config.service3Desc, price: config.service3Price },
  ].filter(s => s.name)

  return (
    <>
      {/* Hero */}
      <section style={{
        background: `linear-gradient(135deg, rgba(${rgb},0.06) 0%, rgba(${rgb},0.02) 100%)`,
        borderBottom: `1px solid rgba(${rgb},0.12)`,
        padding: 'clamp(64px,8vw,96px) 24px clamp(56px,7vw,80px)',
        textAlign: 'center',
      }}>
        {config.tagline && (
          <div style={{
            display: 'inline-block',
            background: `rgba(${rgb},0.1)`,
            color: p,
            fontSize: 13, fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '5px 14px', borderRadius: 100, marginBottom: 24,
          }}>{config.tagline}</div>
        )}
        <h1 style={{
          fontSize: 'clamp(32px,5.5vw,60px)',
          fontWeight: 800, lineHeight: 1.1,
          letterSpacing: '-1.5px',
          maxWidth: 820, margin: '0 auto 24px',
          color: '#0f172a',
        }}>{config.heroHeadline}</h1>
        <p style={{
          fontSize: 'clamp(17px,2.2vw,20px)',
          color: '#4b5563',
          maxWidth: 620, margin: '0 auto 40px',
          lineHeight: 1.65,
        }}>{config.heroSubheadline}</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{
            display: 'inline-block', background: p, color: '#fff',
            padding: '14px 32px', borderRadius: 10, fontWeight: 700, fontSize: 16,
            textDecoration: 'none', boxShadow: `0 4px 14px rgba(${rgb},0.35)`,
          }}>{config.heroCtaText} &rarr;</Link>
          <Link href="/services" style={{
            display: 'inline-block', background: '#fff', color: p,
            border: `2px solid ${p}`,
            padding: '12px 28px', borderRadius: 10, fontWeight: 700, fontSize: 16,
            textDecoration: 'none',
          }}>See How It Works</Link>
        </div>
      </section>

      {/* Social proof strip */}
      {socialProofs.length > 0 && (
        <div style={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
          gap: '12px 32px', padding: '28px 24px',
          background: '#fff', borderBottom: '1px solid #f0f0f0',
        }}>
          {socialProofs.map((proof, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#374151', fontWeight: 500 }}>
              <span style={{
                width: 22, height: 22, borderRadius: '50%',
                background: p, color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 700, flexShrink: 0,
              }}>&#10003;</span>
              {proof}
            </div>
          ))}
        </div>
      )}

      {/* About preview */}
      <section style={{ padding: 'clamp(56px,7vw,80px) 24px', background: '#fafafa' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 48, alignItems: 'center',
          }}>
            <div>
              <h2 style={{ fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, letterSpacing: '-0.8px', color: '#0f172a', marginBottom: 16 }}>
                Hi, I&apos;m {config.founderName}
              </h2>
              <p style={{ fontSize: 17, color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
                {config.aboutParagraph || config.founderBio}
              </p>
              <Link href="/about" style={{ color: p, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>
                Read my story &rarr;
              </Link>
            </div>
            <div style={{
              background: `linear-gradient(135deg, rgba(${rgb},0.08), rgba(${rgb},0.03))`,
              border: `1px solid rgba(${rgb},0.15)`,
              borderRadius: 20, padding: 36,
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: p, marginBottom: 8 }}>
                {config.aboutAccentLabel}
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', lineHeight: 1.4 }}>
                {config.aboutAccentText || config.linkedinHeadline}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core offer */}
      {config.offerStatement && (
        <section style={{ padding: 'clamp(56px,7vw,80px) 24px', background: '#fff' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <div style={{ background: p, borderRadius: 20, padding: 'clamp(36px,5vw,48px) clamp(28px,4vw,40px)', color: '#fff' }}>
              <h3 style={{ fontSize: 26, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.5px' }}>What We Do Together</h3>
              <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.92, marginBottom: 28 }}>{config.offerStatement}</p>
              <Link href="/contact" style={{
                display: 'inline-block', background: '#fff', color: p,
                padding: '12px 28px', borderRadius: 9, fontWeight: 700, fontSize: 15,
                textDecoration: 'none',
              }}>{config.offerCtaText} &rarr;</Link>
            </div>
          </div>
        </section>
      )}

      {/* Services preview */}
      {services.length > 0 && (
        <section style={{ padding: 'clamp(56px,7vw,80px) 24px', background: '#fafafa' }}>
          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 800, letterSpacing: '-0.8px', color: '#0f172a', marginBottom: 12 }}>How I Can Help</h2>
            <p style={{ fontSize: 17, color: '#6b7280', marginBottom: 40, maxWidth: 540 }}>Choose the level of support that fits where you are today.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
              {services.map((s, i) => (
                <div key={i} style={{
                  background: '#fff', borderRadius: 16,
                  border: i === 1 ? `2px solid ${p}` : '1px solid #e5e7eb',
                  padding: '32px 28px', position: 'relative',
                }}>
                  {i === 1 && (
                    <div style={{
                      position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                      background: p, color: '#fff', fontSize: 11, fontWeight: 700,
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      padding: '4px 14px', borderRadius: 100, whiteSpace: 'nowrap',
                    }}>Most Popular</div>
                  )}
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#0f172a', marginBottom: 8 }}>{s.name}</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: p, marginBottom: 16 }}>{s.price}</div>
                  <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65, marginBottom: 24 }}>{s.desc}</p>
                  <Link href="/contact" style={{
                    display: 'block', textAlign: 'center', background: p, color: '#fff',
                    padding: 11, borderRadius: 8, fontWeight: 700, fontSize: 14,
                    textDecoration: 'none',
                  }}>Get Started</Link>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <Link href="/services" style={{ color: p, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>View all services &rarr;</Link>
            </div>
          </div>
        </section>
      )}

      {/* Lead magnet */}
      {config.leadMagnetTitle && (
        <section style={{
          background: '#0f172a', padding: 'clamp(56px,7vw,72px) 24px', textAlign: 'center',
        }}>
          <div style={{ maxWidth: 600, margin: '0 auto' }}>
            <div style={{
              display: 'inline-block',
              background: `rgba(${rgb},0.2)`, color: p,
              fontSize: 12, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase',
              padding: '5px 14px', borderRadius: 100, marginBottom: 20,
            }}>{config.leadMagnetFormat}</div>
            <h2 style={{ fontSize: 'clamp(24px,3.5vw,36px)', fontWeight: 800, color: '#fff', marginBottom: 16, letterSpacing: '-0.5px' }}>
              Free: {config.leadMagnetTitle}
            </h2>
            <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.7, marginBottom: 28 }}>{config.leadMagnetDesc}</p>
            <Link href="/contact" style={{
              display: 'inline-block', background: p, color: '#fff',
              padding: '13px 30px', borderRadius: 9, fontWeight: 700, fontSize: 15,
              textDecoration: 'none',
            }}>{config.leadMagnetCta} &rarr;</Link>
          </div>
        </section>
      )}
    </>
  )
}
