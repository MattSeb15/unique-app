import Link from 'next/link'

export default function CardUserComment({ user }) {
	const getTwoNameInitialsWithUsername = () => {
		if (user?.username === undefined) return '-'
		const name = user?.username.split(' ')
		if (name.length === 1) return name[0].charAt(0)
		return name[0].charAt(0) + name[1].charAt(0)
	}
	return (
		<div
			className={`flex items-center py-1 bg-slate-700 px-1 w-fit text-xs font-medium rounded-md`}>
			{user?.imgUrl && user?.imgUrl !== '' ? (
				<picture>
					<img
						className='h-5 w-5 rounded-full inline-block mr-1.5 object-cover'
						src={user.imgUrl}
						alt='Imagen de usuario'
					/>
				</picture>
			) : (
				<div className='h-6 w-6 rounded-full inline-block mr-1.5 bg-gray-600'>
					<p className='text-white text-center text-xs pt-1'>
						{getTwoNameInitialsWithUsername()}
					</p>
				</div>
			)}
			<Link
				title='Ir a perfil de usuario'
				href={`/u/usuarios/${user?.id}`}>
				{user?.username}
			</Link>
		</div>
	)
}
