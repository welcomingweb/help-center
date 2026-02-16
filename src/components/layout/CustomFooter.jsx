'use client'

import Image from 'next/image'
import Link from 'next/link'

const MAIN_SITE_URL = process.env.NEXT_PUBLIC_MAIN_URL || 'https://welcomingweb.com'
const ADMIN_URL = process.env.NEXT_PUBLIC_ADMIN_URL || 'https://admin.welcomingweb.com'

const ComplianceStandards = [
  { key: "WCAG", value: "WCAG 2.1 Guidelines" },
  { key: "ADA", value: "ADA Compliance" },
  { key: "Section 508", value: "Section 508" },
  { key: "EN 301 549", value: "EN 301 549" },
  { key: "AODA", value: "AODA Standards" },
  { key: "HIPAA", value: "HIPAA Compliance" },
  { key: "GDPR", value: "GDPR Compliance" },
  { key: "COPPA", value: "COPPA Compliance" },
  { key: "FERPA", value: "FERPA Compliance" },
  { key: "ATAG", value: "ATAG 2.0 Guidelines" },
  { key: "CVAA", value: "CVAA Compliance" },
  { key: "EAA", value: "European Accessibility Act (EAA)" },
]

const navigation = {
  platform: [
    { name: "Accessibility Widget", href: `${MAIN_SITE_URL}/accessibility-widget` },
    { name: "Scans & Reports", href: `${MAIN_SITE_URL}/scans-reports` },
    { name: "Compliance Monitoring", href: `${MAIN_SITE_URL}/compliance-monitoring` },
    { name: "AI Remediations", href: `${MAIN_SITE_URL}/ai-remediations` },
    { name: "CMS Integrations", href: `${MAIN_SITE_URL}/integrations` },
  ],
  solutions: [
    { name: "Startups", href: `${MAIN_SITE_URL}/startups` },
    { name: "Enterprise", href: `${MAIN_SITE_URL}/enterprise` },
    { name: "Government", href: `${MAIN_SITE_URL}/government` },
    { name: "Ecommerce", href: `${MAIN_SITE_URL}/ecommerce` },
    { name: "Education", href: `${MAIN_SITE_URL}/education` },
    { name: "Healthcare", href: `${MAIN_SITE_URL}/healthcare` },
  ],
  resources: [
    { name: "Blog", href: `${MAIN_SITE_URL}/blogs` },
    { name: "Features", href: `${MAIN_SITE_URL}/features` },
    { name: "Enterprise Services", href: `${MAIN_SITE_URL}/enterprise-services` },
    { name: "Innovation Research", href: `${MAIN_SITE_URL}/innovation-research` },
    { name: "Playground", href: `${MAIN_SITE_URL}/playground` },
    { name: "Help Center", href: "/" },
    { name: "Integrations", href: `${MAIN_SITE_URL}/integrations` },
    { name: "Developer API", href: "/developer-resources" },
  ],
  about: [
    { name: "About Us", href: `${MAIN_SITE_URL}/about` },
    { name: "Contact Us", href: `${MAIN_SITE_URL}/contact` },
  ],
  getStarted: [
    { name: "Pricing", href: `${MAIN_SITE_URL}/pricing` },
    { name: "Be Partner", href: `${MAIN_SITE_URL}/partnership` },
    { name: "Book a Demo", href: `${MAIN_SITE_URL}/book-demo` },
    { name: "Log in", href: `${ADMIN_URL}/login` },
    { name: "Start Free", href: `${ADMIN_URL}/register` },
    { name: "Free Website Audit", href: `${MAIN_SITE_URL}/audit` },
  ],
  compliance: ComplianceStandards.map((cs) => ({
    name: cs.value,
    href: `${MAIN_SITE_URL}/compliance-monitoring/${cs.key.toLowerCase().replace(/ /g, "_")}`,
  })),
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/welcoming-web",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/WelcomingWeb",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/welcomingweb",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/welcomingweb",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@WelcomingWeb",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200" role="contentinfo">
      <div className="mx-auto max-w-[85%] px-6 pt-12 pb-8 sm:pt-24 lg:px-6 lg:pt-32">
        {/* Main Footer Grid - Desktop/Tablet Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-6 xl:gap-8">
            {/* Company Information - Wider column */}
            <section
              aria-labelledby="footer-company"
              className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col items-start gap-5"
            >
              <h2 id="footer-company" className="sr-only">Company Information</h2>
              <Image
                src="/brand/welcomingweb-logo.png"
                alt="WelcomingWeb - Web Accessibility Solutions"
                width={200}
                height={200}
                className="dark:invert"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm">
                Making the web accessible for everyone through AI-powered
                compliance solutions.
              </p>
            </section>

            {/* Navigation Columns - Flexible widths */}
            <div className="col-span-12 md:col-span-6 lg:col-span-8">
              <div className="grid grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-12">
                {/* Platform */}
                <nav aria-labelledby="footer-platform">
                  <div id="footer-platform" className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-6">Platform</div>
                  <ul role="list" className="space-y-4">
                    {navigation.platform.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Solutions */}
                <nav aria-labelledby="footer-solutions" className="ml-5">
                  <div id="footer-solutions" className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-6">Solutions</div>
                  <ul role="list" className="space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Resources */}
                <nav aria-labelledby="footer-resources">
                  <div id="footer-resources" className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-6">Resources</div>
                  <ul role="list" className="space-y-4">
                    {navigation.resources.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* About */}
                <nav aria-labelledby="footer-about">
                  <div id="footer-about" className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-6">About</div>
                  <ul role="list" className="space-y-4">
                    {navigation.about.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Compliance Standards */}
                <nav aria-labelledby="footer-compliance">
                  <div id="footer-compliance" className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-6">
                    Compliance Standards
                  </div>
                  <ul role="list" className="space-y-4">
                    {navigation.compliance.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Get Started */}
                <nav aria-labelledby="footer-getstarted">
                  <div id="footer-getstarted" className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-6">Get Started</div>
                  <ul role="list" className="space-y-4">
                    {navigation.getStarted.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Company Information */}
          <section
            aria-labelledby="footer-company-mobile"
            className="flex flex-col items-center gap-5 mb-12"
          >
            <h2 id="footer-company-mobile" className="sr-only">Company Information</h2>
            <Image
              src="/brand/welcomingweb-logo.png"
              alt="WelcomingWeb - Web Accessibility Solutions"
              width={200}
              height={200}
              className="dark:invert"
            />
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center max-w-sm">
              Making the web accessible for everyone through AI-powered
              compliance solutions.
            </p>
          </section>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            {/* Platform */}
            <nav aria-labelledby="footer-platform-mobile">
              <div id="footer-platform-mobile" className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Platform</div>
              <ul role="list" className="space-y-3">
                {navigation.platform.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Solutions */}
            <nav aria-labelledby="footer-solutions-mobile">
              <div id="footer-solutions-mobile" className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Solutions</div>
              <ul role="list" className="space-y-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Resources */}
            <nav aria-labelledby="footer-resources-mobile">
              <div id="footer-resources-mobile" className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Resources</div>
              <ul role="list" className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* About */}
            <nav aria-labelledby="footer-about-mobile">
              <div id="footer-about-mobile" className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">About</div>
              <ul role="list" className="space-y-3">
                {navigation.about.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Compliance Standards - Full width on mobile */}
            <nav aria-labelledby="footer-compliance-mobile" className="col-span-2">
              <div id="footer-compliance-mobile" className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Compliance Standards
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {navigation.compliance.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Legal Footer (Bottom Section) */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <nav aria-label="Legal links" className="mb-8 px-4">
            <ul className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 sm:gap-x-6 sm:gap-y-2 text-xs sm:text-sm max-w-4xl mx-auto">
              {[
                { href: `${MAIN_SITE_URL}/terms-conditions`, label: 'Terms of Use' },
                { href: `${MAIN_SITE_URL}/privacy-policy`, label: 'Privacy Policy' },
                { href: `${MAIN_SITE_URL}/cookie-policy`, label: 'Cookie Policy' },
                { href: `${MAIN_SITE_URL}/font-license`, label: 'Font License' },
                { href: `${MAIN_SITE_URL}/accessibility-policy`, label: 'Accessibility Statement' },
                { href: `${MAIN_SITE_URL}/statement-of-compliance`, label: 'Statement of Compliance' },
              ].map(link => (
                <li key={link.href} className="text-center sm:text-left">
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Copyright */}
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Welcomingweb.com. All rights reserved.
              </p>
            </div>

            {/* Right: Description & Social Icons */}
            <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right order-1 md:order-2 mt-0 lg:mt-5">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Welcoming Web is a web accessibility solution for building inclusive websites.
              </p>

              <div className="flex justify-center md:justify-end gap-x-5">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transform hover:-translate-y-0.5"
                    aria-label={`Follow us on ${item.name}`}
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
