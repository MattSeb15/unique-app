import CardUserComment from '../cards/questions/userComment'
import CommentsIconReply from '../icons/comments/reply'
import CommentsIconVoteDown from '../icons/comments/voteDown'
import CommentsIconVoteUp from '../icons/comments/voteUp'
import TextDateAgo from '../text/dateAgo'
import TextDependsVote from '../text/dependsVote'

export default function ItemComment({
	commentContent = '',
	user = {},
	uploadDate,
	votes = 0,
}) {
	const { id, username, imgUrl } = user
	return (
		<div className='mb-2'>
			<div className='px-2 py-2 bg-slate-800 rounded-md'>
				<p className='text-xs text-start mb-2 '>{commentContent}</p>
				<div className='flex justify-between flex-wrap gap-2 items-center'>
					<div className='flex gap-2 items-center'>
						<TextDependsVote votes={votes} />
						<button
							title='Me parece útil'
							className='p-0.5 rounded cursor-pointer hover:text-green-500 hover:bg-gray-600'>
							<CommentsIconVoteUp className='w-4 h-auto mx-auto' />
						</button>
						<button
							title='No me parece útil'
							className='p-0.5 rounded cursor-pointer hover:text-red-500 hover:bg-gray-600'>
							<CommentsIconVoteDown className='w-4 h-auto mx-auto' />
						</button>
						<button
							title='Responder'
							className='p-0.5 rounded cursor-pointer hover:text-blue-500 hover:bg-gray-600'>
							<CommentsIconReply className='w-4 h-auto mx-auto' />
						</button>
					</div>
					<div className='flex gap-2 items-center'>
						<CardUserComment
							bgColor='bg-slate-800/60'
							userId={id}
							username={username}
							imgUrl={imgUrl}
						/>
						<span className='text-gray-400'>-</span>
						<TextDateAgo
							className='text-xs text-gray-400 inline'
							timestamp={uploadDate}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
