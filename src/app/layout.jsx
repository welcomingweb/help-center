import { Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

import Image from 'next/image'
import Link from 'next/link'

import InjectChatbotWidget from '@components/integration/InjectChatbotWidget'
import InjectSearchWidget from '@components/integration/InjectSearchWidget'
import InjectTagManager from '@components/integration/InjectTagManager'
import CustomFooter from '@components/layout/CustomFooter'
import PopupModalTrigger from '@components/popup/PopupModalTrigger'
import MobileSearchTriggerButton from '@components/search/MobileSearchTriggerButton'
import FreeScanCTAInjector from '@components/cta/FreeScanCTAInjector'

import 'nextra-theme-docs/style.css'
import './globals.css'

const BRAND = {
  siteName: 'Welcoming Web Help Center',
  domain: 'help.welcomingweb.com',
  rootUrl: 'https://help.welcomingweb.com',
  mainUrl: 'https://welcomingweb.com',
  twitterHandle: '@Welcoming Web',
  ogImage: 'https://help.welcomingweb.com/og/help-center-og.png'
}

export const metadata = {
  metadataBase: new URL(BRAND.rootUrl),
  title: {
    default: 'Web Accessibility Tools & Documentation | Welcoming Web Help Center',
    template: '%s | Welcoming Web Help Center'
  },
  description:
    'Official help and developer documentation for Welcoming Web - the next-gen, AI-centered accessibility platform. Learn installation, widget configuration, remediation, and compliance workflows.',
  keywords: [
    'Welcoming Web',
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
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Web Accessibility Tools & Documentation | Welcoming Web Help Center',
    description:
      'Learn how to install, configure, and use Welcoming Web widgets, tools, and AI-powered accessibility features.',
    url: BRAND.rootUrl,
    siteName: BRAND.siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: BRAND.ogImage,
        width: 1200,
        height: 630,
        alt: 'Welcoming Web Help Center'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Accessibility Tools & Documentation | Welcoming Web Help Center',
    description:
      'Explore support articles, developer guides, and platform documentation for Welcoming Web.',
    creator: BRAND.twitterHandle,
    images: [BRAND.ogImage]
  },
  applicationName: 'Welcoming Web Help Center',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2962FF' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1220' }
  ]
}

const banner = (
  <Banner storageKey="welcomingweb-docs-banner">
    New: AI Sign Language Avatars now in beta!{' '}
    <a href="/ai-remediations/sign-language-interpreter" style={{ textDecoration: 'underline' }}>
      View Sign Language feature {'->'}
    </a>
  </Banner>
)

const navbar = (
  <Navbar
    align="left"
    logo={
      <div className="flex items-center shrink-0 min-w-[260px] sm:min-w-[280px]">
        <div className="relative w-44 h-10" aria-label="Welcoming Web">
          <Image
            src="/brand/welcomingweb-logo.png"
            alt="Welcoming Web"
            fill
            priority
            className="object-contain"
          />
        </div>

        <span className="px-2 py-1 text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md whitespace-nowrap leading-none ml-2">
          HELP CENTER
        </span>
      </div>
    }
  >
    <div className="flex items-center justify-between w-full flex-wrap gap-4">
      <div className="flex items-center justify-end flex-grow gap-4 min-w-0">
        <PopupModalTrigger url="https://welcomingweb.com/contact" />

        <Link
          href={BRAND.mainUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 transition-all duration-300"
          aria-label="Visit Welcoming Web.com"
        >
          Welcoming Web.com
        </Link>

        <MobileSearchTriggerButton />

        <div className="flex-shrink max-w-xs w-full hidden sm:block" aria-hidden="true">
          <div id="sparc-search-container" data-mode="popup" className="w-full" />
        </div>
      </div>
    </div>
  </Navbar>
)

const footer = <CustomFooter />

function JsonLd() {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Welcoming Web',
    url: BRAND.mainUrl,
    logo: 'https://welcomingweb.com/brand/welcomingweb-logo.png',
    sameAs: ['https://x.com/Welcoming Web', 'https://www.linkedin.com/company/welcomingweb']
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
    name: 'Welcoming Web Help Center',
    url: BRAND.rootUrl,
    description:
      'Official help and developer documentation for Welcoming Web - installation, configuration, remediation, and compliance guides.'
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
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://cdn.welcomingweb.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://cdn.welcomingweb.com" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <JsonLd />
      </Head>
      <body>
        <InjectTagManager />
        {/* <InjectSearchWidget /> */}
        {/* <InjectChatbotWidget /> */}

        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          search={null}
          docsRepositoryBase="https://github.com/welcomingweb/help-center/blob/main"
        >
          <FreeScanCTAInjector />
          {children}
        </Layout>
      </body>
    </html>
  )
}
