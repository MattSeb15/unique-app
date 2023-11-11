import CardUserComment from '../cards/questions/userComment'
import CommentsIconReply from '../icons/comments/reply'
import CommentsIconVoteDown from '../icons/comments/voteDown'
import CommentsIconVoteUp from '../icons/comments/voteUp'
import TextDateAgo from '../text/dateAgo'
import TextDependsVote from '../text/dependsVote'

export default function ItemComment({
	commentContent = '',
	uName = '',
	uImgUrl = '',
	uploadDate,
	votes = 0,
}) {
	return (
		<div className='mb-2'>
			<div className=' px-2 py-2 bg-gray-900/50 rounded-lg rounded-tl-none'>
				<p className='text-xs text-start mb-2'>{commentContent}</p>
				<div className='flex justify-between items-center'>
					<div className='flex gap-2 items-end'>
						<TextDependsVote votes={votes} />
						<button className='p-0.5 rounded cursor-pointer text-gray-300 hover:text-green-500 hover:bg-gray-600'>
							<CommentsIconVoteUp className='w-4 h-auto mx-auto' />
						</button>

						<button className='p-0.5 rounded cursor-pointer text-gray-300 hover:text-red-500 hover:bg-gray-600'>
							<CommentsIconVoteDown className='w-4 h-auto mx-auto' />
						</button>
						<button className='p-0.5 rounded cursor-pointer text-gray-300 hover:text-blue-500 hover:bg-gray-600'>
							<CommentsIconReply className='w-4 h-auto mx-auto' />
						</button>
					</div>
					<div className='flex gap-2 items-center'>
						<TextDateAgo
							className='text-xs text-gray-400 inline'
							timestamp={uploadDate}
						/>
						<CardUserComment
							bgColor='bg-slate-800/60'
							name={uName}
							imgUrl={uImgUrl}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
