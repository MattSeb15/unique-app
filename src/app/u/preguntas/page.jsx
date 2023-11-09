import QuestionCardItem from '@/components/cards/questionCardItem'
import React from 'react'
import Question from '@/constants/classes/question'

export default function PreguntasPage({ searchParams }) {
	console.log(searchParams)
	const listOfQuestions = [
		new Question()
			.setId(1)
			.setOwnerId(1)
			.setTitle('Como hacer un login con react')
			.setIsResolved(true)
			.setDescription(
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga necessitatibus porro harum exercitationem commodi sequi tempore repudiandae ipsum! Provident asperiores illo dolor hic impedit nam beatae consequatur repudiandae deserunt optio.'
			)
			.setAnswers(['id1'])
			.setTags(['react', 'javascript', 'login'])
			.setViews(['1', '2', '3'])
			.setVotes(['1', '2', '3'])
			.setCreatedDate(Date.now()),
		new Question()
			.setId(1)
			.setOwnerId(1)
			.setTitle('Como resolver este problema de cálculo')
			.setIsResolved(false)
			.setIsPriced(true)
			.setPrice(100)
			.setDescription(
				'Problema de cálculo: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga necessitatibus porro harum exercitationem commodi sequi tempore repudiandae ipsum! Provident asperiores illo dolor hic impedit nam beatae consequatur repudiandae deserunt optio.'
			)
			.setAnswers([])
			.setTags(['cálculo', 'matemáticas', 'problema'])
			.setViews(['1'])
			.setVotes(['1'])
			.setCreatedDate(Date.now()),
		new Question()
			.setId(2)
			.setOwnerId(2)
			.setTitle('Como calcular x de una ecuación de segundo grado')
			.setDescription(
				'como puedo calcular x de una ecuación de segundo grado, por ejemplo: 2x^2 + 3x + 1 = 0'
			)
			.setAnswers([])
			.setTags(['matemáticas', 'ecuaciones', 'segundo grado'])
			.setViews(['1', '2'])
			.setVotes(['1', '2', '3'])
			.setCreatedDate(Date.now()),
	]

	return (
		<div className={`flex flex-col gap-2 flex-[3] p-2`}>
			<div className='flex justify-between items-center mx-5 py-2'>
				<h1 className='text-2xl font-semibold'>Todas las preguntas</h1>
				{/* <button className='bg-white text-gray-950 font-medium px-4 py-2 rounded-md'>
								Hacer pregunta
							</button> */}
			</div>
			<hr className='h-[2px] mx-auto my-2 border-0 rounded bg-slate-800 w-full' />
			<div className='flex flex-col'></div>
			{listOfQuestions.map(question => (
				<QuestionCardItem
					key={question.id}
					question={question}
				/>
			))}
			{/* <div className='h-[500px] w-full'></div> */}
		</div>
	)
}
