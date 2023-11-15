import ToolsIconCheck from '@/components/icons/tools/check'
import {
	SectionsAnswerHeader,
	SectionsAnswerUserCard,
} from '@/components/sections/questions/answers'
import SectionComments from '@/components/sections/questions/comments'

export function QuestionsAnswerItem({ answer = {} }) {
	const commentsList = [
		{
			content: `Lorem ipsum dolor sit amet c
			onsectetur adipisicing elit. Quisquam,
			odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
			odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam asdasd wqdwq da
			d qwdqw adqwdwq dqwdqd asdqw wqdasd asd qwd qwdasd qwd `,
			user: {
				id: '123456',
				name: 'Mario Pineda',
				username: 'mpinda',
				imgUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
			},
			votes: 124,
			uploadDate: Date.now() - 1800000,
		},
		{
			content: `Quisquam,
			odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
			odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,`,
			user: {
				id: '789123',
				name: 'Roberto Guerra',
				username: 'rguerra',
				imgUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
			},
			votes: 0,
			uploadDate: Date.now() - 39813134361,
		},
		{
			content: `lore ipsum dolor sit amet c onsectetur adipisicing elit. Quisquam`,
			user: {
				id: '4567891',
				name: 'Mateo Oviedo',
				username: 'moviedo',
				imgUrl: 'https://randomuser.me/api/portraits/men/20.jpg',
			},
			votes: -5,
			uploadDate: Date.now() - 172800000 - 31500000,
		},
	]
	const isApproved = false
	return (
		<div
			className={`${
				isApproved ? ' border-green-600' : 'bg-slate-900 border-gray-600'
			}
            mt-3 w-full rounded-lg border`}>
			<div className='flex flex-col sm:flex-row gap-2 flex-[0.4] rounded-[inherit] rounded-b-none bg-slate-800 p-2'>
				<SectionsAnswerUserCard containerClass='flex sm:hidden items-center w-fit justify-start rounded-lg p-1 hover:bg-slate-700' />
				<div className='flex justify-between w-full'>
					<SectionsAnswerHeader />
				</div>
			</div>
			<div className='flex flex-col flex-[8] gap-2 p-3'>
				{/* TODA LA RESPUESTA ESTO ES DINÁMICO PUEDE SER CÓDIGO, TEXTO , IMÁGENES, TABLAS, TEXTO COLORES, NEGRITA, PLAYGROUNDS ETC, ETC. */}
				{isApproved === true && <QuestionApprovedTag />}
				<h3 className='text-xs sm:text-sm font-medium'>
					Titulo de respuesta numero 1 Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Beatae magnam ducimus sint natus deleniti incidunt,
					illum, autem quis quas tempore molestias sapiente? Non quas facere
					nemo neque numquam voluptatum qui!
				</h3>
				<p className='text-[0.6rem] sm:text-xs mt-2 text-gray-400'>
					Descripción de pregunta Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Cumque culpa corporis placeat veniam dolor vel
					perferendis provident nesciunt fuga sit. Eligendi qui natus cupiditate
					ducimus numquam tenetur adipisci dolore tempore!
				</p>
				<div className='flex  rounded-[inherit] px-2 md:px-7 py-1 rounded-t-none'>
					<SectionComments commentsList={commentsList} />
				</div>

				{/* <UserCardQuestion
						userId='Mario Pineda'
						backgroundColor='bg-gray-950/60'
					/> */}
				{/* <div className='mt-6 sm:mr-10'>
						<div className='flex justify-between'>
							<h4 className='mb-2 text-sm'>Comentarios</h4>
							<button
								title='añadir comentario'
								className='hover:text-gray-500'>
								<ToolsIconAdd className='w-auto h-6 mb-1' />
							</button>
						</div>
						<div className='ml-5'>
							<p className='text-xs text-start'>
								<span className='block mb-1'>
									Yo opino que todo eso está muy bien, siempre y cuando se
									respete, bla bla lorem Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Velit consequatur eligendi praesentium
									accusantium quas impedit, doloribus expedita excepturi porro
									optio quia adipisci maxime. Perferendis debitis officiis
									corporis possimus neque ratione!
								</span>
								<span className='text-gray-500'>Escrito </span>hoy a las 13:00
								por <span className='text-gray-500'>Mario Pineda</span>
								<span
									title="número de votos a 'comentario útil' recibidos"
									className='text-xs w-9 mr-2 text-orange-800 ml-1'>
									• 124
								</span>
							</p>
						</div>
						<hr className='bg-gray-800 border-none rounded-full h-[1px] my-2 w-full' />
						<div className='ml-5'>
							<p className='text-xs text-start'>
								<span className='block mb-1'>
									<Link
										href={'/u/usuarios/mpinda'}
										className='text-blue-700'>
										@MPineda
									</Link>{' '}
									es verdad lo bueno es que todo, bla bla lorem Lorem ipsum
									dolor sit amet consectetur adipisicing elit. Velit consequatur
									eligendi praesentium accusantium quas impedit, doloribus
									expedita excepturi porro optio quia adipisci maxime.
									Perferendis debitis officiis corporis possimus neque ratione!
								</span>
								<span className='text-gray-500'>Escrito </span>hoy a las 13:00
								por <span className='text-gray-500'>Roberto Guerra</span>
								<span
									title="número de votos a 'comentario útil' recibidos"
									className='text-xs w-9 text-orange-800 ml-1'>
									• 2
								</span>
							</p>
						</div>

						<hr className='bg-gray-800 border-none rounded-full h-[1px] mt-2 w-full' />
						<div className='text-xs text-blue-500 mt-1'>
							Mostrar más comentarios
						</div>
					</div> */}
			</div>
		</div>
	)
}

function QuestionApprovedTag() {
	return (
		<div
			title='El dueño aprobó esta pregunta'
			className='flex justify-start items-center w-fit px-2 gap-2 py-0.5 rounded-md  bg-green-600'>
			<p className='text-xs sm:text-sm font-medium text-white '>
				Respuesta aprobada
			</p>
			<div className='p-0.5 bg-white rounded-full'>
				<ToolsIconCheck className='w-auto h-2 sm:h-3 my-auto text-green-700' />
			</div>
		</div>
	)
}
