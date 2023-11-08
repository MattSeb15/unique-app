'use client'
import IconLinkText from '../links/iLinkText'
import { usePathname } from 'next/navigation'

export default function AsideCardItem({
	children,
	href = '',
	text = 'placeholder',
}) {
	const path = usePathname()

	const isActive = path.startsWith(href)
	return (
		<div className='flex items-end flex-col sm:w-full'>
			<IconLinkText
				href={href}
				className={`text-white p-2 w-auto lg:w-[90%] text-base text-center hover:underline h-12 flex  rounded-t-lg sm:rounded-none sm:rounded-l-lg justify-end lg:justify-start ${
					isActive
						? 'border-b-2 sm:border-b-0 sm:border-r-2 border-blue-300 bg-slate-700/30 text-blue-300 font-medium'
						: 'font-normal'
				}`}
				text={text}>
				{' '}
				<div
					className={`${
						isActive ? 'text-blue-300' : 'text-white'
					} flex items-center`}>
					{children}
				</div>
			</IconLinkText>
		</div>
	)
}
