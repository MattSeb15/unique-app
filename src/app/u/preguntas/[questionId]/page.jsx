import FavoriteButton from '@/components/buttons/questions/favoriteButton'
import OptionsButtons from '@/components/buttons/questions/optionsButtons'
import VoteButtons from '@/components/buttons/questions/voteButtons'
import RelatedQuestionsCard from '@/components/cards/questions/relatedQuestions'
import LiTagCard from '@/components/cards/questions/tag'
import UserCardQuestion from '@/components/cards/questions/userCardQuestion'
import ArrowFatDown from '@/components/icons/arrows/fatDown'
import ArrowFatUp from '@/components/icons/arrows/fatUp'
/* import ArrowIconLeft from '@/components/icons/arrows/left' */
import QuestionsFavoriteIcon from '@/components/icons/questions/favorite'
import ToolsIconAdd from '@/components/icons/tools/add'
import ToolsIconCheck from '@/components/icons/tools/check'
import SectionComments from '@/components/sections/questions/comments'
import InfoText from '@/components/text/questions/infoText'
import Link from 'next/link'
/* import Link from 'next/link' */

export default function SingleQuestionPage({ params }) {
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

	return (
		<div className='flex flex-col flex-1 p-4 '>
			{/* <Link href={`/u/preguntas`}>
				{' '}
				<ArrowIconLeft /> Todas las preguntas{' '}
			</Link> */}
			<div className='flex item-center gap-1 sm:gap-5'>
				<div className='flex flex-col justify-start gap-2 flex-[0.4] mt-5'>
					<VoteButtons />
					<FavoriteButton />
				</div>
				<div className='flex flex-col flex-[8] gap-2 mt-5'>
					<UserCardQuestion userId='Mario Pineda' />
					<h1 className='text-sm mt-1 sm:text-xl md:text-2xl font-medium'>
						Question title Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Fugiat nulla nemo pariatur, consectetur officiis facilis
						nostrum officia eaque libero quaerat inventore tempore vitae commodi
						possimus dolorum modi ullam magni atque?
					</h1>
					<ul className='flex gap-2 mt-2 flex-wrap'>
						<LiTagCard href='calculo'>calculo</LiTagCard>
						<LiTagCard href='p-sem'>primer semestre</LiTagCard>
						<LiTagCard href='ing'>ingeniería</LiTagCard>
						<LiTagCard href='tel'>telecomunicaciones</LiTagCard>
					</ul>
					<div className='flex justify-between'>
						<InfoText
							views={15}
							asked='hoy'
							modified='hoy a las 13:00'
						/>
						<OptionsButtons />
					</div>
					<hr className='bg-gray-700 border-none rounded-full h-px' />
					{/* question text parser */}
					<p className='text-gray-200 text-xs sm:text-sm mr-0 md:mr-5 xl:mr-20 '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
						voluptatum! Voluptatem dolor optio dicta, maxime error, deleniti rem
						ab fugit adipisci provident quaerat excepturi, eaque pariatur
						architecto tempore totam impedit. provident quaerat excepturi, eaque
						pariatur architecto tempore totam impedit.provident quaerat
						excepturi, eaque pariatur architecto tempore totam impedit.provident
						quaerat excepturi, eaque pariatur architecto tempore totam
						impedit.provident quaerat excepturi, eaque pariatur architecto
						tempore totam impedit.provident quaerat excepturi, eaque pariatur
						architecto tempore totam impedit.provident quaerat excepturi, eaque
						pariatur architecto tempore totam impedit.
					</p>

					<SectionComments commentsList={commentsList} />

					{/* <hr className='bg-gray-400 border-none rounded-full h-[2px]' /> */}

					<div className='mt-6'>
						<h2 className='text-lg mb-2'>Preguntas relacionadas</h2>
						<RelatedQuestionsCard />
					</div>
					<div className='mt-6 sm:mr-10 flex flex-col gap-3'>
						<div className='flex flex-col sm:flex-row justify-between items-start'>
							<h2 className='text-lg'>
								<span>2</span> Respuestas
							</h2>
							<select
								name='filters'
								id='select-filters'
								className='text-xs h-7 rounded-lg block p-0.5 bg-gray-800 border-gray-600 placeholder-gray-400 text-white'>
								<option value='votes'>Más votadas (por defecto)</option>
								<option value='date'>Más recientes</option>
								<option value='active'>Más antiguas</option>
							</select>
						</div>
						<div className='mt-3 w-full bg-green-900/30 rounded-lg p-2'>
							<div className='flex'>
								<div className='flex flex-col justify-start gap-2 flex-[0.4] mt-5 mr-2'>
									<button
										title='Esta respuesta es útil'
										className='hover:text-green-400 flex justify-center'>
										<ArrowFatUp className='w-auto h-5 sm:h-7' />
									</button>
									<div className='text-center font-medium text-lg'>20</div>
									<button
										title='Esta respuesta no es útil'
										className='hover:text-red-600 flex justify-center'>
										<ArrowFatDown className='w-auto h-5 sm:h-7' />
									</button>
									<button
										title='Guardar esta respuesta'
										className='text-gray-500 hover:text-amber-300 flex justify-center'>
										<QuestionsFavoriteIcon className='w-auto h-3 sm:h-5 mt-3' />
									</button>
								</div>
								<div className='flex flex-col flex-[8] gap-2 mt-5 sm:mr-1'>
									{/* TODA LA RESPUESTA ESTO ES DINÁMICO PUEDE SER CÓDIGO, TEXTO , IMÁGENES, TABLAS, TEXTO COLORES, NEGRITA, PLAYGROUNDS ETC, ETC. */}
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
									<h3 className='text-xs sm:text-sm font-medium'>
										Titulo de respuesta numero 1 Lorem ipsum dolor sit amet
										consectetur adipisicing elit. Beatae magnam ducimus sint
										natus deleniti incidunt, illum, autem quis quas tempore
										molestias sapiente? Non quas facere nemo neque numquam
										voluptatum qui!
									</h3>
									<p className='text-[0.6rem] sm:text-xs mt-2 text-gray-400'>
										Descripción de pregunta Lorem ipsum dolor sit amet
										consectetur adipisicing elit. Cumque culpa corporis placeat
										veniam dolor vel perferendis provident nesciunt fuga sit.
										Eligendi qui natus cupiditate ducimus numquam tenetur
										adipisci dolore tempore!
									</p>
									<UserCardQuestion
										userId='Mario Pineda'
										backgroundColor='bg-gray-950/60'
									/>
									<div className='mt-6 sm:mr-10'>
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
													Yo opino que todo eso está muy bien, siempre y cuando
													se respete, bla bla lorem Lorem ipsum dolor sit amet
													consectetur adipisicing elit. Velit consequatur
													eligendi praesentium accusantium quas impedit,
													doloribus expedita excepturi porro optio quia adipisci
													maxime. Perferendis debitis officiis corporis possimus
													neque ratione!
												</span>
												<span className='text-gray-500'>Escrito </span>hoy a las
												13:00 por{' '}
												<span className='text-gray-500'>Mario Pineda</span>
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
													es verdad lo bueno es que todo, bla bla lorem Lorem
													ipsum dolor sit amet consectetur adipisicing elit.
													Velit consequatur eligendi praesentium accusantium
													quas impedit, doloribus expedita excepturi porro optio
													quia adipisci maxime. Perferendis debitis officiis
													corporis possimus neque ratione!
												</span>
												<span className='text-gray-500'>Escrito </span>hoy a las
												13:00 por{' '}
												<span className='text-gray-500'>Roberto Guerra</span>
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
									</div>
								</div>
							</div>
						</div>
						<div className='mt-3 w-full bg-slate-900 rounded-lg p-2'>
							<div className='flex'>
								<div className='flex flex-col justify-start gap-2 flex-[0.4] mt-5 mr-2'>
									<button
										title='Esta respuesta es útil'
										className='hover:text-green-400 flex justify-center'>
										<ArrowFatUp className='w-auto h-5 sm:h-7' />
									</button>
									<div className='text-center font-medium text-lg'>20</div>
									<button
										title='Esta respuesta no es útil'
										className='hover:text-red-600 flex justify-center'>
										<ArrowFatDown className='w-auto h-5 sm:h-7' />
									</button>
									<button
										title='Guardar esta respuesta'
										className='text-gray-500 hover:text-amber-300 flex justify-center'>
										<QuestionsFavoriteIcon className='w-auto h-3 sm:h-5 mt-3' />
									</button>
								</div>
								<div className='flex flex-col flex-[8] gap-2 mt-5 sm:mr-1'>
									{/* TODA LA RESPUESTA ESTO ES DINÁMICO PUEDE SER CÓDIGO, TEXTO , IMÁGENES, TABLAS, TEXTO COLORES, NEGRITA, PLAYGROUNDS ETC, ETC. */}
									<h3 className='text-xs sm:text-sm font-medium'>
										Titulo de respuesta numero 1 Lorem ipsum dolor sit amet
										consectetur adipisicing elit. Beatae magnam ducimus sint
										natus deleniti incidunt, illum, autem quis quas tempore
										molestias sapiente? Non quas facere nemo neque numquam
										voluptatum qui!
									</h3>
									<p className='text-[0.6rem] sm:text-xs mt-2 text-gray-400'>
										Descripción de pregunta Lorem ipsum dolor sit amet
										consectetur adipisicing elit. Cumque culpa corporis placeat
										veniam dolor vel perferendis provident nesciunt fuga sit.
										Eligendi qui natus cupiditate ducimus numquam tenetur
										adipisci dolore tempore!
									</p>
									<div className='mt-6 sm:mr-10'>
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
													Yo opino que todo eso está muy bien, siempre y cuando
													se respete, bla bla lorem Lorem ipsum dolor sit amet
													consectetur adipisicing elit. Velit consequatur
													eligendi praesentium accusantium quas impedit,
													doloribus expedita excepturi porro optio quia adipisci
													maxime. Perferendis debitis officiis corporis possimus
													neque ratione!
												</span>
												<span className='text-gray-500'>Escrito </span>hoy a las
												13:00 por{' '}
												<span className='text-gray-500'>Mario Pineda</span>
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
													es verdad lo bueno es que todo, bla bla lorem Lorem
													ipsum dolor sit amet consectetur adipisicing elit.
													Velit consequatur eligendi praesentium accusantium
													quas impedit, doloribus expedita excepturi porro optio
													quia adipisci maxime. Perferendis debitis officiis
													corporis possimus neque ratione!
												</span>
												<span className='text-gray-500'>Escrito </span>hoy a las
												13:00 por{' '}
												<span className='text-gray-500'>Roberto Guerra</span>
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
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <p>Question Id: {params?.questionId ?? 'no questionId'}</p> */}
		</div>
	)
}
