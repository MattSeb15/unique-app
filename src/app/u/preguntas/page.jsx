import QuestionCardItem from '@/components/cards/questionCardItem'
import React from 'react'
import Question from '@/constants/classes/question'
import QuestionTagLink from '@/components/links/qtagLink'

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
		<div className='flex h-full w-full gap-5'>
			<div className='flex flex-col flex-[3] items-start justify-start h-full gap-3'>
				<div
					className={`${bg} rounded-md w-full flex flex-col gap-2 flex-[3] p-2`}>
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
			</div>
			<div className='hidden sm:flex sm:flex-1'>
				<div className={`h-full w-full ${bg} rounded-md p-1 lg:p-4`}>
					<h3 className='text-sm font-medium'>Preguntas del momento</h3>
					<hr className='h-[2px] mx-auto my-2 border-0 rounded bg-slate-800 w-full' />
					<div className='flex flex-col gap-4 '>
						<QuestionTagLink
							tag='react'
							text='Pregunta de react como utilizar props o así, buenos usos, etc'
							questionId='1'
						/>
						<QuestionTagLink
							tag='calculo'
							text='Pregunta de calculo como calcular x de una ecuación de segundo grado'
							questionId='2'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
