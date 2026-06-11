import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { config } from '@/lib/config'

export const metadata: Metadata = {
  metadataBase: new URL(config.siteUrl || 'https://xsitplan.com'),
  title: config.businessName + (config.tagline ? ' — ' + config.tagline : ''),
  description: config.seoDescription || config.tagline,
  openGraph: {
    title: config.businessName,
    description: config.seoDescription || config.tagline,
    url: config.siteUrl,
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: config.businessName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.businessName,
    description: config.seoDescription || config.tagline,
    images: ['/opengraph-image'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content={config.brandPrimary} />
        {config.gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${config.gaId}');`,
              }}
            />
          </>
        )}
        <style>{`:root { --brand-primary: ${config.brandPrimary}; --brand-primary-dark: ${config.brandSecondary}; --brand-primary-light: ${hexToRgba(config.brandPrimary, 0.1)}; }`}</style>
      </head>
      <body>
        {config.comingSoon ? (
          <ComingSoon />
        ) : (
          <>
            <Nav />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  )
}

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace('#', '')
  try {
    const r = parseInt(h.slice(0,2), 16)
    const g = parseInt(h.slice(2,4), 16)
    const b = parseInt(h.slice(4,6), 16)
    return `rgba(${r},${g},${b},${alpha})`
  } catch {
    return `rgba(124,58,237,${alpha})`
  }
}

function ComingSoon() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      background: '#fafafa',
      textAlign: 'center',
    }}>
      <div style={{
        display: 'inline-block',
        background: hexToRgba(config.brandPrimary, 0.1),
        color: config.brandPrimary,
        fontSize: 13,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        padding: '5px 14px',
        borderRadius: 100,
        marginBottom: 24,
      }}>Coming Soon</div>
      <h1 style={{ fontSize: 'clamp(28px,5vw,52px)', fontWeight: 800, color: '#0f172a', letterSpacing: -1, marginBottom: 16, lineHeight: 1.15 }}>
        {config.comingSoonHeadline}
      </h1>
      <p style={{ fontSize: 18, color: '#6b7280', maxWidth: 480, marginBottom: 40, lineHeight: 1.65 }}>
        {config.comingSoonSubtext}
      </p>
      <form
        name="coming-soon-waitlist"
        method="POST"
        data-netlify="true"
        style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: 420 }}
      >
        <input type="hidden" name="form-name" value="coming-soon-waitlist" />
        <input
          type="email"
          name="email"
          placeholder={config.comingSoonEmailLabel}
          required
          style={{
            flex: 1, minWidth: 220, padding: '12px 16px',
            border: '1px solid #d1d5db', borderRadius: 8, fontSize: 15, outline: 'none',
          }}
        />
        <button type="submit" style={{
          background: config.brandPrimary, color: '#fff',
          padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 15,
          border: 'none', cursor: 'pointer',
        }}>Notify Me</button>
      </form>
      <p style={{ marginTop: 48, fontSize: 13, color: '#9ca3af' }}>
        Powered by <a href="https://xsitplan.com" style={{ color: config.brandPrimary, textDecoration: 'none' }}>XsitPlan</a>
      </p>
    </div>
  )
}
