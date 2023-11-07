import { getFixedNumberString, parseMonth, parseTime } from '@/utils/parse'

export default class Question {
	/**
	 * @param {string} id
	 * @param {string} ownerId
	 * @param {string} title
	 * @param {string} description
	 * @param {boolean} isResolved
	 * @param {boolean} isPriced
	 * @param {number} price
	 * @param {string[]} tags
	 * @param {number} createdDate
	 * @param {string[]} answers
	 * @param {string[]} votes
	 * @param {string[]} views
	 * @param {string[]} reports
	 * @param {string[]} favorites
	 **/
	constructor(
		id,
		ownerId,
		title,
		description,
		isResolved = false,
		isPriced = false,
		price = 0,
		tags = [],
		createdDate = Date.now(),
		answers = [],
		votes = [],
		reports = [],
		views = [],
		favorites = []
	) {
		this.id = id
		this.ownerId = ownerId
		this.title = title
		this.description = description
		this.isResolved = isResolved
		this.isPriced = isPriced
		this.price = price
		this.tags = tags
		this.createdDate = createdDate
		this.answers = answers
		this.votes = votes
		this.reports = reports
		this.views = views
		this.favorites = favorites
	}

	getFixedStringVotes() {
		const votes = this.votes.length
		const fixedVotes = getFixedNumberString(votes)
		if (votes === 1) {
			return `${fixedVotes} Voto`
		}
		return `${fixedVotes} Votos`
	}

	getFixedStringAnswers() {
		const answers = this.answers.length
		const fixedAnswers = getFixedNumberString(answers)
		if (answers === 1) {
			return `${fixedAnswers} Respuesta`
		}
		return `${fixedAnswers} Respuestas`
	}

	getFixedStringViews() {
		const views = this.views.length
		const fixedViews = getFixedNumberString(views)
		if (views === 1) {
			return `${fixedViews} Vista`
		}
		return `${fixedViews} Vistas`
	}

	getParseDate() {
		const parseNumberToDate = new Date(this.createdDate)
		const day = parseNumberToDate.getDate()
		const month = parseNumberToDate.getMonth() + 1
		const year = parseNumberToDate.getFullYear()
		const hour = parseNumberToDate.getHours()
		const minutes = parseNumberToDate.getMinutes()
		return `preguntado ${parseMonth(month)} ${day}, ${year} a las ${parseTime(
			hour
		)}:${parseTime(minutes)}`
	}

	/**
	 * @param {string} id
	 */
	setId(id) {
		this.id = id
		return this
	}

	/**
	 * @param {string} ownerId
	 */
	setOwnerId(ownerId) {
		this.ownerId = ownerId
		return this
	}

	/**
	 * @param {string} title
	 */
	setTitle(title) {
		this.title = title
		return this
	}

	/**
	 * @param {string} description
	 */
	setDescription(description) {
		this.description = description
		return this
	}

	/**
	 * @param {boolean} isResolved
	 */
	setIsResolved(isResolved) {
		this.isResolved = isResolved
		return this
	}

	/**
	 * @param {boolean} isPriced
	 */
	setIsPriced(isPriced) {
		this.isPriced = isPriced
		return this
	}

	/**
	 * @param {number} price
	 */
	setPrice(price) {
		this.price = price
		return this
	}

	/**
	 * @param {string[]} tags
	 */
	setTags(tags) {
		this.tags = tags
		return this
	}

	/**
	 * @param {number} createdDate
	 */
	setCreatedDate(createdDate) {
		this.createdDate = createdDate
		return this
	}

	/**
	 * @param {string[]} answers
	 */
	setAnswers(answers) {
		this.answers = answers
		return this
	}

	/**
	 * @param {string[]} votes
	 */
	setVotes(votes) {
		this.votes = votes
		return this
	}

	/**
	 * @param {string[]} reports
	 */
	setReports(reports) {
		this.reports = reports
		return this
	}

	/**
	 * @param {string[]} views
	 */
	setViews(views) {
		this.views = views
		return this
	}

	/**
	 * @param {string[]} favorites
	 */
	setFavorites(favorites) {
		this.favorites = favorites
		return this
	}
}
