import UniqueLink from '@/components/links/uniqueLink'

import { TEXTAPP } from '@/constants/textApp'

export const metadata = {
	title: 'Unique | Access',
	description: 'Unique access account',
}

export default function RootLayout({ children }) {
	return (
		<body className='flex'>
			<div className='grid grid-cols-1 grid-rows-1 gap-0 place-items-center place-content-center sm:grid-cols-2 sm:grid-rows-1'>
				<section className='flex flex-col w-full h-full items-center justify-center'>
					{children}
				</section>
				<section className='hidden sm:flex flex-col bg-curves w-full h-full items-start justify-center px-5 lg:px-11'>
					<div className='flex'>
						<UniqueLink />
					</div>
					<h1 className='text-4xl lg:text-5xl mt-4  font-bold text-white  '>
						{TEXTAPP.accounts.sloganTitle}
					</h1>
					<p className='text-lg lg:text-xl text-slate-400 mt-6 font-thin '>
						{TEXTAPP.accounts.sloganDescription}
					</p>
				</section>
			</div>
		</body>
	)
}
