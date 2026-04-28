// Help Center per-page JSON-LD schema injection
// Nextra MDX path'ine göre otomatik schema tipi belirler

const HELP_SITE = 'https://help.welcomingweb.com'
const MAIN_SITE = 'https://welcomingweb.com'

// Path segment → schema type
const SCHEMA_TYPE_MAP = {
  'getting-started': 'HowTo',
  'integrations': 'HowTo',
  'accessibility-best-practices': 'Article',
  'compliance-standards': 'Article',
  'rules': 'TechArticle',
  'ai-remediations': 'TechArticle',
  'dashboard-analytics': 'TechArticle',
  'developer-resources': 'TechArticle',
  'mobile': 'TechArticle',
  'widget-configuration': 'TechArticle',
}

// Category display names
const CATEGORY_LABELS = {
  'getting-started': 'Getting Started',
  'integrations': 'Integrations',
  'accessibility-best-practices': 'Accessibility Best Practices',
  'compliance-standards': 'Compliance Standards',
  'rules': 'Accessibility Rules',
  'ai-remediations': 'AI Remediations',
  'dashboard-analytics': 'Dashboard & Analytics',
  'developer-resources': 'Developer Resources',
  'mobile': 'Mobile',
  'widget-configuration': 'Widget Configuration',
  'platforms': 'Platforms',
}

function toLabel(segment) {
  return CATEGORY_LABELS[segment] ?? segment
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

function buildBreadcrumb(path) {
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Help Center', item: HELP_SITE },
  ]

  let current = HELP_SITE
  path.forEach((segment, i) => {
    current = `${current}/${segment}`
    items.push({
      '@type': 'ListItem',
      position: i + 2,
      name: toLabel(segment),
      item: current,
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

function buildContentSchema(type, title, description, url) {
  const publisher = {
    '@type': 'Organization',
    '@id': `${MAIN_SITE}/#organization`,
    name: 'Welcoming Web',
    logo: {
      '@type': 'ImageObject',
      url: `${MAIN_SITE}/brand/welcomingweb-logo.png`,
    },
  }

  if (type === 'HowTo') {
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: title,
      description: description || '',
      url,
      inLanguage: 'en',
      publisher,
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': type, // Article | TechArticle | WebPage
    name: title,
    headline: title,
    description: description || '',
    url,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Welcoming Web Help Center',
      url: HELP_SITE,
    },
    publisher,
  }
}

/**
 * Help Center path-based JSON-LD schema injector.
 *
 * Usage in page.jsx:
 *   <HelpCenterSchema mdxPath={mdxPath} metadata={metadata} />
 *
 * Frontmatter FAQPage desteği için MDX dosyasına şunu ekleyin:
 *   faqs:
 *     - q: "Soru 1"
 *       a: "Cevap 1"
 */
export default function HelpCenterSchema({ mdxPath, metadata }) {
  const path = Array.isArray(mdxPath) ? mdxPath : []
  const url = path.length ? `${HELP_SITE}/${path.join('/')}` : HELP_SITE
  const title = metadata?.title ?? 'Welcoming Web Help Center'
  const description = metadata?.description ?? ''

  const schemas = []

  // BreadcrumbList — her sayfada
  schemas.push(buildBreadcrumb(path))

  // Content schema
  if (path.length === 0 || path.length === 1) {
    // Root veya category root → WebPage
    schemas.push(buildContentSchema('WebPage', title, description, url))
  } else {
    // Content page — category'ye göre tip belirle
    const category = path[0]
    const type = SCHEMA_TYPE_MAP[category] ?? 'Article'
    schemas.push(buildContentSchema(type, title, description, url))
  }

  // FAQPage — MDX frontmatter'dan (opsiyonel)
  // Kullanım: frontmatter'a `faqs: [{q: "...", a: "..."}]` ekleyin
  const faqs = metadata?.faqs
  if (Array.isArray(faqs) && faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    })
  }

  return schemas.map((schema, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ))
}
