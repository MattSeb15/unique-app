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
				<aside className='flex flex-1 bg-slate-900  drop-shadow-lg'>
					<div className='w-full py-2 flex flex-col gap-2'>
						{TEXTAPP.sidebar.map((link, index) => (
							<AsideCardItem
								key={index}
								text={link.name}
								href={`/u/${link.route}`}>
								<ConditionalIcon
									icon={link.name}
									className='mr-0 sm:mr-2 w-7 h-auto inline'
								/>
							</AsideCardItem>
						))}
					</div>
				</aside>
				<main className='flex flex-[4] flex-col justify-center items-center pt-5'>
					{children}
				</main>
			</div>
			<Footer />
		</body>
	)
}
