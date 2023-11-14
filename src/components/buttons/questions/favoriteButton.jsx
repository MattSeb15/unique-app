'use client'
import QuestionsFavoriteIcon from '@/components/icons/questions/favorite'

export default function FavoriteButton({
	iconClassName = 'w-auto h-5 sm:h-7 mt-0 sm:mt-3',
}) {
	return (
		<button
			onClick={() => {
				console.log('favorite')
			}}
			title='Guardar esta pregunta'
			className='text-slate-500 hover:text-amber-300'>
			<QuestionsFavoriteIcon className={iconClassName} />
		</button>
	)
}
