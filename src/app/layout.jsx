// 🌐 WelcomingWeb Help Center — Nextra Root Layout
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

import Image from 'next/image'
import Link from 'next/link'

import InjectSearchWidget from '@components/integration/InjectSearchWidget'
import InjectChatbotWidget from '@components/integration/InjectChatbotWidget'
import PopupModalTrigger from '@components/popup/PopupModalTrigger'
import MobileSearchTriggerButton from '@components/search/MobileSearchTriggerButton'
import CustomFooter from '@components/layout/CustomFooter'

import 'nextra-theme-docs/style.css'
import './globals.css'

// ───────────────────────────────────────────────────────────────────────────────
// SEO / Branding
// ───────────────────────────────────────────────────────────────────────────────
const BRAND = {
  siteName: 'WelcomingWeb Help Center',
  domain: 'help.welcomingweb.com',
  rootUrl: 'https://help.welcomingweb.com',
  mainUrl: 'https://welcomingweb.com',
  twitterHandle: '@WelcomingWeb', // update if different
  ogImage: 'https://help.welcomingweb.com/og/help-center-og.png' // provide this asset
}

export const metadata = {
  metadataBase: new URL(BRAND.rootUrl),
  title: {
    default: 'WelcomingWeb Help Center',
    template: '%s — WelcomingWeb Help Center'
  },
  description:
    'Official help and developer documentation for WelcomingWeb — the next-gen, AI-centred accessibility platform. Learn installation, widget configuration, remediation, and compliance workflows.',
  keywords: [
    'WelcomingWeb',
    'Accessibility',
    'AccessiblyKit',
    'WCAG',
    'ADA',
    'EN 301 549',
    'AI Accessibility',
    'Assistive Widgets',
    'Remediation',
    'Compliance',
    'Developer Docs',
    'Help Center'
  ],
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'WelcomingWeb Help Center',
    description:
      'Learn how to install, configure, and use WelcomingWeb widgets, tools, and AI-powered accessibility features.',
    url: BRAND.rootUrl,
    siteName: BRAND.siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: BRAND.ogImage,
        width: 1200,
        height: 630,
        alt: 'WelcomingWeb Help Center'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WelcomingWeb Help Center',
    description:
      'Explore support articles, developer guides, and platform documentation for WelcomingWeb.',
    creator: BRAND.twitterHandle,
    images: [BRAND.ogImage]
  },
  applicationName: 'WelcomingWeb Help Center',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2962FF' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1220' }
  ],
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png'
  }
}

// 🎉 Optional banner (keep/edit/remove)
const banner = (
  <Banner storageKey="welcomingweb-docs-banner">
    🎉 New: AI Sign Language Avatars now in beta!{' '}
    <a href="/ai-remediations/sign-language-interpreter" style={{ textDecoration: 'underline' }}>
      Learn more →
    </a>
  </Banner>
)

const navbar = (
  <Navbar
    align="left"
    logo={
      <div className="flex items-center shrink-0 min-w-[260px] sm:min-w-[280px]">
        {/* Logo */}
        <div className="relative w-44 h-10" aria-label="WelcomingWeb">
          <Image
            src="/brand/welcomingweb-logo.png"
            alt="WelcomingWeb"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Badge */}
        <span className="px-2 py-1 text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md whitespace-nowrap leading-none ml-2">
          HELP CENTER
        </span>
      </div>
    }
  >
    <div className="flex items-center justify-between w-full flex-wrap gap-4">
      {/* Right section */}
      <div className="flex items-center justify-end flex-grow gap-4 min-w-0">
        {/* Support / Contact */}
        <PopupModalTrigger url="https://welcomingweb.com/contact" />

        {/* Main site link */}
        <Link
          href={BRAND.mainUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition-all duration-300"
          aria-label="Visit WelcomingWeb.com"
        >
          WelcomingWeb.com
        </Link>

        {/* Mobile Search Button */}
        <MobileSearchTriggerButton />

        {/* Desktop Search Widget Mount */}
        <div className="flex-shrink max-w-xs w-full hidden sm:block" aria-hidden="true">
          <div id="sparc-search-container" data-mode="popup" className="w-full" />
        </div>
      </div>
    </div>
  </Navbar>
)

const footer = <CustomFooter />

// JSON-LD helpers
function JsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WelcomingWeb',
    url: BRAND.mainUrl,
    logo: 'https://welcomingweb.com/brand/welcomingweb-logo.png',
    sameAs: [
      'https://x.com/WelcomingWeb',
      'https://www.linkedin.com/company/welcomingweb'
      // add others if available
    ]
  }

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND.siteName,
    url: BRAND.rootUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BRAND.rootUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  const collectionPage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'WelcomingWeb Help Center',
    url: BRAND.rootUrl,
    description:
      'Official help and developer documentation for WelcomingWeb — installation, configuration, remediation, and compliance guides.'
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }}
      />
    </>
  )
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        {/* Icons / Canonical */}
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href={BRAND.rootUrl} />

        {/* Performance hints */}
        <link rel="preconnect" href="https://cdn.welcomingweb.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdn.welcomingweb.com" />

        {/* Robots fallback for non-Next crawlers */}
        <meta name="robots" content="index,follow,max-image-preview:large" />

        {/* Viewport (Nextra often includes this; safe to keep) */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* JSON-LD (Organization, WebSite, CollectionPage) */}
        <JsonLd />
      </Head>
      <body>
        {/* First-party widgets (defer network where possible within components) */}
        <InjectSearchWidget />
        <InjectChatbotWidget />

        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          search={null}
          // Update to your new repo if migrated
          docsRepositoryBase="https://github.com/welcomingweb/help-center/blob/main"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
