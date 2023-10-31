export default function PricingSection() {
	return (
		<>
			<section className=''>
				<div className='flex flex-col lg:flex-row items-center py-8 px-4 lg:py-16 lg:px-6'>
					<div className='max-w-screen-md mb-8 text-center lg:text-start lg:mx-12 lg:flex lg:flex-col lg:justify-center px-5'>
						<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
							Membresias de Usuario
						</h2>
						<p className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
							Unique ofrece una plataforma de acceso gratuito para todos los
							usuarios. Sin embargo, si buscas maximizar tu experiencia y
							aprovechar al máximo los recursos y funcionalidades disponibles,
							te brindamos la oportunidad de adquirir una de nuestras membresías
							premium, diseñadas para mejorar tu aprendizaje y facilitar un
							acceso aún más completo a nuestra plataforma educativa.
						</p>
					</div>
					<div className=' flex flex-col lg:flex-row gap-5 lg:gap-20 '>
						{/*   <!-- Pricing Card --> */}
						<div className='relative inline-flex items-center justify-center p-0.5 mb-3 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500  dark:text-white '>
							<div className='flex flex-col p-6 w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white'>
								<h3 className='mb-4 text-2xl font-semibold'>Starter</h3>
								<p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
									Best option for personal use & for your next project.
								</p>
								<div className='flex justify-center items-baseline my-8'>
									<span className='mr-2 text-5xl font-extrabold'>$29</span>
									<span className='text-gray-500 dark:text-gray-400'>
										/month
									</span>
								</div>
								{/* <!-- List --> */}
								<ul
									role='list'
									className='mb-8 space-y-4 text-left'>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>Individual configuration</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>No setup, or hidden fees</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*   */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Team size:{' '}
											<span className='font-semibold'>1 developer</span>
										</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Premium support:{' '}
											<span className='font-semibold'>6 months</span>
										</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Free updates:{' '}
											<span className='font-semibold'>6 months</span>
										</span>
									</li>
								</ul>
								<a
									href='#'
									className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'>
									Get started
								</a>
							</div>
						</div>
						{/*   <!-- Pricing Card --> */}
						<div className='relative inline-flex items-center justify-center p-0.5 mb-3 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500  dark:text-white '>
							<div className='flex flex-col p-6 w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white'>
								<h3 className='mb-4 text-2xl font-semibold'>Starter</h3>
								<p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
									Best option for personal use & for your next project.
								</p>
								<div className='flex justify-center items-baseline my-8'>
									<span className='mr-2 text-5xl font-extrabold'>$29</span>
									<span className='text-gray-500 dark:text-gray-400'>
										/month
									</span>
								</div>
								{/* <!-- List --> */}
								<ul
									role='list'
									className='mb-8 space-y-4 text-left'>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>Individual configuration</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>No setup, or hidden fees</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*   */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Team size:{' '}
											<span className='font-semibold'>1 developer</span>
										</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Premium support:{' '}
											<span className='font-semibold'>6 months</span>
										</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Free updates:{' '}
											<span className='font-semibold'>6 months</span>
										</span>
									</li>
								</ul>
								<a
									href='#'
									className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'>
									Get started
								</a>
							</div>
						</div>
						{/*   <!-- Pricing Card --> */}
						<div className='relative inline-flex items-center justify-center p-0.5 mb-3 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400  dark:text-white '>
							<div className='flex flex-col p-6 w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white'>
								<h3 className='mb-4 text-2xl font-semibold'>Starter</h3>
								<p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
									Best option for personal use & for your next project.
								</p>
								<div className='flex justify-center items-baseline my-8'>
									<span className='mr-2 text-5xl font-extrabold'>$29</span>
									<span className='text-gray-500 dark:text-gray-400'>
										/month
									</span>
								</div>
								{/* <!-- List --> */}
								<ul
									role='list'
									className='mb-8 space-y-4 text-left'>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>Individual configuration</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>No setup, or hidden fees</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*   */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Team size:{' '}
											<span className='font-semibold'>1 developer</span>
										</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Premium support:{' '}
											<span className='font-semibold'>6 months</span>
										</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Free updates:{' '}
											<span className='font-semibold'>6 months</span>
										</span>
									</li>
								</ul>
								<a
									href='#'
									className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'>
									Get started
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className=''>
				<div className='flex flex-col lg:flex-row items-center py-8 px-4 lg:py-16 lg:px-6'>
					<div className='max-w-screen-md mb-8 text-center lg:text-start lg:mx-12 lg:flex lg:flex-col lg:justify-center px-5'>
						<h2 className='mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white'>
							Mejoras de Comunidad
						</h2>
						<p className='mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400'>
							Maximizar tu experiencia, aprovechar al máximo los recursos y
							funcionalidades disponibles para la comunidad, obten beneficios
							premium al adquirir una de nuestras mejoras para la comunidad,
							diseñadas para mejorar tu comunidad y facilitar un acceso aún más
							completo a nuestra plataforma educativa.
						</p>
					</div>
					<div className=' flex flex-col lg:flex-row gap-5 lg:gap-20 '>
						{/*   <!-- Pricing Card --> */}
						<div className='relative inline-flex items-center justify-center p-0.5 mb-3 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500  dark:text-white '>
							<div className='flex flex-col p-6 w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white'>
								<h3 className='mb-4 text-2xl font-semibold'>Starter</h3>
								<p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
									Best option for personal use & for your next project.
								</p>
								<div className='flex justify-center items-baseline my-8'>
									<span className='mr-2 text-5xl font-extrabold'>$29</span>
									<span className='text-gray-500 dark:text-gray-400'>
										/month
									</span>
								</div>
								{/* <!-- List --> */}
								<ul
									role='list'
									className='mb-8 space-y-4 text-left'>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>Individual configuration</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>No setup, or hidden fees</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*   */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Team size:{' '}
											<span className='font-semibold'>1 developer</span>
										</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Premium support:{' '}
											<span className='font-semibold'>6 months</span>
										</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Free updates:{' '}
											<span className='font-semibold'>6 months</span>
										</span>
									</li>
								</ul>
								<a
									href='#'
									className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'>
									Get started
								</a>
							</div>
						</div>
						{/*   <!-- Pricing Card --> */}
						<div className='relative inline-flex items-center justify-center p-0.5 mb-3 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500  dark:text-white '>
							<div className='flex flex-col p-6 w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white'>
								<h3 className='mb-4 text-2xl font-semibold'>Starter</h3>
								<p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
									Best option for personal use & for your next project.
								</p>
								<div className='flex justify-center items-baseline my-8'>
									<span className='mr-2 text-5xl font-extrabold'>$29</span>
									<span className='text-gray-500 dark:text-gray-400'>
										/month
									</span>
								</div>
								{/* <!-- List --> */}
								<ul
									role='list'
									className='mb-8 space-y-4 text-left'>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>Individual configuration</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>No setup, or hidden fees</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*   */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Team size:{' '}
											<span className='font-semibold'>1 developer</span>
										</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Premium support:{' '}
											<span className='font-semibold'>6 months</span>
										</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Free updates:{' '}
											<span className='font-semibold'>6 months</span>
										</span>
									</li>
								</ul>
								<a
									href='#'
									className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'>
									Get started
								</a>
							</div>
						</div>
						{/*   <!-- Pricing Card --> */}
						<div className='relative inline-flex items-center justify-center p-0.5 mb-3 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-pink-500 to-orange-400  dark:text-white '>
							<div className='flex flex-col p-6 w-full text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white'>
								<h3 className='mb-4 text-2xl font-semibold'>Starter</h3>
								<p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
									Best option for personal use & for your next project.
								</p>
								<div className='flex justify-center items-baseline my-8'>
									<span className='mr-2 text-5xl font-extrabold'>$29</span>
									<span className='text-gray-500 dark:text-gray-400'>
										/month
									</span>
								</div>
								{/* <!-- List --> */}
								<ul
									role='list'
									className='mb-8 space-y-4 text-left'>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>Individual configuration</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>No setup, or hidden fees</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*   */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Team size:{' '}
											<span className='font-semibold'>1 developer</span>
										</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Premium support:{' '}
											<span className='font-semibold'>6 months</span>
										</span>
									</li>
									<li className='flex items-center space-x-3'>
										{/*  */}
										<svg
											className='flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												fillRule='evenodd'
												d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
												clipRule='evenodd'></path>
										</svg>
										<span>
											Free updates:{' '}
											<span className='font-semibold'>6 months</span>
										</span>
									</li>
								</ul>
								<a
									href='#'
									className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900'>
									Get started
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
