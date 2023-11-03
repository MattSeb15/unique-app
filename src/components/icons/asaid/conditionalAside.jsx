import AsaidIconChallenges from './challenges'
import AsaidIconCommunity from './community'
import AsaidIconCourses from './courses'
import AsaidIconHome from './home'
import AsaidIconQuestions from './questions'
import AsaidIconRepo from './repositories'

export default function ConditionalIcon({ icon = '', className = '' }) {
	const icons = {
		Preguntas: <AsaidIconQuestions className={className} />,
		Desafios: <AsaidIconChallenges className={className} />,
		Cursos: <AsaidIconCourses className={className} />,
		Comunidad: <AsaidIconCommunity className={className} />,
		Inicio: <AsaidIconHome className={className} />,
		Repositorios: <AsaidIconRepo className={className} />,
	}

	return <>{icons[icon]}</>
}
