import Link from 'next/link'

export default function StartExploreGroupBtn() {
	return (
		<div className='flex flex-col mb-2 mt-11 md:flex-row lg:justify-center'>
			<Link
				href='/accounts/register'
				className='text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center'>
				Registrate ahora
			</Link>
			<Link
				href='#services'
				className='text-gray-600 bg-white-100 hover:bg-gray-100 hover:text-blue-600 border border-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 font-medium rounded-lg text-base px-6 py-2.5 text-center inline-flex justify-center items-center'>
				<svg
					className='w-3.5 h-3.5 mr-1'
					aria-hidden='true'
					xmlns='http://www.w3.org/2000/svg'
					fill='currentColor'
					viewBox='0 0 18 18'>
					<path d='M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z'></path>
				</svg>
				<span className='ml-2'>Explorar Servicios</span>
			</Link>
		</div>
	)
}
