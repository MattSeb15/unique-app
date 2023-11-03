import PresentationSection from '@/components/sections/home/presentation'
import UniversitiesCardSection from '@/components/sections/home/universitiesCard'
import FeatureSection from '../../sections/home/feature'
import PlatformViewSection from '../../sections/home/platformView'
import PricingSection from '../../sections/home/pricing'

function Main() {
	return (
		<main className='flex flex-1 flex-col justify-center items-center pt-5'>
			<PresentationSection />
			<UniversitiesCardSection />
			<FeatureSection />
			<PlatformViewSection />
			<PricingSection />
		</main>
	)
}

export default Main
