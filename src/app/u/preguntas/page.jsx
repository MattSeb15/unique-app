import QuestionCardItem from '@/components/cards/questionCardItem'
import React from 'react'
import Question from '@/constants/classes/question'
import { SimpleDropdown } from '@/components/dropdowns/simple'
import { ButtonsFilterGroup } from '@/components/buttons/questions/filterGroup'
import { ToolsPaperPlaneTil } from '@/components/icons/tools/planes'

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
			.setId(2)
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
			.setId(3)
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

	const listOfFilters = [
		{
			name: 'Todas',
			filter: null, // 'filter=todas
		},
		{
			name: 'Nuevas',
			filter: 'nuevas', // 'filter=nuevas
		},
		{
			name: 'Recompensa',
			filter: 'recompensa', // 'filter=recompensa
		},
		{
			name: 'Populares',
			filter: 'populares', // 'filter=populares
		},
	]
	const listOfDropdownFilters = [
		{
			name: 'Sin resolver',
			filter: 'sin-resolver', // 'filter=sin-resolver
		},
		{
			name: 'Resueltas',
			filter: 'resueltas', // 'filter=resueltas
		},
		{
			name: 'Más votadas',
			filter: 'votadas', // 'filter=votadas
		},
		{
			name: 'Más vistas',
			filter: 'vistas', // 'filter=vistas
		},
		{
			name: 'Más antiguas',
			filter: 'antiguas', // 'filter=antiguas
		},
		{
			name: 'Más respondidas',
			filter: 'respondidas', // 'filter=respondidas
		},
	]
	const onlyFiltersOfDropDown = listOfDropdownFilters.map(
		filter => filter.filter
	)

	return (
		<div className={`flex flex-col w-full mt-5 md:mt-0 gap-2 flex-[3]`}>
			<div className='flex flex-col gap-2 w-full items-center py-2'>
				<div className='flex px-2 md:px-0 mb-5 w-full justify-between'>
					<h1 className='text-xl'>Todas las preguntas</h1>
					<button className='bg-blue-800 text-xs rounded-md px-4 py-1'>
						<ToolsPaperPlaneTil className='w-5 sm:w-4 h-auto inline mr-0 sm:mr-2' />
						<span className='hidden sm:inline font-medium'>
							Hacer una pregunta
						</span>
					</button>
				</div>
				<div className='flex flex-col sm:flex-row w-full justify-between'>
					<p className='mx-auto sm:mx-0 bg-slate-800 flex items-center justify-center py-1 px-1 rounded-md text-sm sm:w-auto text-center mb-2 sm:mb-0'>
						3 Preguntas
					</p>
					<div className='flex h-full flex-col gap-2'>
						<div className='flex h-full justify-center'>
							<ButtonsFilterGroup options={listOfFilters} />
							<SimpleDropdown
								initialText={'Más filtros'}
								options={listOfDropdownFilters}
								onlyFiltersOfDropDown={onlyFiltersOfDropDown}
							/>
						</div>
					</div>
				</div>

				{/* <button className='bg-white text-gray-950 font-medium px-4 py-2 rounded-md'>
								Hacer pregunta
							</button> */}
			</div>

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
