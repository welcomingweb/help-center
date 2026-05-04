import type { MetadataRoute } from 'next'
import { readdir } from 'fs/promises'
import path from 'path'

const BASE_URL = 'https://help.welcomingweb.com'
const CONTENT_DIR = path.join(process.cwd(), 'src/content')
const LAST_MODIFIED = '2026-05-04'

// Paths that have redirects in next.config.mjs — exclude from sitemap
// to avoid SEMrush "Redirected pages in sitemap" errors
const EXCLUDED_PATHS = new Set(['/rules'])

async function getMdxUrls(dir: string, urlPrefix: string = ''): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true })
  const urls: string[] = []

  for (const entry of entries) {
    // Skip Nextra meta/config files
    if (entry.name.startsWith('_')) continue

    if (entry.isDirectory()) {
      const subUrls = await getMdxUrls(
        path.join(dir, entry.name),
        `${urlPrefix}/${entry.name}`
      )
      urls.push(...subUrls)
    } else if (entry.name.endsWith('.mdx')) {
      const slug = entry.name.replace(/\.mdx$/, '')
      if (slug === 'index') {
        urls.push(urlPrefix || '/')
      } else {
        urls.push(`${urlPrefix}/${slug}`)
      }
    }
  }

  return urls
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls = await getMdxUrls(CONTENT_DIR)

  const filtered = urls.filter((url) => !EXCLUDED_PATHS.has(url))

  return filtered.map((url) => ({
    url: `${BASE_URL}${url}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: url === '/' ? 1.0 : url.split('/').length === 2 ? 0.8 : 0.7,
  }))
}
