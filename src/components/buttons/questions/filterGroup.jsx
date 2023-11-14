'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export function ButtonsFilterGroup({ options = [] }) {
	const searchParams = useSearchParams()
	const filterParams = searchParams.get('filter')
	const isActive = filter => filter === filterParams

	return (
		<div className='text-xs flex items-center'>
			{options.map((option, index) => (
				<Link
					key={index}
					href={
						index === 0
							? '/u/preguntas'
							: `/u/preguntas/?filter=${option.filter}`
					}
					className={`${
						isActive(option.filter)
							? 'bg-slate-600 font-medium text-white hover:text-current'
							: 'bg-slate-800 font-normal text-slate-300 hover:text-white hover:bg-slate-700'
					} ${
						index === 0 ? 'rounded-l-lg' : 'rounded-none'
					} flex items-center h-full px-2 py-0.5`}>
					{option.name}
				</Link>
			))}
		</div>
	)
}
