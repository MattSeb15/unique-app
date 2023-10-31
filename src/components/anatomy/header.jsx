'use client'
import Link from 'next/link'
import UniqueSvgPath from '../logos/uniqueSvgPath'
import UniqueText from '../logos/uniqueText'
import { useEffect } from 'react'

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
		<header className='fixed top-0 w-full z-10'>
			<nav
				className=' flex items-center justify-between p-2 lg:px-8'
				aria-label='Global'>
				<div className='flex lg:flex-1 '>
					<Link
						href='/'
						className='flex items-center'>
						<span className='sr-only'>Unique Logo</span>
						<UniqueSvgPath
							width='60px'
							height='60px'
						/>
						<div className='mt-1'>
							<UniqueText height={30} />
						</div>
					</Link>
				</div>
				<div className='hidden lg:flex lg:gap-x-12'>
					<a
						href='#'
						className='text-sm font-semibold leading-6 text-white'>
						Preguntas
					</a>
					<a
						href='#'
						className='text-sm font-semibold leading-6 text-white'>
						Cursos
					</a>
					<a
						href='#'
						className='text-sm font-semibold leading-6 text-white'>
						Marketplace
					</a>
					<a
						href='#'
						className='text-sm font-semibold leading-6 text-white'>
						Unique
					</a>
				</div>
				<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
					<a
						href='#'
						className='text-sm font-semibold leading-6 text-white'>
						Log in <span aria-hidden='true'>&rarr;</span>
					</a>
				</div>
			</nav>
		</header>
	)
}

export default Header
