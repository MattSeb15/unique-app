'use client'
import ToolsIconEdit from '@/components/icons/tools/edit'
import ToolsIconNotification from '@/components/icons/tools/notification'
import ToolsIconShare from '@/components/icons/tools/share'
import QuestionsFavoriteIcon from '@/components/icons/questions/favorite'

export default function OptionsButtons({
	buttonClass = 'text-xs text-slate-500 hover:text-slate-200 hover:bg-slate-800 p-1 rounded-lg',
	iconClass = 'h-5 sm:h-6 w-auto',
}) {
	return (
		<div className='flex sm:flex-col gap-2 items-center'>
			<button
				onClick={() => {
					console.log('favorite')
				}}
				title='Guardar esta pregunta'
				className={buttonClass}>
				<QuestionsFavoriteIcon className={iconClass} />
			</button>
			<button
				onClick={() => console.log('edit')}
				title='Editar'
				className={buttonClass}>
				<ToolsIconEdit className={iconClass} />
			</button>
			<button
				onClick={() => console.log('notification')}
				title='Activar notificaciones'
				className={buttonClass}>
				<ToolsIconNotification className={iconClass} />
			</button>
			<button
				onClick={() => console.log('share')}
				title='Compartir'
				className={buttonClass}>
				<ToolsIconShare className={iconClass} />
			</button>
		</div>
	)
}
