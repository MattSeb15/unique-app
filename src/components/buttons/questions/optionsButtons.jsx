'use client'
import ToolsIconEdit from '@/components/icons/tools/edit'
import ToolsIconNotification from '@/components/icons/tools/notification'
import ToolsIconShare from '@/components/icons/tools/share'
import QuestionsFavoriteIcon from '@/components/icons/questions/favorite'

export function OptionsButtons({
	buttonClass = 'text-xs text-slate-500 hover:text-slate-200 hover:bg-slate-800 p-1 rounded-lg',
	iconClass = 'h-5 sm:h-6 w-auto',
	containerClass = 'flex sm:flex-col gap-2 items-center',
}) {
	return (
		<div className={containerClass}>
			<button
				onClick={() => {
					console.log('favorite')
				}}
				title='Guardar pregunta'
				className={buttonClass}>
				<QuestionsFavoriteIcon className={iconClass} />
			</button>
			<button
				onClick={() => console.log('edit')}
				title='Editar pregunta'
				className={buttonClass}>
				<ToolsIconEdit className={iconClass} />
			</button>
			<button
				onClick={() => console.log('notification')}
				title='Activar notificaciones de esta pregunta'
				className={buttonClass}>
				<ToolsIconNotification className={iconClass} />
			</button>
			<button
				onClick={() => console.log('share')}
				title='Compartir pregunta'
				className={buttonClass}>
				<ToolsIconShare className={iconClass} />
			</button>
		</div>
	)
}

export function OptionsButtonsAnswer({
	buttonClass = 'text-xs text-slate-500 hover:text-slate-200 hover:bg-slate-800 p-1 rounded-lg',
	iconClass = 'h-5 sm:h-6 w-auto',
	containerClass = 'flex sm:flex-col gap-2 items-center',
}) {
	return (
		<div className={containerClass}>
			<button
				onClick={() => {
					console.log('favorite')
				}}
				title='Guardar respuesta'
				className={buttonClass}>
				<QuestionsFavoriteIcon className={iconClass} />
			</button>
			<button
				onClick={() => console.log('notification')}
				title='Activar notificaciones de esta respuesta'
				className={buttonClass}>
				<ToolsIconNotification className={iconClass} />
			</button>
			<button
				onClick={() => console.log('share')}
				title='Compartir respuesta'
				className={buttonClass}>
				<ToolsIconShare className={iconClass} />
			</button>
		</div>
	)
}
