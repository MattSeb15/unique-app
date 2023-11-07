import Link from 'next/link'

export default function LiTagCard({ children, href = '' }) {
	return (
		<Link href={`/u/tags/${href}`}>
			<li className='bg-blue-600/50 px-1 py-1 rounded-lg text-xs text-blue-400 font-light'>
				{children}
			</li>
		</Link>
	)
}
