export function MdiSearch(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1.5em'
			height='1.5em'
			viewBox='0 0 24 24'
			{...props}>
			<g fill='none'>
				<path
					fill='currentColor'
					d='M19 11a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z'
					opacity='.16'
				/>
				<path
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z'
				/>
			</g>
		</svg>
	)
}
