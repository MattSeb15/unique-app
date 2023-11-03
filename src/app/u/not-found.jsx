import React from 'react'
import { TEXTAPP } from '@/constants/textApp'
import AlternativeLinkBtn from '@/components/buttons/alternativeLinkBtn'

export const metadata = {
	title: 'Page not found | Unique',
	description: 'Page not found',
}

function NotFound() {
	const { identifier, title, message } = TEXTAPP.errors[404]
	return (
		<section className='bg-white dark:bg-gray-950 flex flex-1 justify-center items-center flex-col my-12'>
			<div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
				<div className='mx-auto max-w-screen-sm text-center'>
					<h1 className='mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500'>
						{identifier}asdsaasdasdasd
					</h1>
					<p className='mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white'>
						{title}asdasdsda
					</p>
					<p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
						{message}asdasd
					</p>
				</div>
			</div>
			<div className='flex flex-col justify-center items-center'>
				<AlternativeLinkBtn text='Volver al inicio' />
			</div>
		</section>
	)
}

export default NotFound