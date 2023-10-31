import Header from '@/components/anatomy/header'
import './globals.css'
import Footer from '@/components/anatomy/footer'

export const metadata = {
	title: 'Unique',
	description: 'Unique description',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
