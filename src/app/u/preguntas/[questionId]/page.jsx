import ArrowIconLeft from '@/components/icons/arrows/left'
import Link from 'next/link'

export default function SingleQuestionPage({ params }) {
	return (
		<div className='flex flex-col flex-1 rounded-md p-4 bg-blue-800/5'>
			<Link href={`/u/preguntas`}>
				{' '}
				<ArrowIconLeft /> Todas las preguntas{' '}
			</Link>
			<div className='flex '>
				<div className='flex flex-col flex-[8] gap-2 mt-5'>
					<h1 className='text-3xl font-medium'>
						Question title Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Fugiat nulla nemo pariatur, consectetur officiis facilis
						nostrum officia eaque libero quaerat inventore tempore vitae commodi
						possimus dolorum modi ullam magni atque?
					</h1>
					<div className='flex gap-5 mt-2'>
						<span className='text-md'>Preguntado hoy</span>
						<span className='text-md'>Modificado hoy a las 13:00</span>
					</div>
				</div>
				<div className='flex flex-col flex-1'>
					Icono de ojo
					<span>Vistas</span>
				</div>
			</div>
			<p>Quetion Id: {params?.questionId ?? 'no questionId'}</p>
		</div>
	)
}
