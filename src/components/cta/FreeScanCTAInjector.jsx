'use client';

import { usePathname } from 'next/navigation';
import { FreeScanCTA } from '@components/mdx/HelpUI';

// Pages where the CTA should appear, with their anchor text.
// Source: high-impression help pages (16-month GSC data).
// All links → https://welcomingweb.com/free-accessibility-scan
const CTA_MAP = {
  '/rules/aria-allowed-role':                       'Run a free accessibility scan on your site',
  '/rules/marquee':                                 'Scan your site for marquee + 90 other WCAG issues',
  '/rules/aria-roles':                              'Run a free accessibility scan on your site',
  '/rules/html-has-lang':                           'Check html-lang issues on your site (free scan)',
  '/':                                              'Get a free accessibility audit of your site',
  '/rules/aria-deprecated-role':                    'Find deprecated ARIA roles on your site (free scan)',
  '/compliance-standards/wcag-compliance':          'Check your site against WCAG 2.2 (free scan)',
  '/rules/target-size':                             'Find target size issues on your site (free scan)',
  '/rules/landmark-unique':                         'Run a free accessibility scan on your site',
  '/rules/color-contrast':                          'Find contrast issues on your site (free scan)',
  '/accessibility-best-practices/alt-text-guidelines': 'Check alt text issues on your site (free scan)',
  '/rules/document-title':                          'Run a free accessibility scan on your site',
  '/rules/aria-valid-attr':                         'Find ARIA issues on your site (free scan)',
  '/rules/accesskeys':                              'Run a free accessibility scan on your site',
  '/rules/frame-tested':                            'Run a free accessibility scan on your site',
};

export default function FreeScanCTAInjector() {
  const pathname = usePathname();
  const text = CTA_MAP[pathname];

  if (!text) return null;

  return <FreeScanCTA text={text} />;
}
