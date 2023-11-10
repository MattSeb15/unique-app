'use client'

import { useState } from 'react'

export default function TextAreaExpandibleRows({
	initialRows = 2,
	minRows = 2,
	maxRows = 10,
	...props
}) {
	const [text, setText] = useState('')
	const [rows, setRows] = useState(initialRows)

	const handleTextChange = event => {
		const textareaLineHeight = 24
		const previousRows = event.target.rows
		event.target.rows = minRows // reset number of rows in textarea

		const currentRows = ~~(event.target.scrollHeight / textareaLineHeight)

		if (currentRows === previousRows) {
			event.target.rows = currentRows
		}

		if (currentRows >= maxRows) {
			event.target.rows = maxRows
			event.target.scrollTop = event.target.scrollHeight
		}

		setRows(currentRows < maxRows ? currentRows : maxRows)
		setText(event.target.value)
	}

	return (
		<div>
			<textarea
				rows={rows}
				value={text}
				onChange={e => handleTextChange(e)}
				style={{
					scrollbarWidth: 'thin',
				}}
				{...props}></textarea>
		</div>
	)
}
