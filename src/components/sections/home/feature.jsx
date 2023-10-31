import SelectorIcon from '@/components/icons/featuresIcons/selectorIcon'
import FeatureItem from '@/components/items/featureItem'

import { TEXTAPP } from '@/constants/textApp'

export default function FeatureSection() {
	return (
		<section className='w-full'>
			<div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
				<div className='max-w-screen-md mb-8 lg:mb-16'>
					<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
						{TEXTAPP.feature.title}
					</h2>
				</div>
				<div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
					{TEXTAPP.feature.characs.map((feature, index) => (
						<FeatureItem
							key={index}
							title={feature.title}
							description={feature.description}>
							<SelectorIcon iconKey={feature.iconKey} />
						</FeatureItem>
					))}
				</div>
			</div>
		</section>
	)
}
