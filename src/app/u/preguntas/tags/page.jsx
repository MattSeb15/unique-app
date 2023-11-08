export default function TagsPage() {
	return (
		<div className='flex h-full w-full gap-5'>
			<div className='flex flex-col flex-[3] items-start justify-start h-full gap-3'>
				<div
					className={`bg-blue-800/5 rounded-md w-full flex flex-col gap-2 flex-[3] p-2`}></div>
			</div>
			<div className='hidden sm:flex sm:flex-1'>
				<div className={`h-full w-full bg-blue-800/5 rounded-md`}></div>
			</div>
		</div>
	)
}
