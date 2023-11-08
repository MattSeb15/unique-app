import BtnGroupRadioItem from './btnGroupRadioItem'

export default function BtnGroupRadio({ name = 'section', items = [] }) {
	return (
		<ul className='flex flex-col w-full gap-6 md:flex-row'>
			{items.map(item => (
				<BtnGroupRadioItem
					key={item.id}
					name={name}
					{...item}>
					{item.icon}
				</BtnGroupRadioItem>
			))}
			{/* 			<BtnGroupRadioItem
				id='questions'
				name={name}
				value='questions-value'
				text='PREGUNTAS'>
				<svg
					className='w-5 h-5 ml-3'
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 14 10'>
					<path
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M1 5h12m0 0L9 1m4 4L9 9'
					/>
				</svg>
			</BtnGroupRadioItem>
			<BtnGroupRadioItem
				id='hosting-small'
				name={name}
				value='hosting-small'
				text='PREGUNTAS'>
				<svg
					className='w-5 h-5 ml-3'
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 14 10'>
					<path
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M1 5h12m0 0L9 1m4 4L9 9'
					/>
				</svg>
			</BtnGroupRadioItem> */}
		</ul>
	)
}
