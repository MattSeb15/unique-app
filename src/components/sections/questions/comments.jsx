import FormComment from '@/components/forms/comment'
import ItemComment from '@/components/items/comment'
import Link from 'next/link'

export default function SectionComments({ commentsList = [] }) {
	return (
		<div className='mt-6 sm:mr-10'>
			<h2 className='mb-2 text-lg'>Comentarios</h2>

			{commentsList.map((comment, index) => (
				<ItemComment
					key={index}
					commentContent={comment.content}
					uImgUrl={comment.user.imgUrl}
					uName={comment.user.name}
					uploadDate={comment.uploadDate}
					votes={comment.votes}
				/>
			))}

			{commentsList.length !== 0 && (
				<Link
					href={''}
					className='text-xs text-blue-500 mt-1'>
					Mostrar más comentarios
				</Link>
			)}
			<FormComment
				formId='comment'
				taInitialRows={2}
				taMinRows={2}
				taMaxRows={7}
			/>
		</div>
	)
}
