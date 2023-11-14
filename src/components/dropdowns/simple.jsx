'use client'
import Link from 'next/link'
import React, { useEffect, useState, useRef } from 'react'
import { ArrowsIconCaretDown } from '../icons/arrows/caret'
import { useSearchParams } from 'next/navigation'

export function SimpleDropdown({
	options = [],
	initialText,
	onlyFiltersOfDropDown = [],
}) {
	const [showOptions, setShowOptions] = useState(false)
	const [selectedOption, setSelectedOption] = useState(null)
	const dropdownRef = useRef(null)

	const searchParams = useSearchParams()
	const filterParams = searchParams.get('filter')
	const isFilterOfDropDown = onlyFiltersOfDropDown.includes(filterParams)

	const isActiveFilter = filter => filter === filterParams

	useEffect(() => {
		const pageClickEvent = e => {
			if (
				dropdownRef.current !== null &&
				!dropdownRef.current.contains(e.target)
			) {
				setShowOptions(!showOptions)
			}
		}
		if (showOptions) {
			window.addEventListener('click', pageClickEvent)
		}
		return () => {
			window.removeEventListener('click', pageClickEvent)
		}
	}, [showOptions])

	const handleClick = option => {
		setSelectedOption(JSON.stringify(option))
		setShowOptions(false)
	}

	return (
		<div
			ref={dropdownRef}
			className='relative h-full inline-block text-left'>
			<button
				title={JSON.parse(selectedOption)?.name ?? initialText}
				type='button'
				className={`${
					isFilterOfDropDown
						? 'bg-slate-600 font-medium text-white hover:text-current'
						: 'bg-slate-800 font-normal text-slate-300 hover:text-white hover:bg-slate-700'
				} border-l border-l-slate-600  text-xs rounded-r-lg block px-1 h-7 sm:h-full`}
				id='options-menu'
				aria-haspopup='true'
				aria-expanded='true'
				onClick={() => setShowOptions(!showOptions)}>
				<span className='hidden md:inline'>{initialText ?? 'Más'}</span>
				<ArrowsIconCaretDown className='w-3 h-auto ml-1 inline' />
			</button>

			<div
				className={`${
					showOptions ? 'block' : 'hidden'
				} origin-top-right absolute z-40 px-2 py-1 right-0 mt-2 w-56 rounded-md bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none`}
				role='menu'
				aria-orientation='vertical'
				aria-labelledby='options-menu'>
				<div
					className='py-1'
					role='none'>
					{options.map((option, index) => (
						<Link
							key={index}
							href={`/u/preguntas/?filter=${option.filter}`}
							className={`${
								isActiveFilter(option.filter)
									? 'border-l-2 border-blue-600 bg-slate-700'
									: 'border-none'
							} block mb-1 text-slate-200 font-normal text-xs px-4 py-2 hover:bg-slate-700`}
							role='menuitem'
							onClick={() => handleClick(option)}>
							{option.name}
						</Link>
					))}
					{options.length === 0 && (
						<p className='block px-4 py-2 text-sm'>No hay opciones</p>
					)}
				</div>
			</div>
		</div>
	)
}
