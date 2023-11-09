export const TEXTAPP = {
	title: 'Unique',
	slogan:
		'Espacio educativo dinámico y acogedor, construido por y para estudiantes',
	slSubtitle:
		'Comparte conocimientos, explora consultas, accede a repositorios especializados por comunidad y materia. ¡Monetiza tu conocimiento, convierte la curiosidad en una oportunidad para aprender, enseñar y crecer!',
	errors: {
		500: {
			title: 'Error interno del servidor',
			message: 'Estamos trabajando para solucionar el problema.',
			identifier: 'Error 500',
		},
		404: {
			title: 'Página no encontrada',
			message: 'Esta no es la página web que estás buscando',
			identifier: 'Error 404',
		},
		401: {
			title: 'No autorizado',
			message: 'Intente más tarde',
			identifier: 'Error 401',
		},
		400: {
			title: 'Solicitud incorrecta',
			message: 'Intente más tarde',
			identifier: 'Error 400',
		},
	},
	feature: {
		title: 'Descubre nuestros servicios',
		description:
			'Conéctate con el conocimiento en cualquier momento, desde cualquier lugar: tu plataforma educativa en línea, donde cada pregunta es un paso hacia el aprendizaje.',
		characs: [
			{
				title: 'Plataforma Educativa',
				description:
					'Capacita a todas las comunidadades con nuestra plataforma intuitiva y adaptada a cualquier área.',
				iconKey: 'courses',
			},
			{
				title: 'Participación Activa',
				description:
					'Responde preguntas y comparte conocimiento dentro de una comunidad educativa interactiva.',
				iconKey: 'participation',
			},

			{
				title: 'Diversidad y Colaboración',
				description:
					'Crea tu propia comunidad para fomentar la diversidad de conocimientos y colaboración entre comunidades.',
				iconKey: 'diversity',
			},
			{
				title: 'Acceso a Repositorios Universitarios',
				description:
					'Sube o explora materiales de estudio específicos proporcionados por cada universidad y materia.',
				iconKey: 'repositories',
			},
			{
				title: 'Monetización del Conocimiento',
				description:
					'Monetiza la experiencia educativa realizando cursos, respondiendo preguntas o subiendo repositorios a la comunidad.',
				iconKey: 'monetize',
			},
			{
				title: 'Desafíos Académicos',
				description:
					'Participa en desafíos académicos interuniversitarios, gana premios demostrando tus conocimientos y habilidades.',
				iconKey: 'challenges',
			},
		],
	},
	pricing: {
		user: {
			title: 'Membresias de Usuario',
			description: `Unique ofrece una plataforma de acceso gratuito para todos los
				usuarios. Sin embargo, si buscas maximizar tu experiencia y
				aprovechar al máximo los recursos y funcionalidades disponibles, te
				brindamos la oportunidad de adquirir una de nuestras membresías
				premium, diseñadas para mejorar tu aprendizaje y facilitar un acceso
				aún más completo a nuestra plataforma educativa.`,
			plans: [
				{
					name: 'Free',
					price: 0,
					time: 'mes',
					href: '#',
					colorClassName: 'from-cyan-500 to-blue-500',
					features: [
						'Ventaja 1',
						'Ventaja 2',
						'Ventaja 3',
						'Ventaja 4',
						'Ventaja 5',
					],
				},
				{
					name: 'Premium',
					price: 10,
					time: 'mes',
					href: '#',
					colorClassName: 'from-purple-600 to-blue-500',
					features: [
						'Ventaja 1',
						'Ventaja 2',
						'Ventaja 3',
						'Ventaja 4',
						'Ventaja 5',
					],
				},
				{
					name: 'Premium+',
					price: 20,
					time: 'mes',
					href: '#',
					colorClassName: 'from-pink-500 to-orange-400',
					features: [
						'Ventaja 1',
						'Ventaja 2',
						'Ventaja 3',
						'Ventaja 4',
						'Ventaja 5',
					],
				},
			],
		},
		comunity: {
			title: 'Mejoras de Comunidad',
			description: `Maximizar tu experiencia, aprovechar al máximo los recursos y
				funcionalidades disponibles para la comunidad, obten beneficios
				premium al adquirir una de nuestras mejoras para la comunidad,
				diseñadas para mejorar tu comunidad y facilitar un acceso aún más
				completo a nuestra plataforma educativa.`,
			plans: [
				{
					name: 'Free',
					price: 0,
					time: 'mes',
					href: '#',
					colorClassName: 'from-cyan-500 to-blue-500',
					features: [
						'Ventaja 1',
						'Ventaja 2',
						'Ventaja 3',
						'Ventaja 4',
						'Ventaja 5',
					],
				},
				{
					name: 'Premium',
					price: 10,
					time: 'mes',
					href: '#',
					colorClassName: 'from-purple-600 to-blue-500',
					features: [
						'Ventaja 1',
						'Ventaja 2',
						'Ventaja 3',
						'Ventaja 4',
						'Ventaja 5',
					],
				},
				{
					name: 'Premium+',
					price: 20,
					time: 'mes',
					href: '#',
					colorClassName: 'from-pink-500 to-orange-400',
					features: [
						'Ventaja 1',
						'Ventaja 2',
						'Ventaja 3',
						'Ventaja 4',
						'Ventaja 5',
					],
				},
			],
		},
	},
	header: {
		links: [
			{
				name: 'Inicio',
				href: '#inicio',
			},
			{
				name: 'Comunidades',
				href: '#comunidades',
			},
			{
				name: 'Servicios',
				href: '#servicios',
			},
			{
				name: 'Plataforma',
				href: '#plataforma',
			},
			{
				name: 'Desafíos',
				href: '#desafios',
			},

			{
				name: 'Unique+',
				href: '#uniqueplus',
			},
			{
				name: 'Contacto',
				href: '#contacto',
			},
		],
	},
	accounts: {
		sloganTitle:
			'Accede o Regístrate para una experiencia educativa transformadora.',
		sloganDescription:
			'¡Explora un mundo de conocimiento! Inicia sesión o regístrate para sumergirte en una experiencia educativa única y enriquecedora a tu alcance.',
	},
	sidebar: [
		{ name: 'Inicio', route: '/u/inicio' },
		{ name: 'Preguntas', route: '/u/preguntas' },
		{ name: 'Comunidad', route: '/u/comunidad' },
		{ name: 'Biblioteca', route: '/u/biblioteca' },
		{ name: 'Cursos', route: '/u/cursos' },
		{ name: 'Desafíos', route: '/u/desafios' },
		{ name: 'Mercado', route: '/u/mercado' },
	],
	questions: {
		filters: [
			{ name: 'nuevos', value: 'new' },
			{ name: 'populares', value: 'popular' },
			{ name: 'sin respuesta', value: 'unanswered' },
			{ name: 'resueltos', value: 'solved' },
			{ name: 'cerrados', value: 'closed' },
			{ name: 'vistos', value: 'viewed' },
			{ name: 'con recompensa', value: 'rewarded' },
			{ name: 'más votados', value: 'mostVoted' },
			{ name: '' },
		],
	},
}
