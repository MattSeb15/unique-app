import Link from 'next/link'
import FacebookBtn from '../buttons/social/facebook'
import GoogleBtn from '../buttons/social/googleBtn'
import Hr from '../dividers/hr'
import ArrowIconLeft from '../icons/arrows/left'
import RegisterForm from '../forms/register'
import LoginForm from '../forms/login'

export default function AccessPartial({ isRegister = false }) {
	return (
		<div className='md:mt-0 xl:p-0  '>
			<div className='space-y-6 p-8'>
				<Link
					href='/'
					className=' text-gray-50 underline  decoration-solid'>
					<ArrowIconLeft />
					<p className='inline ml-2'>Volver</p>
				</Link>

				<h1 className=' font-bold leading-tight tracking-tight text-gray-900 text-xl lg:text-2xl dark:text-white'>
					{isRegister ? 'Crea una cuenta' : 'Iniciar sesión'}
				</h1>
				{isRegister ? <RegisterForm /> : <LoginForm />}
				<div>
					<div className='flex text-center items-center gap-5'>
						<Hr className='flex-1 ' />
						<p className='mb-1 text-gray-500'>o</p>
						<Hr className='flex-1' />
					</div>
					<div className='flex flex-col w-full'>
						<GoogleBtn
							text={
								isRegister ? 'Crear cuenta con Google' : 'Ingresar con Google'
							}
						/>
						<FacebookBtn
							text={
								isRegister
									? 'Crear cuenta con Facebook'
									: 'Ingresar con Facebook'
							}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
