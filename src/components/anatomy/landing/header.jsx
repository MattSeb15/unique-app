'use client'

import { useEffect } from 'react'
import UniqueLink from '../../links/uniqueLink'
import Link from 'next/link'
import SocialBtnGroup from '../../buttons/groups/socialBtnGroup'

import { TEXTAPP } from '@/constants/textApp'

function Header() {
	useEffect(() => {
		const header = document.querySelector('header')

		const scroll = window.scrollY

		if (scroll > 50) {
			header.classList.add('scrolled')
		}
		window.addEventListener('scroll', () => {
			console.log(window.scrollY)
			if (window.scrollY > 50) {
				header.classList.add('scrolled')
			} else {
				header.classList.remove('scrolled')
			}
		})
	}, [])
	return (
		<>
			<header className='sticky top-0 w-full z-10'>
				<div
					className=' flex items-center justify-between p-2 px-8'
					aria-label='Global'>
					<nav className='flex items-center w-fit xl:w-2/5'>
						<UniqueLink />
					</nav>

					<nav className='flex xl:flex-1 lg:justify-end'>
						<div className='hidden lg:flex items-center sm:gap-x-4 mr-3 lg:gap-x-7 xl:mr-10 lg:mr-0'>
							{TEXTAPP.header.links.map((link, index) => (
								<Link
									key={index}
									href={`#${link.href}`}
									className='text-sm font-medium text-gray-900 dark:text-gray-300'>
									{link.name}
								</Link>
							))}
						</div>
						<SocialBtnGroup />
						<Link
							className=' inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-1 md:ml-3'
							href='/accounts/login'>
							<span className='inline'>Ingresar</span>
							<svg
								className='w-3 h-3 ml-2 inline'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 14 10'>
								<path
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M1 5h12m0 0L9 1m4 4L9 9'></path>
							</svg>
						</Link>
					</nav>
				</div>
				<div
					className='lg:hidden w-full'
					id='nav-hamburger'>
					<ul className='flex flex-row item-center justify-center font-medium my-1  bg-gray-50 dark:bg-gray-950  flex-wrap'>
						{TEXTAPP.header.links.map((link, index) => (
							<li key={index}>
								<Link
									href={`#${link.href}`}
									className='block py-2 pl-3 pr-4 font-medium text-gray-900 dark:text-gray-300 '>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</header>
		</>
	)
}

export default Header
