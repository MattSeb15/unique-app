export default function CardUserComment({
	name = '',
	imgUrl = '',
	bgColor = '',
}) {
	const getTwoNameInitials = () => {
		const names = name.split(' ')
		if (names.length > 1)
			return `${names[0].charAt(0)}${names[1].charAt(0)}`.toUpperCase()
		return names[0].charAt(0).toUpperCase()
	}
	return (
		<div
			className={`flex items-center px-2 py-1 ${bgColor} w-fit text-xs font-medium rounded-md`}>
			{imgUrl && imgUrl !== '' ? (
				<picture>
					<img
						className='h-6 w-6 rounded-full inline-block mr-1.5 object-cover'
						src={imgUrl}
						alt='Imagen de usuario'
					/>
				</picture>
			) : (
				<div className='h-6 w-6 rounded-full inline-block mr-1.5 bg-gray-600'>
					<p className='text-white text-center text-xs pt-1'>
						{getTwoNameInitials()}
					</p>
				</div>
			)}
			<p>{name}</p>
		</div>
	)
}
