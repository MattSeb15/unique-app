import Image from 'next/image'

function UniqueLogo({ width, height, className }) {
	return (
		<Image
			src='/assets/images/logo.avif'
			width={width ?? 50}
			height={height ?? 50}
			className={className}
			alt='Unique Logo'
		/>
	)
}

export default UniqueLogo
