import Link from 'next/link'

export default function Card({ title, href, children, icon }) {
  return (
    <Link
      href={href}
      className="group relative block h-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xs hover:shadow-sm transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
    >
      <div className="flex items-start space-x-4">
        {/* Conditionally render icon if it exists */}
        {icon && (
          <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors duration-200">
            {icon}
          </div>
        )}

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            {children}
          </p>
        </div>
      </div>
    </Link>
  )
}
