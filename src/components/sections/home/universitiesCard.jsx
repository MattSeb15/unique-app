import Image from 'next/image'
import { Universities } from '../../../constants/universities'
import Card from '@/components/cards/card'
import Link from 'next/link'

export default function UniversitiesSection() {
	return (
		<section className='w-full my-5'>
			<Card>
				<div className='p-4 md:p-8'>
					<h1 className='text-center text-2xl text-slate-300 my-5 mb-8  '>
						CREA O ASÓCIATE A CIENTOS DE COMUNIDADES
					</h1>
					<dl className='grid max-w-screen-xl grid-cols-2 gap-8 gap-y-20 p-4 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white sm:p-8'>
						{Universities.map(university => (
							<div
								key={university.acronym}
								className='flex flex-col items-center '>
								<Image
									src={university.src}
									className='h-20 object-contain invert'
									width={150}
									height={100}
									alt=''
								/>

								<h3 className='text-gray-400 text-center text-lg font-thin max-w-80 mt-5'>
									{university.name}
								</h3>
							</div>
						))}

						<div className='flex flex-col items-center justify-center'>
							<Link href='/'>
								{' '}
								<dt className='mb-2 text-3xl text-center font-extrabold'>
									Explorar
								</dt>
								<dd className='text-gray-400 text-center text-lg font-thin max-w-80 '>
									+ 100 Comunidades
								</dd>
							</Link>
						</div>
					</dl>
				</div>
			</Card>
		</section>
	)
}
