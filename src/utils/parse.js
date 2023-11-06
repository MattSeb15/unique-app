/**
 *
 * @param {number} month
 * @returns {string}
 */
export function parseMonth(month) {
	switch (month) {
		case 1:
			return 'Ene'
		case 2:
			return 'Feb'
		case 3:
			return 'Mar'
		case 4:
			return 'Abr'
		case 5:
			return 'May'
		case 6:
			return 'Jun'
		case 7:
			return 'Jul'
		case 8:
			return 'Ago'
		case 9:
			return 'Sep'
		case 10:
			return 'Oct'
		case 11:
			return 'Nov'
		case 12:
			return 'Dic'
		default:
			return ''
	}
}

/**
 *
 * @param {number} time
 * @returns {string}
 */
export function parseTime(time) {
	if (time < 10) {
		return `0${time}`
	}
	return time
}

/**
 * @param {number} number
 * @returns {string}
 */
export function getFixedNumberString(number = 0) {
	if (number >= 1000000) {
		return (number / 1000000).toFixed(1) + 'm'
	}
	if (number >= 1000) {
		return (number / 1000).toFixed(1) + 'k'
	}
	return number
}
