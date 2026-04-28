import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'
import HelpCenterSchema from '@components/seo/HelpCenterSchema'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

const HELP_BASE = 'https://help.welcomingweb.com'

export async function generateMetadata(props) {
  const params = (await props.params) ?? {}
  const mdxPath = Array.isArray(params.mdxPath) ? params.mdxPath : []
  const { metadata } = await importPage(mdxPath)
  const canonical = mdxPath.length
    ? `${HELP_BASE}/${mdxPath.join('/')}`
    : HELP_BASE

  return {
    ...metadata,
    alternates: {
      ...(metadata?.alternates ?? {}),
      canonical
    }
  }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
  const params = (await props.params) ?? {}
  const mdxPath = Array.isArray(params.mdxPath) ? params.mdxPath : []
  const result = await importPage(mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <HelpCenterSchema mdxPath={mdxPath} metadata={metadata} />
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
