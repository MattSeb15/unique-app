import ITextHead from '@/components/links/iTextHead'

export default function RootLayout({ children }) {
	const links = [
		{
			id: 1,
			href: '/u/preguntas',
			text: 'Preguntas',
		},
		{
			id: 2,
			href: '/u/preguntas/tags',
			text: 'Tags',
		},
	]
	return (
		<div className='px-1.5 sm:px-7 py-5 flex flex-col w-full'>
			<div className={`h-20 rounded-md w-full`}>
				<div className='h-full flex flex-row items-center gap-2 sm:gap-4 flex-wrap'>
					<ITextHead links={links} />
				</div>
			</div>
			{children}
		</div>
	)
}
