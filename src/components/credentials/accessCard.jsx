import UniqueLink from '../links/uniqueLink'

import AccessPartial from '../partials/accessPartial'

export default function AccessCard({ isRegister = false }) {
	return (
		<section className='w-full lg:w-[80%] mx-4 lg:mx-0 lg:py-0'>
			<AccessPartial isRegister={isRegister} />
			<div className='flex sm:hidden  justify-center mt-5'>
				<UniqueLink />
			</div>
		</section>
	)
}
