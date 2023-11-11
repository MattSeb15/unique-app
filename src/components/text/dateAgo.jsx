export default function TextDateAgo({ timestamp = 0, ...props }) {
	const formatearFecha = ts => {
		const ahora = Date.now()
		const diferencia = ahora - ts
		const fecha = new Date(ts)
		const meses = [
			'Ene',
			'Feb',
			'Mar',
			'Abr',
			'May',
			'Jun',
			'Jul',
			'Ago',
			'Sep',
			'Oct',
			'Nov',
			'Dic',
		]

		if (fecha.getDate() === new Date(ahora).getDate()) {
			// Hoy, pero más de 1 hora
			return `Hoy a las ${fecha.getHours()}:${String(
				fecha.getMinutes()
			).padStart(2, '0')}`
		} else if (diferencia < 172800000) {
			// Ayer
			return `Ayer a las ${fecha.getHours()}:${String(
				fecha.getMinutes()
			).padStart(2, '0')} horas`
		} else if (fecha.getFullYear() !== new Date(ahora).getFullYear()) {
			// Hace un año o más
			return `${
				meses[fecha.getMonth()]
			} ${fecha.getDate()}, ${fecha.getFullYear()} a las ${fecha.getHours()}:${String(
				fecha.getMinutes()
			).padStart(2, '0')}`
		} else {
			// Otro caso
			return `${
				meses[fecha.getMonth()]
			} ${fecha.getDate()} a las ${fecha.getHours()}:${String(
				fecha.getMinutes()
			).padStart(2, '0')}`
		}
	}
	const dateAgo = formatearFecha(timestamp)
	return <div {...props}>{dateAgo}</div>
}
