import SearchForm from '@/components/forms/search'
import UniqueLink from '../../links/uniqueLink'
import AvatarCard from '@/components/users/avatarCard'
import PrincipalBellDuotoneIcon from '@/components/icons/principalHeader/bell'

/* import { TEXTAPP } from '@/constants/textApp' */

export default function PrincipalHeader() {
	return (
		<>
			<header className='sticky top-0 w-full z-10 scrolled bg-slate-900'>
				<div
					className=' flex items-center justify-between p-2 px-8'
					aria-label='Global'>
					<nav className='flex flex-0 sm:flex-1 mr-5 sm:mr-0 items-center'>
						<UniqueLink textClassName='hidden sm:block' />
					</nav>
					<nav className='flex-1'>
						<SearchForm />
					</nav>

					<nav className='flex flex-1 justify-end items-center'>
						<PrincipalBellDuotoneIcon className='w-8 h-8' />
						<AvatarCard />
					</nav>
				</div>
			</header>
		</>
	)
}
