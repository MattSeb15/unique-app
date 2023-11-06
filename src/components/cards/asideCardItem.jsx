'use client'
import IconLinkText from '../links/iLinkText'
import { usePathname, useSearchParams } from 'next/navigation'

export default function AsideCardItem({
	children,
	href = '',
	text = 'placeholder',
}) {
	const path = usePathname()
	const params = useSearchParams()
	console.log(params)
	console.log(path)
	const isActive = path === href
	return (
		<div className='flex items-end flex-col'>
			<IconLinkText
				href={href}
				className={`text-white p-2 w-[70%] md:w-[90%] text-base text-center font-normal hover:underline h-12 flex rounded-l-lg justify-center md:justify-start ${
					isActive && 'border-r-2 border-blue-300 bg-slate-700/30'
				}`}
				text={text}>
				{' '}
				{children}
			</IconLinkText>
		</div>
	)
}
