import FormsSearchQuestion from '@/components/forms/searchQuestion'
import ITextHead from '@/components/links/iTextHead'
import QuestionTagLink from '@/components/links/qtagLink'

export default function RootLayout({ children }) {
	const links = [
		{
			id: 1,
			href: '/u/preguntas',
			text: 'Preguntas',
		},
		{
			id: 2,
			href: '/u/preguntas/tags',
			text: 'Tags',
		},
	]

	return (
		<div className='px-1.5 sm:px-7 py-5 flex flex-col w-full'>
			<div className={`h-20 rounded-md w-full `}>
				<div className='flex flex-col items-center gap-4 md:flex-row '>
					<div className='h-full flex flex-row items-center sm:gap-4'>
						<ITextHead links={links} />
					</div>
					<div className='flex w-full justify-center md:justify-start'>
						<FormsSearchQuestion />
					</div>
				</div>
			</div>
			<div className='flex h-full w-full gap-5'>
				<div
					className={`flex flex-col flex-[3] items-start justify-start h-full gap-3`}>
					{children}
				</div>
				<div className={`hidden p-2 lg:flex gap-6 lg:flex-col lg:flex-1`}>
					<h2 className=''>Recomendaciones</h2>
					<div className='w-full bg-slate-900 rounded-md p-1 lg:p-4'>
						<h3 className='text-sm font-medium'>Tags más populares</h3>
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
					<div className='w-full bg-slate-900 rounded-md p-1 lg:p-4'>
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
		</div>
	)
}
