import Image from 'next/image'
import Link from 'next/link'

export default function KBCard({ title, href, icon, desc }) {
  return (
    <Link
      href={href}
      className="group block h-full p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-600"
      aria-labelledby={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="flex flex-col items-start text-left gap-4">
        <div className="p-3 bg-indigo-50 dark:bg-indigo-900 rounded-lg">
          <Image
            src={icon}
            alt=""
            width={28}
            height={28}
            className="dark:invert"
          />
        </div>

        <h3
          id={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
        >
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
          {desc}
        </p>

        <span className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium group-hover:underline underline-offset-2">
          Learn more
          <svg
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
