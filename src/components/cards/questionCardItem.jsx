import Link from 'next/link'
import LiTagCard from './questions/tag'
import QuestionsCheckIcon from '../icons/questions/check'
import QuestionsEyeIcon from '../icons/questions/view'
import QuestionsVoteIcon from '../icons/questions/vote'

export default function QuestionCardItem() {
	return (
		<div className='flex w-full shadow-xl'>
			<div className='flex flex-col justify-center py-2 px-4 bg-slate-900 rounded-md gap-1 relative'>
				{/* community banner */}
				<div className='absolute right-4 top-0 h-12 w-10 bg-white/10 shadow-md '></div>

				<Link
					className='hover:underline hover:underline-offset-1 decoration-blue-500'
					href=''>
					<h2 className=' text-blue-500 text-xl font-semibold text-overflow-1 w-[95%]'>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
						necessitatibus porro harum exercitationem commodi
					</h2>
				</Link>
				<p className='text-sm overflow-hidden text-ellipsis font-medium w-[95%] text-gray-400 text-overflow-2'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
					necessitatibus porro harum exercitationem commodi sequi tempore
					repudiandae ipsum! Provident asperiores illo dolor hic impedit nam
					beatae consequatur repudiandae deserunt optio.
				</p>
				<ul className='flex gap-2'>
					<LiTagCard> Tag 1 </LiTagCard>
					<LiTagCard> Tag 2 </LiTagCard>
					<LiTagCard> Tag 3 </LiTagCard>
				</ul>
				<div className='flex justify-between mt-2'>
					<div className='flex gap-2'>
						<div className='flex gap-1 items-center'>
							<QuestionsCheckIcon className='w-5 h-auto' />
							<p className='text-sm text-gray-400'> 0 Respuestas </p>
						</div>

						<div className='flex gap-1 items-center'>
							<QuestionsVoteIcon className='w-5 h-auto' />
							<p className='text-sm text-gray-400'> 0 Votos </p>
						</div>
						<div className='flex gap-1 items-center'>
							<QuestionsEyeIcon className='w-5 h-auto' />
							<p className='text-sm text-gray-400'> 0 Vistas </p>
						</div>
					</div>
					<div className='flex gap-3'>
						<div className='inline-flex mb-1 gap-1 bg-slate-700 px-2 py-0.5 rounded-lg'>
							<div className='w-4 h-4 rounded-full bg-gray-500'></div>
							<div className='text-xs text-blue-500'>Username</div>
						</div>
						<p className='text-xs text-gray-400'>asked Jan 5, 2010 at 1:12</p>
					</div>
				</div>
			</div>
		</div>
	)
}
