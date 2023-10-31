import React from 'react'
import CoursesIcon from './courses'
import ChallengesIcon from './challenges'
import ReposIcon from './repositories'
import MonetizeIcon from './monetize'
import ParticipationIcon from './participation'
import DiversityIcon from './diversity'

export default function SelectorIcon({ iconKey = '' }) {
	const listIcons = {
		courses: <CoursesIcon />,
		challenges: <ChallengesIcon />,
		repositories: <ReposIcon />,
		monetize: <MonetizeIcon />,
		participation: <ParticipationIcon />,
		diversity: <DiversityIcon />,
	}
	return (
		(
			<div className=' bg-blue-700  rounded-full p-2'>{listIcons[iconKey]}</div>
		) ?? <></>
	)
}
