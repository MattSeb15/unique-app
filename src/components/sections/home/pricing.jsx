import PlanCard from '@/components/cards/plan'
import { TEXTAPP } from '@/constants/textApp'

export default function PricingSection() {
	const { comunity, user } = TEXTAPP.pricing

	return (
		<section
			id='uniqueplus'
			className='flex flex-col xl:flex-row  justify-center items-center py-8 px-4 xl:py-16 xl:px-6 gap-3'>
			<div className=' max-w-[90%]'>
				<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
					Unique+
				</h2>
				<p className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
					{user.description}
				</p>
			</div>
			<div className='flex flex-col gap-7 lg:flex-row'>
				<div className='flex flex-col text-center'>
					<h3 className='mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
						{user.title}
					</h3>
					<div className=' flex flex-col justify-center lg:flex-row gap-2 lg:gap-2 '>
						{/*   <!-- Pricing Cards --> */}

						{user.plans.map((plan, index) => (
							<PlanCard
								key={index}
								name={plan.name}
								colorClassName={plan.colorClassName}
								description={plan.description}
								price={plan.price}
								time={plan.time}
								features={plan.features}
								href={plan.href}
							/>
						))}
					</div>
				</div>
				<div className='flex flex-col xl:ml-5 text-center'>
					<h3 className='mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
						{comunity.title}
					</h3>
					<div className='flex flex-col justify-center lg:flex-row gap-2 lg:gap-2 '>
						{/*   <!-- Pricing Cards --> */}

						{comunity.plans.map((plan, index) => (
							<PlanCard
								key={index}
								name={plan.name}
								colorClassName={plan.colorClassName}
								description={plan.description}
								price={plan.price}
								time={plan.time}
								features={plan.features}
								href={plan.href}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
