import React from 'react'
import { TEXTAPP } from '@/constants/textApp'
import AlternativeButton from '@/components/buttons/alternativeButton'
import FilledGButton from '@/components/buttons/filledGButton'
import UniqueLogo from '@/components/logos/uniqueLogo'

export default function PresentationSection() {
	return (
		<div className='h-screen'>
			<div className='flex h-full flex-col items-center justify-center my-2'>
				<h1 className='text-4xl lg:text-5xl mt-4 xl:mt-10 font-extrabold text-white text-center max-w-[90%] lg:max-w-[60%]'>
					{TEXTAPP.slogan}
				</h1>

				<p className='text-sm lg:text-xl text-center text-slate-400 mt-6 max-w-[80%] lg:max-w-[50%]'>
					{TEXTAPP.slSubtitle}
				</p>
				<div className='flex flex-row mt-5'>
					<FilledGButton text='Empezar' />
					<AlternativeButton text='Explorar cursos' />
				</div>
				<UniqueLogo
					className='hidden xl:inline-flex lg:h-auto'
					width={500}
				/>
				<UniqueLogo
					className='inline-flex xl:hidden lg:h-auto'
					width={250}
				/>
			</div>
		</div>
	)
}
