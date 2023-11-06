import { getFixedNumberString, parseMonth, parseTime } from '@/utils/parse'

export class Question {
	/**
	 * @param {string} id
	 * @param {string} ownerId
	 * @param {string} title
	 * @param {string} description
	 * @param {string[]} tags
	 * @param {Date} createdDate
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
		tags,
		createdDate,
		answers,
		votes,
		reports,
		views,
		favorites
	) {
		this.id = id
		this.ownerId = ownerId
		this.title = title
		this.description = description
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
		const day = this.createdDate.getDate()
		const month = this.createdDate.getMonth() + 1
		const year = this.createdDate.getFullYear()
		const hour = this.createdDate.getHours()
		const minutes = this.createdDate.getMinutes()
		return `preguntado ${parseMonth(month)} ${day}, ${year} a las ${parseTime(
			hour
		)}:${parseTime(minutes)}`
	}
}
