import QuestionCardItem from '@/components/cards/questionCardItem'
import React from 'react'

export default function PreguntasPage() {
	const bg = 'bg-blue-800/5'
	return (
		<>
			<div className='flex flex-col flex-[3] items-start justify-start h-full gap-3'>
				<div className={`${bg} rounded-md w-full flex-1 flex flex-col`}>
					<div className='flex justify-between items-center mx-5 py-2'>
						<h1 className='text-2xl font-semibold'>Dynamic Questions</h1>
						{/* <button className='bg-white text-gray-950 font-medium px-4 py-2 rounded-md'>
							Hacer pregunta
						</button> */}
					</div>
					<div className='flex flex-col'></div>
				</div>
				<div
					className={`${bg} rounded-md w-full flex flex-col gap-2 flex-[3] p-2`}>
					<QuestionCardItem />
					<QuestionCardItem />
					<QuestionCardItem />
					<QuestionCardItem />
					<QuestionCardItem />
					<QuestionCardItem />
				</div>
			</div>
			<div className='flex flex-1'>
				<div className={`h-full w-full ${bg} rounded-md`}></div>
			</div>
		</>
	)
}
