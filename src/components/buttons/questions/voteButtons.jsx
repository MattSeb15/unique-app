'use client'
import CommentsIconVoteDown from '@/components/icons/comments/voteDown'
import CommentsIconVoteUp from '@/components/icons/comments/voteUp'
import TextDependsVote from '@/components/text/dependsVote'

export function VoteButtonsQuestion({
	votes = 0,
	buttonsClassName = 'w-auto h-7 sm:h-10',
	titleUp = 'Esta pregunta muestra un esfuerzo de investigación; es util y claro',
	titleDown = 'Esta pregunta no muestra ningún esfuerzo de investigación; no está claro o no es útil',
}) {
	/* vote id make changes | replace votes */
	return (
		<div className='flex sm:flex-col gap-2'>
			<button
				onClick={() => {
					console.log('upVote')
				}}
				title={titleUp}
				className='hover:text-green-400 flex justify-center rounded-lg hover:bg-slate-700'>
				<CommentsIconVoteUp className={buttonsClassName} />
			</button>
			<div className='text-center flex items-center justify-center font-medium text-sm sm:text-lg'>
				<TextDependsVote
					votes={votes}
					className='text-sm sm:text-lg font-medium bg-slate-800 rounded-md px-4 sm:px-3 py-0.5 sm:py-1'
				/>
			</div>
			<button
				onClick={() => {
					console.log('downVote')
				}}
				title={titleDown}
				className='hover:text-red-400 flex justify-center rounded-lg hover:bg-slate-700'>
				<CommentsIconVoteDown className={buttonsClassName} />
			</button>
		</div>
	)
}

export function VoteButtonsAnswer({
	votes = 0,
	buttonsClassName = 'w-auto h-5',
	titleUp = 'Esta pregunta muestra un esfuerzo de investigación; es util y claro',
	titleDown = 'Esta pregunta no muestra ningún esfuerzo de investigación; no está claro o no es útil',
	containerClassName = 'flex items-center gap-2',
}) {
	/* vote id make changes | replace votes */
	return (
		<div className={containerClassName}>
			<button
				onClick={() => {
					console.log('upVote')
				}}
				title={titleUp}
				className='hover:text-green-400 flex justify-center rounded-lg hover:bg-slate-700'>
				<CommentsIconVoteUp className={buttonsClassName} />
			</button>
			<div className='text-center flex items-center justify-center font-medium text-sm sm:text-lg'>
				<TextDependsVote
					votes={votes}
					className='text-sm font-medium bg-slate-900 rounded-md px-4 py-0.5 '
				/>
			</div>
			<button
				onClick={() => {
					console.log('downVote')
				}}
				title={titleDown}
				className='hover:text-red-400 flex justify-center rounded-lg hover:bg-slate-700'>
				<CommentsIconVoteDown className={buttonsClassName} />
			</button>
		</div>
	)
}
