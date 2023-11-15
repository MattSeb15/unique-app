import { OptionsButtonsAnswer } from '@/components/buttons/questions/optionsButtons'
import { VoteButtonsAnswer } from '@/components/buttons/questions/voteButtons'
import Link from 'next/link'

export function SectionsAnswerHeader() {
	return (
		<>
			<VoteButtonsAnswer containerClassName='flex items-center gap-2' />
			<SectionsAnswerUserCard containerClass='hidden sm:flex items-center rounded-lg p-1 hover:bg-slate-700' />
			<OptionsButtonsAnswer
				buttonClass='text-xs text-slate-300 hover:text-slate-200 hover:bg-slate-700 p-1 rounded-lg'
				iconClass='h-5 w-auto'
				containerClass='flex gap-2 items-center'
			/>
		</>
	)
}

export function SectionsAnswerUserCard({ containerClass = '' }) {
	return (
		<Link
			href={'/u/usuarios/123456'}
			className={containerClass}>
			<picture>
				<img
					className='h-8 w-8 rounded-full inline-block mr-1.5 object-cover'
					src='https://randomuser.me/api/portraits/men/36.jpg'
					alt='foto de usuario'
				/>
			</picture>
			<span className='text-xs md:text-sm font-normal'>Username</span>
		</Link>
	)
}
