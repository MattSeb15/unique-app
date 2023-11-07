import QuestionCardItem from '@/components/cards/questionCardItem'
import React from 'react'
import Question from '@/constants/classes/question'
export default function PreguntasPage() {
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
					{listOfQuestions.map(question => (
						<QuestionCardItem
							key={question.id}
							question={question}
						/>
					))}
					{listOfQuestions.map(question => (
						<QuestionCardItem
							key={question.id}
							question={question}
						/>
					))}
					{listOfQuestions.map(question => (
						<QuestionCardItem
							key={question.id}
							question={question}
						/>
					))}
					{listOfQuestions.map(question => (
						<QuestionCardItem
							key={question.id}
							question={question}
						/>
					))}
				</div>
			</div>
			<div className='flex flex-1'>
				<div className={`h-full w-full ${bg} rounded-md`}></div>
			</div>
		</>
	)
}
