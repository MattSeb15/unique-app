import AvatarPlaceholder from './avatarPlaceholder'

export default function AvatarCard({ email, name, avatarUrl }) {
	return (
		<div className='flex items-center space-x-4'>
			<picture className='hidden'>
				<img
					className='w-10 h-10 rounded-full'
					src=''
					alt=''
				/>
			</picture>
			<AvatarPlaceholder className='hidden lg:block' />
			<div className='font-medium text-sm dark:text-white'>
				<div>{name ?? 'Nombre Apellido'}</div>
				<div className='text-xs text-gray-500 dark:text-gray-400 max-w-[260px]'>
					<p className='truncate'>{email ?? 'example.example@gmail.com'}</p>
				</div>
			</div>
		</div>
	)
}
