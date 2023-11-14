'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ITextHead({ links = [] }) {
	const path = usePathname()
	const getIsActive = href => path === href

	return (
		<>
			{links.map(link => (
				<Link
					key={link.id}
					href={link.href}
					className={`px-4 py-2 rounded-xl text-lg hover:bg-slate-800 hover:text-white ${
						getIsActive(link.href)
							? 'font-semibold text-white '
							: 'text-gray-400 '
					}`}>
					{link.text}
				</Link>
			))}
			{/* <Link
				href={''}
				className='bg-slate-800 px-4 py-2 rounded-xl text-lg font-medium text-white'>
				Preguntas
			</Link>
			<Link
				href={''}
				className='bg-slate-800 px-4 py-2 rounded-xl text-lg font-medium text-white'>
				Tags
			</Link> */}
		</>
	)
}
