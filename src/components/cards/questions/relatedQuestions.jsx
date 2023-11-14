import RelatedQuestionItem from './relatedQuestionItem'

export default function RelatedQuestionsCard() {
	return (
		<div className='p-2 bg-slate-800 rounded-md w-fit flex flex-col items-start justify-start mr-0 sm:mr-10'>
			<div className='flex flex-col items-start justify-start mt-2 gap-1'>
				<RelatedQuestionItem
					questionId='questionId'
					question='pregunta relacionada 1 sobre no se que y no se cuanto'
					votes={1}
				/>
				<RelatedQuestionItem
					questionId='questionId'
					question='pregunta relacionada 2 dqwmod dmsopdm qmdoqpdpq dmq'
					votes={-1}
				/>
				<RelatedQuestionItem
					questionId='questionId'
					question='pregunta relacionada 3 dqwmod dmsopdm qmdoqpdpq dmq asdasd sadasd asdasdasdasd asdsads adasd asdasd asda sdsad saddsaasdsadasdasd sadadqdq dqda dadadadsadasds adsadasd asdsa dsa'
					votes={0}
				/>
			</div>
		</div>
	)
}
