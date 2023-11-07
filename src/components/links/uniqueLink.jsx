import Link from 'next/link'
import React from 'react'
import UniqueSvgPath from '../logos/uniqueSvgPath'
import UniqueText from '../logos/uniqueText'

export default function UniqueLink({
	logoClassName = '',
	textClassName = '',
	className = 'flex items-center',
}) {
	return (
		<Link
			href='/'
			className={className}>
			<span className='sr-only'>Unique Logo</span>
			<UniqueSvgPath
				width='60px'
				height='60px'
				className={logoClassName}
			/>
			<div className='mt-1'>
				<UniqueText
					height={30}
					className={textClassName}
				/>
			</div>
		</Link>
	)
}
