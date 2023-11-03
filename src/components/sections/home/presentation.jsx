import React from 'react'
import { TEXTAPP } from '@/constants/textApp'
import UniqueLogo from '@/components/logos/uniqueLogo'
import StartExploreGroupBtn from '@/components/buttons/groups/startExploreGroupBtn'

export default function PresentationSection() {
	return (
		<section
			id='inicio'
			className='flex flex-col items-center justify-center my-2 snap-mandatory snap-y scroll-start'>
			<h1 className='text-4xl lg:text-5xl mt-4 xl:mt-10 font-extrabold text-white text-center max-w-[90%] lg:max-w-[60%]'>
				{TEXTAPP.slogan}
			</h1>

			<p className='text-sm lg:text-xl text-center text-slate-400 mt-6 max-w-[80%] lg:max-w-[50%]'>
				{TEXTAPP.slSubtitle}
			</p>
			<StartExploreGroupBtn />

			<UniqueLogo
				className='hidden xl:block h-auto'
				width={500}
			/>
			<UniqueLogo
				className='block xl:hidden h-auto'
				width={250}
			/>
		</section>
	)
}
