'use client'
import ToolsEmoji from '../icons/tools/emoji'
import ToolsImage from '../icons/tools/image'
import ToolsPaperClip from '../icons/tools/paperClip'
import TextAreaExpandibleRows from '../textArea/expandibleRows'

export default function FormComment({
	formId = '',
	taInitialRows = 2,
	taMinRows = 2,
	taMaxRows = 10,
	placeholder = 'Escribe un comentario...',
}) {
	const handleSubmit = event => {
		event.preventDefault()
		const comment = event.target[0].value
		console.log('comment: ', comment)
	}

	return (
		<div className='mt-4'>
			<form onSubmit={e => handleSubmit(e)}>
				<div className='w-full mb-4 rounded-lg bg-gray-800/40'>
					<div className='px-4 py-2 rounded-t-lg bg-gray-800/40'>
						<label
							htmlFor={formId}
							className='sr-only'>
							Your comment
						</label>
						<TextAreaExpandibleRows
							id={formId}
							placeholder={placeholder}
							initialRows={taInitialRows}
							minRows={taMinRows}
							maxRows={taMaxRows}
							className='custom-scrollbar-comments resize-none w-full px-0 min-h-[50px] max-h-40 text-sm border-0 bg-transparent focus:ring-0 text-white placeholder-gray-400'
							required
						/>
					</div>
					<div className='flex items-center justify-between px-3 py-1 border-t border-none'>
						<div className='flex ps-0 space-x-1 rtl:space-x-reverse'>
							<button
								type='button'
								className='inline-flex justify-center items-center p-2 rounded cursor-pointer text-gray-400 hover:text-white hover:bg-gray-600'>
								<ToolsEmoji className='w-5 h-auto' />{' '}
								<span className='sr-only'>Añadir emoji</span>
							</button>
							<button
								type='button'
								className='inline-flex justify-center items-center p-2 rounded cursor-pointer text-gray-400 hover:text-white hover:bg-gray-600'>
								<ToolsImage className='w-5 h-auto' />{' '}
								<span className='sr-only'>Set location</span>
							</button>
							<button
								type='button'
								className='inline-flex justify-center items-center p-2 rounded cursor-pointer text-gray-400 hover:text-white hover:bg-gray-600'>
								<ToolsPaperClip className='w-5 h-auto' />
								<span className='sr-only'>Upload image</span>
							</button>
						</div>
						<button
							type='submit'
							className='inline-flex items-center py-1.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4  focus:ring-blue-900 hover:bg-blue-800'>
							Enviar
						</button>
					</div>
				</div>
			</form>
			<p className='ms-auto text-xs text-gray-400'>
				Recuerda, las contribuciones a este tema deben seguir nuestras{' '}
				<a
					href='#'
					className='text-blue-500 hover:underline'>
					Directrices de la comunidad
				</a>
				.
			</p>
		</div>
	)
}
