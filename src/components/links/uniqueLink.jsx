import Link from 'next/link'
import React from 'react'
import UniqueSvgPath from '../logos/uniqueSvgPath'
import UniqueText from '../logos/uniqueText'

export default function UniqueLink() {
	return (
		<Link
			href='/'
			className='flex items-center'>
			<span className='sr-only'>Unique Logo</span>
			<UniqueSvgPath
				width='60px'
				height='60px'
			/>
			<div className='mt-1'>
				<UniqueText height={30} />
			</div>
		</Link>
	)
}
