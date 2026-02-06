import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'
 
export const generateStaticParams = generateStaticParamsFor('mdxPath')
 
export async function generateMetadata(props) {
  const params = props.params ?? {}
  const mdxPath = Array.isArray(params.mdxPath) ? params.mdxPath : []
  const { metadata } = await importPage(mdxPath)
  return metadata
}
 
const Wrapper = getMDXComponents().wrapper
 
export default async function Page(props) {
  const params = props.params ?? {}
  const mdxPath = Array.isArray(params.mdxPath) ? params.mdxPath : []
  const result = await importPage(mdxPath)
  const { default: MDXContent, toc, metadata } = result
  return (
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
