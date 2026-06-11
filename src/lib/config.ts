/**
 * Central config — reads all env vars, provides typed access throughout the app.
 * All content comes from environment variables set by XsitPlan during provisioning.
 */

export const config = {
  // Identity
  businessName: process.env.BUSINESS_NAME || 'My Business',
  tagline: process.env.BUSINESS_TAGLINE || '',
  founderName: process.env.FOUNDER_NAME || 'The Founder',
  founderBio: process.env.FOUNDER_BIO || '',
  founderLinkedin: process.env.FOUNDER_LINKEDIN || '',
  linkedinHeadline: process.env.LINKEDIN_HEADLINE || '',

  // Branding
  brandPrimary: process.env.BRAND_PRIMARY_COLOR || '#7c3aed',
  brandSecondary: process.env.BRAND_SECONDARY_COLOR || '#5b21b6',

  // Hero
  heroHeadline: process.env.HERO_HEADLINE || 'Your business, built for you.',
  heroSubheadline: process.env.HERO_SUBHEADLINE || '',
  heroCtaText: process.env.HERO_CTA_TEXT || 'Book a Free Call',

  // About
  aboutHeadline: process.env.ABOUT_HEADLINE || '',
  aboutParagraph: process.env.ABOUT_PARAGRAPH || '',
  aboutAccentLabel: process.env.ABOUT_ACCENT_LABEL || 'What I do',
  aboutAccentText: process.env.ABOUT_ACCENT_TEXT || '',

  // Offer
  offerStatement: process.env.OFFER_STATEMENT || '',
  offerCtaText: process.env.OFFER_CTA_TEXT || "Let's Work Together",

  // Services
  service1Name: process.env.SERVICE_1_NAME || '',
  service1Desc: process.env.SERVICE_1_DESC || '',
  service1Price: process.env.SERVICE_1_PRICE || '',
  service2Name: process.env.SERVICE_2_NAME || '',
  service2Desc: process.env.SERVICE_2_DESC || '',
  service2Price: process.env.SERVICE_2_PRICE || '',
  service3Name: process.env.SERVICE_3_NAME || '',
  service3Desc: process.env.SERVICE_3_DESC || '',
  service3Price: process.env.SERVICE_3_PRICE || '',

  // Lead Magnet
  leadMagnetTitle: process.env.LEAD_MAGNET_TITLE || '',
  leadMagnetFormat: process.env.LEAD_MAGNET_FORMAT || 'Free Guide',
  leadMagnetDesc: process.env.LEAD_MAGNET_DESC || '',
  leadMagnetCta: process.env.LEAD_MAGNET_CTA || 'Get It Free',

  // Social Proof
  socialProof1: process.env.SOCIAL_PROOF_1 || '',
  socialProof2: process.env.SOCIAL_PROOF_2 || '',
  socialProof3: process.env.SOCIAL_PROOF_3 || '',

  // Contact
  contactEmail: process.env.CONTACT_EMAIL || '',
  contactHeadline: process.env.CONTACT_HEADLINE || 'Ready to get started?',
  contactSubtext: process.env.CONTACT_SUBTEXT || "Let's have a conversation.",

  // SEO
  siteUrl: process.env.SITE_URL || '',
  seoDescription: process.env.SEO_DESCRIPTION || '',

  // Analytics
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',

  // Coming soon
  comingSoon: process.env.COMING_SOON === 'true',
  comingSoonHeadline: process.env.COMING_SOON_HEADLINE || 'Something great is coming.',
  comingSoonSubtext: process.env.COMING_SOON_SUBTEXT || "We're putting the finishing touches on something built just for you.",
  comingSoonEmailLabel: process.env.COMING_SOON_EMAIL_LABEL || 'Get notified when we launch',
} as const
