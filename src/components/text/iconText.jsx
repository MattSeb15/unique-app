export default function IconText({
	text = '',
	children,
	color = 'gray-200',
	textClass = 'text-sm',
	rowReverse = false,
}) {
	return (
		<div
			className={`flex ${
				rowReverse ? 'flex-row-reverse justify-end' : 'flex-row'
			} gap-1 items-center text-${color}`}>
			{children}
			<p className={textClass}> {text} </p>
		</div>
	)
}
