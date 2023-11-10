'use client'
import ArrowFatDown from '@/components/icons/arrows/fatDown'
import ArrowFatUp from '@/components/icons/arrows/fatUp'

export default function VoteButtons({
	votes = 0,
	buttonsClassName = 'w-auto h-5 sm:h-10',
	titleUp = 'Esta pregunta muestra un esfuerzo de investigación; es util y claro',
	titleDown = 'Esta pregunta no muestra ningún esfuerzo de investigación; no está claro o no es útil',
}) {
	/* vote id make changes | replace votes */
	return (
		<div className='flex flex-col gap-2'>
			<button
				onClick={() => {
					console.log('upVote')
				}}
				title={titleUp}
				className='hover:text-green-400 flex justify-center'>
				<ArrowFatUp className={buttonsClassName} />
			</button>
			<div className='text-center font-medium text-lg'>{votes}</div>
			<button
				onClick={() => {
					console.log('downVote')
				}}
				title={titleDown}
				className='hover:text-red-600 flex justify-center'>
				<ArrowFatDown className={buttonsClassName} />
			</button>
		</div>
	)
}
