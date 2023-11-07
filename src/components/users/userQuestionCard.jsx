import Link from 'next/link'

export default function UserQuestionCard({ ownerId }) {
	return (
		<Link href={`/u/usuarios/${ownerId}`}>
			<div className='inline-flex mb-1 gap-1 bg-slate-700 px-2 py-0.5 rounded-lg'>
				<div className='w-4 h-4 rounded-full bg-gray-500'></div>
				<div className='text-xs text-blue-500'>{ownerId}</div>
			</div>
		</Link>
	)
}
