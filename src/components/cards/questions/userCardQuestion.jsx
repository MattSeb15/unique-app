import Link from 'next/link'

export default function UserCardQuestion({
	userId = '',
	backgroundColor = 'bg-slate-900',
}) {
	return (
		<div
			className={`h-10 w-max ${backgroundColor} rounded-md flex items-center justify-center px-2 gap-1`}>
			<div className='h-7 w-7 rounded-full bg-[url("https://randomuser.me/api/portraits/men/14.jpg")] bg-cover'></div>
			<div className='flex flex-col ml-1'>
				<Link
					href={`/u/usuarios/${userId}`}
					className='text-xs'>
					{userId}
				</Link>
				<span className='text-xs'>101 rep</span>
			</div>
		</div>
	)
}
