import AsideCardItem from '@/components/cards/asideCardItem'
import { TEXTAPP } from '@/constants/textApp'
import ConditionalIcon from '@/components/icons/asaid/conditionalAside'
import UniqueLink from '@/components/links/uniqueLink'

export default function RootLayout({ children }) {
	return (
		<body className='flex flex-col sm:flex sm:flex-row  mx-auto'>
			<header className='flex sticky shadow-lg top-0 z-40 sm:flex-1 sm:flex-col bg-slate-900 sm:min-w-[50px] sm:sticky sm:top-0 sm:left-0 sm:h-screen '>
				<UniqueLink
					textClassName='hidden lg:flex'
					className='flex justify-end items-center lg:justify-center mx-1 sm:mt-3'
				/>
				<div className='w-full sm:py-2 flex items-end sm:flex-col'>
					{TEXTAPP.sidebar.map((link, index) => (
						<AsideCardItem
							key={index}
							text={link.name}
							href={`${link.route}`}>
							<ConditionalIcon
								icon={link.name}
								className='mr-0 lg:mr-3 w-5 sm:w-7 h-auto inline'
							/>
						</AsideCardItem>
					))}
				</div>
			</header>
			<main className='flex sm:flex-[5]'>{children}</main>
			{/* <Footer /> */}
		</body>
	)
}
