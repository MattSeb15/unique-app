import { OptionsButtons } from '@/components/buttons/questions/optionsButtons'
import { VoteButtonsQuestion } from '@/components/buttons/questions/voteButtons'
import { QuestionsAnswerItem } from '@/components/cards/questions/answerItem'
/* import RelatedQuestionsCard from '@/components/cards/questions/relatedQuestions' */
import LiTagCard from '@/components/cards/questions/tag'
import UserCardQuestion from '@/components/cards/questions/userCardQuestion'
import { FormsAnswer } from '@/components/forms/answer'
import SectionComments from '@/components/sections/questions/comments'
import InfoText from '@/components/text/questions/infoText'

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
		<div className='flex flex-col mt-5 md:mt-0 '>
			<div className='flex flex-col p-4 bg-slate-900 rounded-md '>
				{/* <Link href={`/u/preguntas`}>
					{' '}
					<ArrowIconLeft /> Todas las preguntas{' '}
				</Link> */}
				<div className='flex flex-col sm:flex-row item-center gap-1 sm:gap-5'>
					<div className='flex sm:flex-col justify-between sm:justify-start items-center gap-2 flex-[0.4] mt-0 sm:mt-5'>
						<VoteButtonsQuestion />
						<OptionsButtons />
					</div>
					<div className='flex flex-col flex-[8] gap-2 p-0 sm:p-5 sm:pl-0'>
						<UserCardQuestion userId='Mario Pineda' />
						<h1 className='text-sm mt-1 sm:text-xl md:text-2xl font-medium'>
							Question title Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Fugiat nulla nemo pariatur, consectetur officiis facilis
							nostrum officia eaque libero quaerat inventore tempore vitae
							commodi possimus dolorum modi ullam magni atque?
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
							{/* <OptionsButtons /> */}
						</div>
						<hr className='bg-gray-700 border-none rounded-full h-px' />
						{/* question text parser */}
						<p className='text-gray-200 text-xs sm:text-sm'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatem, voluptatum! Voluptatem dolor optio dicta, maxime
							error, deleniti rem ab fugit adipisci provident quaerat excepturi,
							eaque pariatur architecto tempore totam impedit. provident quaerat
							excepturi, eaque pariatur architecto tempore totam
							impedit.provident quaerat excepturi, eaque pariatur architecto
							tempore totam impedit.provident quaerat excepturi, eaque pariatur
							architecto tempore totam impedit.provident quaerat excepturi,
							eaque pariatur architecto tempore totam impedit.provident quaerat
							excepturi, eaque pariatur architecto tempore totam
							impedit.provident quaerat excepturi, eaque pariatur architecto
							tempore totam impedit.
						</p>

						<SectionComments commentsList={commentsList} />

						{/* <hr className='bg-gray-400 border-none rounded-full h-[2px]' /> */}

						{/* <div className='mt-6'>
							<h2 className='text-lg mb-2'>Preguntas relacionadas</h2>
							<RelatedQuestionsCard />
						</div> */}
						<div className='mt-6 flex flex-col gap-3'>
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
							<QuestionsAnswerItem />
						</div>
						<div className='mt-6'>
							<FormsAnswer />
						</div>
					</div>
				</div>
				{/* <p>Question Id: {params?.questionId ?? 'no questionId'}</p> */}
			</div>
		</div>
	)
}
