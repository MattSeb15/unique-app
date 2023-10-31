export default function Card({ children, className = '' }) {
	return (
		<section
			className={` bg-white border-y border-gray-200  dark:bg-slate-900 dark:border-y-gray-800  dark:bg-opacity-20 ${className}`}>
			{children}
		</section>
	)
}
