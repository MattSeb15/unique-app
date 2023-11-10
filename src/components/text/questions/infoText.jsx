export default function InfoText({
	views = 0,
	asked = 'hoy',
	modified = 'hoy a las 13:00',
}) {
	return (
		<div className='flex gap-2 sm:gap-5 mt-2'>
			<p className='text-xs md:text-sm text-gray-300'>
				<span className='text-gray-500'>Visto </span> {views}{' '}
				<span className='text-gray-500'> veces </span>{' '}
			</p>
			<p className='text-xs md:text-sm text-gray-300'>
				<span className='text-gray-500'>Preguntado </span>
				{asked}
			</p>
			<p className='text-xs md:text-sm text-gray-300'>
				<span className='text-gray-500'>Modificado </span>
				{modified}
			</p>
		</div>
	)
}
