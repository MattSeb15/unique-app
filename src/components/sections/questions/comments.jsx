import FormComment from '@/components/forms/comment'
import ItemComment from '@/components/items/comment'
import Link from 'next/link'

export default function SectionComments({ commentsList = [] }) {
	return (
		<div className='mt-6'>
			<h2 className='mb-2 text-lg'>Comentarios</h2>

			{commentsList.map((comment, index) => (
				<ItemComment
					key={index}
					commentContent={comment.content}
					user={comment.user}
					uploadDate={comment.uploadDate}
					votes={comment.votes}
				/>
			))}

			{commentsList.length !== 0 && (
				<Link
					title='Mostrar más comentarios'
					href={''}
					className='text-xs text-blue-500 mt-1 hover:underline hover:text-blue-300'>
					Mostrar más comentarios
				</Link>
			)}
			<FormComment
				taInitialRows={2}
				taMinRows={2}
				taMaxRows={7}
			/>
			<p className='ms-auto text-xs text-gray-400'>
				Recuerda, las contribuciones a este tema deben seguir nuestras{' '}
				<a
					href='#'
					className='text-blue-500 hover:underline'>
					Directrices de la comunidad
				</a>
				.
			</p>
		</div>
	)
}
