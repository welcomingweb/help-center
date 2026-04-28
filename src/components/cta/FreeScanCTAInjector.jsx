'use client';

import { usePathname } from 'next/navigation';
import { MiniCheckSiteSection } from '@components/mdx/HelpUI';

// Pages where the CTA should appear, with their description text.
// Source: high-impression help pages (16-month GSC data).
const CTA_MAP = {
  '/rules/aria-allowed-role':                          'Run a free accessibility scan on your site',
  '/rules/marquee':                                    'Scan your site for marquee + 90 other WCAG issues',
  '/rules/aria-roles':                                 'Run a free accessibility scan on your site',
  '/rules/html-has-lang':                              'Check html-lang issues on your site',
  '/':                                                 'Get a free accessibility audit of your site',
  '/rules/aria-deprecated-role':                       'Find deprecated ARIA roles on your site',
  '/compliance-standards/wcag-compliance':             'Check your site against WCAG 2.2',
  '/rules/target-size':                                'Find target size issues on your site',
  '/rules/landmark-unique':                            'Run a free accessibility scan on your site',
  '/rules/color-contrast':                             'Find contrast issues on your site',
  '/accessibility-best-practices/alt-text-guidelines': 'Check alt text issues on your site',
  '/rules/document-title':                             'Run a free accessibility scan on your site',
  '/rules/aria-valid-attr':                            'Find ARIA issues on your site',
  '/rules/accesskeys':                                 'Run a free accessibility scan on your site',
  '/rules/frame-tested':                               'Run a free accessibility scan on your site',
};

export default function FreeScanCTAInjector() {
  const pathname = usePathname();
  const description = CTA_MAP[pathname];

  if (!description) return null;

  return (
    <MiniCheckSiteSection
      header={{ icon: 'scan' }}
      description={description}
      buttonText="Run free audit"
      hiddenIcon={true}
      className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-[#EDEEF3] p-8 mb-8 rounded-2xl"
    />
  );
}
