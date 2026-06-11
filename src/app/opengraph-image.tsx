import { ImageResponse } from 'next/og'
import { config } from '@/lib/config'

// OG image dimensions — standard 1200×630
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  try {
    return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)]
  } catch {
    return [124, 58, 237]
  }
}

export default function OGImage() {
  const [r, g, b] = hexToRgb(config.brandPrimary)
  const primary = config.brandPrimary

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          background: `linear-gradient(135deg, rgba(${r},${g},${b},0.08) 0%, #ffffff 60%)`,
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Brand color accent bar */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%',
          height: 8,
          background: primary,
          display: 'flex',
        }} />

        {/* Tagline pill */}
        {config.tagline && (
          <div style={{
            display: 'flex',
            background: `rgba(${r},${g},${b},0.12)`,
            color: primary,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            padding: '8px 20px',
            borderRadius: 100,
            marginBottom: 32,
          }}>
            {config.tagline}
          </div>
        )}

        {/* Business name */}
        <div style={{
          fontSize: 72,
          fontWeight: 800,
          color: '#0f172a',
          letterSpacing: '-2px',
          lineHeight: 1.1,
          maxWidth: 900,
          marginBottom: 24,
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          {config.businessName}
        </div>

        {/* Hero headline */}
        <div style={{
          fontSize: 30,
          color: '#4b5563',
          maxWidth: 800,
          lineHeight: 1.5,
          display: 'flex',
        }}>
          {config.heroSubheadline || config.seoDescription || ''}
        </div>

        {/* Founder name + XsitPlan badge */}
        <div style={{
          position: 'absolute',
          bottom: 56,
          left: 80,
          display: 'flex',
          alignItems: 'center',
          gap: 24,
        }}>
          {config.founderName && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <div style={{
                width: 48, height: 48,
                borderRadius: '50%',
                background: primary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: 20,
                fontWeight: 800,
              }}>
                {config.founderName.charAt(0)}
              </div>
              <div style={{ fontSize: 20, fontWeight: 600, color: '#374151', display: 'flex' }}>
                {config.founderName}
              </div>
            </div>
          )}
        </div>

        {/* XsitPlan attribution — bottom right */}
        <div style={{
          position: 'absolute',
          bottom: 56,
          right: 80,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 18,
          color: '#9ca3af',
        }}>
          Built with{' '}
          <span style={{ color: primary, fontWeight: 700, display: 'flex' }}>XsitPlan</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
