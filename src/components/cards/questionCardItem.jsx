import Link from 'next/link'
import LiTagCard from './questions/tag'

export default function QuestionCardItem() {
	return (
		<div className='flex w-full shadow-xl'>
			<div className='flex flex-col items-end flex-1 bg-slate-800/70'>
				<div className='pr-2 font-semibold'>0 votos</div>
				<div className='pr-2 font-semibold'>0 respuestas</div>
				<div className='pr-2 font-semibold'>0 visitas</div>
			</div>
			<div className='flex flex-col justify-center flex-[5] h-[155px] py-2 px-4 bg-slate-900 gap-1 relative'>
				{/* community banner */}
				<div className='absolute right-4 top-0 h-12 w-10 bg-white/10 shadow-md '></div>
				<Link
					className='hover:underline hover:underline-offset-1 decoration-blue-500'
					href=''>
					<h2 className=' text-blue-500 text-xl font-semibold text-overflow-1'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
						architecto voluptatum recusandae consequatur. Voluptas illum labore
						culpa doloremque porro cupiditate maiores quae obcaecati asperiores
						quas voluptatem nihil, maxime saepe dolorem! Minus esse perspiciatis
					</h2>
				</Link>
				<p className='text-sm overflow-hidden text-ellipsis font-medium text-gray-400 text-overflow-2'>
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
				<div className='mt-2 flex items-center justify-between'>
					<div className='inline-flex gap-1 items-end'>
						<div className='w-5 h-5 rounded-full bg-gray-500'></div>
						<div className='text-sm text-blue-500'>Username</div>
					</div>
					<div className=''>
						<div className='text-sm text-gray-500'>4 de agosto 2023</div>
					</div>
				</div>
			</div>
		</div>
	)
}
