import Link from 'next/link'
import FilledButton from '../buttons/filledButton'

export default function LoginForm() {
	return (
		<form
			className='space-y-6'
			action='#'>
			<div>
				<label
					htmlFor='email'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
					Correo
				</label>
				<input
					type='email'
					name='email'
					id='email'
					className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='ejemplo@ejemplo.com'
					required=''
				/>
			</div>
			<div>
				<label
					htmlFor='password'
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
					Contraseña
				</label>
				<input
					type='password'
					name='password'
					id='password'
					placeholder='••••••••'
					className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					required=''
				/>
			</div>
			<div className='flex items-center justify-between gap-3'>
				<div className='flex items-start'>
					<div className='flex items-center h-5'>
						<input
							id='remember'
							aria-describedby='remember'
							type='checkbox'
							className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
							required=''
						/>
					</div>
					<div className='ml-3 text-sm'>
						<label
							htmlFor='remember'
							className='text-gray-500 dark:text-gray-300'>
							Recuerdame
						</label>
					</div>
				</div>
			</div>

			<FilledButton text='Ingresar' />

			<div className='flex w-full justify-between'>
				<p className='text-xs font-light text-gray-500 dark:text-gray-400'>
					¿No tienes una cuenta?{' '}
					<Link
						href='/accounts/register'
						className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
						Registrate
					</Link>
				</p>
				<Link
					href='#'
					className='hidden lg:block text-xs font-medium text-primary-600 hover:underline dark:text-primary-500'>
					¿Olvidaste tu contraseña?
				</Link>
			</div>
			<Link
				href='#'
				className='block lg:hidden text-xs font-medium text-primary-600 hover:underline dark:text-primary-500'>
				¿Olvidaste tu contraseña?
			</Link>
		</form>
	)
}
