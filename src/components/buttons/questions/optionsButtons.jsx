'use client'
import ToolsIconEdit from '@/components/icons/tools/edit'
import ToolsIconNotification from '@/components/icons/tools/notification'
import ToolsIconShare from '@/components/icons/tools/share'

export default function OptionsButtons({
	buttonClass = 'text-xs hover:text-white/50',
	iconClass = 'h-auto w-5',
}) {
	return (
		<div className='flex gap-2 items-start mr-2'>
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
