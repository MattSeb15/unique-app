export default function BtnGroupRadioItem({
	id = '',
	name = '',
	value = '',
	text = '',
	children,
}) {
	return (
		<li>
			<input
				type='radio'
				id={id}
				name={name}
				value={value}
				className='hidden peer'
				required
			/>
			<label
				htmlFor={id}
				className='inline-flex items-center justify-between p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'>
				<div className='block'>
					<div className='text-lg font-semibold'>{text}</div>
				</div>
				{children}
			</label>
		</li>
	)
}
