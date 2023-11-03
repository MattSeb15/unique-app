import PrincipalHeader from '@/components/anatomy/principal/header'
import Footer from '@/components/anatomy/landing/footer'

export default function RootLayout({ children }) {
	return (
		<body className='flex flex-col'>
			<PrincipalHeader />
			<main className='flex flex-1 flex-col justify-center items-center pt-5'>
				{children}
			</main>
			<Footer />
		</body>
	)
}
