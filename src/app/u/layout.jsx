import PrincipalHeader from '@/components/anatomy/principal/header'
import Footer from '@/components/anatomy/landing/footer'

import AsideCardItem from '@/components/cards/asideCardItem'
import { TEXTAPP } from '@/constants/textApp'
import ConditionalIcon from '@/components/icons/asaid/conditionalAside'

export default function RootLayout({ children }) {
	return (
		<body className='flex flex-col'>
			<PrincipalHeader />
			<div className='flex flex-1'>
				<aside className='flex flex-1 bg-slate-900'>
					<div className='w-full py-2 flex flex-col gap-2'>
						{TEXTAPP.sidebar.map((link, index) => (
							<AsideCardItem
								key={index}
								text={link.name}
								href={`${link.route}`}>
								<ConditionalIcon
									icon={link.name}
									className='mr-0 sm:mr-3 w-5 h-auto inline'
								/>
							</AsideCardItem>
						))}
					</div>
				</aside>
				<main className='flex flex-[5]'>
					<div className='px-7 py-5 flex h-full w-full gap-5'>{children}</div>
				</main>
			</div>
			<Footer />
		</body>
	)
}
