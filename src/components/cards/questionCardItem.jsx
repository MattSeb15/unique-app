import Link from 'next/link'
import LiTagCard from './questions/tag'
import QuestionsCheckIcon from '../icons/questions/check'
import QuestionsEyeIcon from '../icons/questions/view'
import QuestionsVoteIcon from '../icons/questions/vote'
import UserQuestionCard from '../users/userQuestionCard'
import IconText from '../text/iconText'
import QuestionsHandCoinsIcon from '../icons/questions/handCoins'

export default function QuestionCardItem({ question }) {
	return (
		<div className='flex w-full shadow-xl'>
			<div
				className={`flex w-full flex-col justify-center py-2 px-4 bg-slate-900 rounded-md gap-1 relative ${
					question.isPriced ? 'pricy-border' : ''
				}`}>
				{/* community banner */}
				<div className='absolute right-4 top-0 h-12 w-10 bg-white/10 shadow-md '></div>
				{question.isPriced && (
					<IconText
						text={question.price}
						textClass='text-md'>
						<QuestionsHandCoinsIcon className='w-5 h-auto text-amber-500' />{' '}
					</IconText>
				)}
				<Link
					className={`hover:underline hover:underline-offset-1 ${
						question.isPriced
							? 'decoration-amber-500'
							: 'decoration-blue-500 mt-1'
					} `}
					href={`/u/preguntas/${question.id}`}>
					<h2
						className={`${
							question.isPriced ? 'text-amber-500' : 'text-blue-500'
						} text-md md:text-xl font-semibold text-overflow-1 w-[95%]`}>
						{question.title ?? 'Title'}
					</h2>
				</Link>
				<p
					className={`text-xs md:text-sm overflow-hidden text-ellipsis font-medium w-[95%] ${
						question.isPriced ? 'text-amber-100' : 'text-gray-400'
					} text-overflow-2`}>
					{question.description ?? 'Description'}
				</p>
				<ul className='flex gap-2 mt-1'>
					{question.tags?.map(tag => (
						<LiTagCard
							key={tag}
							href={tag}>
							{' '}
							{tag}{' '}
						</LiTagCard>
					))}
				</ul>
				<div className='flex gap-2 lg:gap-0 flex-col lg:flex-row justify-between mt-2'>
					<div className='flex gap-2'>
						<IconText
							color={question.isResolved ? 'green-500' : 'gray-200'}
							text={question.getFixedStringAnswers()}>
							<QuestionsCheckIcon className='w-5 h-auto' />{' '}
						</IconText>
						<IconText text={question.getFixedStringVotes()}>
							<QuestionsVoteIcon className='w-5 h-auto' />{' '}
						</IconText>
						<IconText text={question.getFixedStringViews()}>
							<QuestionsEyeIcon className='w-5 h-auto' />{' '}
						</IconText>
					</div>
					<div className='flex gap-3'>
						<UserQuestionCard ownerId={question.ownerId} />
						<p className='text-xs text-gray-400 truncate'>
							{question.getParseDate()}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
