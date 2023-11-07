import Link from 'next/link'
import React from 'react'

export default function IconLinkText(props) {
	return (
		<Link
			href={props?.href}
			{...props}>
			{props?.children}
			<p className='mt-2 mr-0 lg:mr-5 text-sm lg:text-md hidden lg:inline'>
				{props?.text}
			</p>
		</Link>
	)
}
