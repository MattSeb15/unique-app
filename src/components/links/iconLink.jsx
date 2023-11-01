import Link from 'next/link'
import React from 'react'

export default function IconLink({ children, href = '#' }) {
	return (
		<Link
			href={href}
			className='hidden xl:inline-flex items-center justify-center w-10 h-10 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1 mr-3'>
			{children}
		</Link>
	)
}
