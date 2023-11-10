'use client'
import QuestionsFavoriteIcon from '@/components/icons/questions/favorite'

export default function FavoriteButton({
	iconClassName = 'w-auto h-5 sm:h-7 mt-3',
}) {
	return (
		<button
			onClick={() => {
				console.log('favorite')
			}}
			title='Guardar esta pregunta'
			className='text-gray-500 hover:text-amber-300 flex justify-center'>
			<QuestionsFavoriteIcon className={iconClassName} />
		</button>
	)
}
