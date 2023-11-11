export default function TextDependsVote({ votes = 0 }) {
	const getTextColor = () => {
		if (votes < 0) return `text-red-600`
		if (votes > 0) return `text-green-600`
		return `text-gray-600`
	}
	const className = `text-xs ${getTextColor()} py-1 px-2 bg-gray-900/60 rounded-md`

	return <div className={className}>{votes}</div>
}
