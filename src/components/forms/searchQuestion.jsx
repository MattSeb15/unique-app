'use client'

import { MdiSearch } from '../icons/tools/search'

export default function FormsSearchQuestion() {
	const handleSubmit = e => {
		e.preventDefault()
		const value = e.target.search.value
		console.log('Search question: ' + value)
		e.target.reset()
	}

	return (
		<form
			className='w-full px-5 sm:px-0'
			onSubmit={e => {
				handleSubmit(e)
			}}>
			<div className='flex text-xs w-full lg:w-fit h-full rounded-lg p-0.5 bg-slate-800 border-gray-600 placeholder-gray-400 text-white'>
				<label
					className='flex items-center mr-2'
					htmlFor='search-question'
					title='Buscar en la sección preguntas'>
					<span className='sr-only'>Buscar en la sección preguntas</span>
					<MdiSearch className='w-5 h-auto text-gray-400' />
				</label>
				<input
					type='text'
					autoComplete='off'
					name='search'
					id='search-question'
					className='bg-transparent text-white w-full lg:w-[507px]'
					placeholder='Buscar en preguntas...'
				/>
				<button
					type='submit'
					title='Buscar en la sección preguntas'
					className=' text-xs p-1 bg-slate-600 rounded-lg'>
					<span className='sr-only'>Buscar</span>
					Buscar
				</button>
			</div>
		</form>
	)
}
