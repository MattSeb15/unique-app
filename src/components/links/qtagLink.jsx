import Link from 'next/link'

export default function QuestionTagLink({
	tag = 'tag',
	text = 'lore ipsum dolor sit am',
	questionId = '1',
}) {
	const isPricy = false
	return (
		<Link
			href={`/u/preguntas/${questionId}`}
			aria-label='Ir a la pregunta'
			title={text}
			className={`flex flex-col items-start ${
				isPricy ? 'border border-amber-500/50 rounded-md' : ''
			} hover:bg-slate-800 hover:rounded-lg px-2 py-1`}>
			<div
				className={`bg-blue-600/50 inline-block px-2 py-1 mr-2 mb-2 rounded-lg text-xs text-blue-400 font-light`}>
				{tag}
			</div>
			<div
				className={`text-overflow-2 font-normal  ${
					isPricy ? 'text-xs text-amber-500' : 'text-xs text-blue-500'
				} `}>
				{text}
			</div>
		</Link>
	)
}
