'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-800 dark:text-gray-200 py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-h-[80px]">
          {/* Logo section */}
          <div className="flex-shrink-0 order-1 md:order-none">
            <Link href="/" className="flex items-center" aria-label="Home">
              <div className="relative w-32 h-8 mr-3">
                <Image
                  src="/brand/welcomingweb-logo.png"
                  alt="WelcomingWeb"
                  fill
                  className="object-contain dark:invert"
                />
              </div>
            </Link>
          </div>

          {/* Center Text */}
          <div className="text-center order-3 md:order-none w-full md:w-auto py-2 md:py-0">
            <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} WelcomingWeb.
              <br />
              Empowering digital inclusion, worldwide.
            </span>
          </div>

          {/* Socials – placeholder, update as needed */}
          <div className="flex space-x-4">
            {[
              {
                href: 'https://www.linkedin.com/company/welcomingweb',
                label: 'Follow us on LinkedIn',
                icon: (
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                ),
                className:
                  'text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 transition-colors'
              },
              {
                href: 'mailto:support@welcomingweb.com',
                label: 'Email us',
                icon: (
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                ),
                className:
                  'text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors'
              }
            ].map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener"
                aria-label={social.label}
                title={social.label}
                className={social.className}
              >
                <span className="icon">
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                    focusable="false"
                    className="w-5 h-5 fill-current"
                  >
                    <g>{social.icon}</g>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
