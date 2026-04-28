import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'
import FreeScanCTAInjector from '@components/cta/FreeScanCTAInjector'

const themeComponents = getThemeComponents()
const joinClassNames = (...values) => values.filter(Boolean).join(' ')

const headingStyles = {
  h1: 'x:mt-2 x:text-4xl',
  h2: 'x:mt-10 x:border-b x:pb-1 x:text-3xl nextra-border',
  h3: 'x:mt-8 x:text-2xl',
  h4: 'x:mt-8 x:text-xl',
  h5: 'x:mt-8 x:text-lg',
  h6: 'x:mt-8 x:text-base'
}

const createPlainHeading = (Tag) =>
  function PlainHeading({ children, id, className, ...props }) {
    const resolvedClassName =
      className === 'sr-only'
        ? 'x:sr-only'
        : joinClassNames(
            'x:tracking-tight x:text-slate-900 x:dark:text-slate-100',
            Tag === 'h1' ? 'x:font-bold' : 'x:font-semibold x:target:animate-[fade-in_1.5s]',
            headingStyles[Tag],
            className
          )

    return (
      <Tag id={id} className={resolvedClassName} {...props}>
        {children}
      </Tag>
    )
  }

const plainHeadings = {
  h1: createPlainHeading('h1'),
  h2: createPlainHeading('h2'),
  h3: createPlainHeading('h3'),
  h4: createPlainHeading('h4'),
  h5: createPlainHeading('h5'),
  h6: createPlainHeading('h6')
}

export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...plainHeadings,
    FreeScanCTAInjector,
    ...components
  }
}
