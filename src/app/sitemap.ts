import type { MetadataRoute } from 'next'
import { generateStaticParamsFor } from 'nextra/pages'

const BASE_URL = 'https://help.welcomingweb.com'

// Paths that have redirects in next.config.mjs — exclude from sitemap
// to avoid SEMrush "Redirected pages in sitemap" errors
const EXCLUDED_PATHS = new Set(['/rules'])

const getStaticParams = generateStaticParamsFor('mdxPath')

function toUrl(slug: string[]): string {
  const isIndex = slug.length === 0 || (slug.length === 1 && (slug[0] === '' || slug[0] === 'index'))
  return isIndex ? `${BASE_URL}/` : `${BASE_URL}/${slug.join('/')}`
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const params = await getStaticParams()
  const urls = new Set([`${BASE_URL}/`])

  for (const entry of params) {
    const slug: string[] = Array.isArray((entry as any)?.mdxPath) ? (entry as any).mdxPath : []
    if (slug[0] && (slug[0].startsWith('.') || slug[0].endsWith('.json'))) continue
    const url = toUrl(slug)
    const pathname = url.replace(BASE_URL, '')
    if (EXCLUDED_PATHS.has(pathname)) continue
    urls.add(url)
  }

  return Array.from(urls).map((url) => {
    const pathname = url.replace(BASE_URL, '') || '/'
    return {
      url,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: pathname === '/' ? 1.0 : pathname.split('/').length === 2 ? 0.8 : 0.7,
    }
  })
}
