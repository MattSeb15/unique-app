import './globals.css'

export const metadata = {
	title: 'Unique',
	description: 'Unique description',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}