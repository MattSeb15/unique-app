'use client'

import { useId, useState } from 'react'

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
	const areaId = useId()

	return (
		<>
			<label
				for={areaId}
				className='sr-only'>
				{props.placeholder ?? 'Text area content'}
			</label>
			<textarea
				id={areaId}
				rows={rows}
				value={text}
				onChange={e => handleTextChange(e)}
				style={{
					scrollbarWidth: 'thin',
				}}
				{...props}></textarea>
		</>
	)
}
