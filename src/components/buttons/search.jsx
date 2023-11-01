import React from 'react'
import { MdiSearch } from '../icons/tools/search'

export default function SearchButton() {
	return (
		<>
			<div className='w-1/3 mx-8 '>
				<button
					type='button'
					className='hidden xl:flex py-2.5 px-5 w-full text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
					<div className='flex '>
						<div className='flex items-center mr-3'>
							<MdiSearch />
						</div>
						<p>Buscar...</p>
					</div>
				</button>
				<button
					type='button'
					className='block xl:hidden py-2.5 px-5 w-fit text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
					<div className='flex '>
						<div className='flex items-center'>
							<MdiSearch />
						</div>
					</div>
				</button>
			</div>
		</>
	)
}
