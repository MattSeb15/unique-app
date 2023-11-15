import Link from 'next/link'

export default function RelatedQuestionItem({
	questionId = 'questionId',
	question = '',
	votes = 0,
}) {
	const votesStyle =
		votes > 0
			? 'border-green-500 text-green-500'
			: votes < 0
			? 'border-red-500 text-red-500'
			: 'border-gray-500 text-gray-500'
	return (
		<>
			<div className='flex items-center p-2 rounded-lg w-full'>
				<div
					className={`text-center text-sm px-2 rounded-md w-8 border ${votesStyle}`}>
					{votes}
				</div>
				<Link
					href={questionId}
					title={question}
					className='text-xs ml-2 hover:underline mb-1 text-overflow-1'>
					{question}
				</Link>
			</div>
		</>
	)
}
