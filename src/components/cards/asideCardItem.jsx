import IconLinkText from '../links/iLinkText'

export default function AsideCardItem({
	children,
	href = '',
	text = 'placeholder',
}) {
	return (
		<div className='flex justify-end'>
			<IconLinkText
				href={href}
				className='text-white p-2 w-[70%] md:w-[90%] bg-slate-800 text-base text-center font-light hover:underline h-12 flex rounded-l-lg'
				text={text}>
				{' '}
				{children}
			</IconLinkText>
		</div>
	)
}
