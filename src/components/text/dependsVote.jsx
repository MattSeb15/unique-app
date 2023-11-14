export default function TextDependsVote({
	votes = 0,
	className = 'text-xs py-1 px-2 bg-gray-900/60 rounded-md',
}) {
	const getTextColor = () => {
		if (votes < 0) return `text-red-600`
		if (votes > 0) return `text-green-600`
		return `text-gray-600`
	}

	return (
		<div className={className}>
			<span className={`${getTextColor()}`}>{votes}</span>
		</div>
	)
}
