import { LinkArrowIcon } from 'nextra/icons'

const ExternalLink = ({ children }) => (
  <>
    {children}&thinsp;
    <LinkArrowIcon height="1em" className="inline align-baseline shrink-0" />
  </>
);

export default {
  index: {
    title: '',
    display: 'hidden',
    theme: {
      sidebar: false,
      navbar: false,
      toc: false,
      layout: 'full',
      footer: true,
      breadcrumb: false,
      pagination: false,
      typesetting: 'default'
    }
  },
  'getting-started': 'Getting Started',
  'widget-configuration': 'Widget Configuration',
  'integrations': 'Platform Integrations',
  'dashboard-analytics': 'Dashboard & Analytics',
  'ai-remediations': 'AI Remediations & Features',
  'developer-resources': 'Developer Resources',
  'compliance-standards': 'Compliance & Standards',
  'rules': 'Accessibility Rules'
}
