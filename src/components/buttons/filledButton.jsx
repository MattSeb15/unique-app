'use client'
import Link from 'next/link'

export default function FilledButton({
	text = 'FilledButton',
	href = '',
	onClick = () => {},
}) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className='text-white w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center'>
			{text}
		</Link>
	)
}
