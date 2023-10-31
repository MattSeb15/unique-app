import React from 'react'

export default function FeatureItem({
	children,
	title = 'title',
	description = 'description',
}) {
	return (
		<div>
			<div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
				{children}
			</div>
			<h3 className='mb-2 text-xl font-bold dark:text-white'>{title}</h3>
			<p className='text-gray-500 dark:text-gray-400'>{description}</p>
		</div>
	)
}
