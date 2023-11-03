import SearchForm from '@/components/forms/search'
import UniqueLink from '../../links/uniqueLink'

/* import { TEXTAPP } from '@/constants/textApp' */

export default function PrincipalHeader() {
	return (
		<>
			<header className='sticky top-0 w-full z-10 scrolled'>
				<div
					className=' flex items-center justify-between p-2 px-8'
					aria-label='Global'>
					<nav className='flex items-center w-fit xl:w-2/5'>
						<UniqueLink />
						<SearchForm />
					</nav>

					<nav className='flex xl:flex-1 lg:justify-end'>
						<div className='hidden lg:flex items-center sm:gap-x-4 mr-3 lg:gap-x-7 xl:mr-10 lg:mr-0'>
							{/* {TEXTAPP.header.links.map((link, index) => (
								<Link
									key={index}
									href={`#${link.href}`}
									className='text-sm font-medium text-gray-900 dark:text-gray-300'>
									{link.name}
								</Link>
							))} */}
						</div>
					</nav>
				</div>
				<div
					className='lg:hidden w-full'
					id='nav-hamburger'>
					<ul className='flex flex-row item-center justify-center font-medium my-1  bg-gray-50 dark:bg-gray-950  flex-wrap'>
						{/* {TEXTAPP.header.links.map((link, index) => (
							<li key={index}>
								<Link
									href={`#${link.href}`}
									className='block py-2 pl-3 pr-4 font-medium text-gray-900 dark:text-gray-300 '>
									{link.name}
								</Link>
							</li>
						))} */}
					</ul>
				</div>
			</header>
		</>
	)
}
