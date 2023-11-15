import RelatedQuestionItem from './relatedQuestionItem'

export default function RelatedQuestionsCard() {
	return (
		<div className='rounded-md w-full flex flex-col items-start justify-start'>
			<div className='flex w-full flex-col items-start justify-start mt-2 gap-1'>
				<RelatedQuestionItem
					questionId='questionId'
					question='pregunta relacionada 1 sobre no se que y no se cuanto'
					votes={1}
				/>
				<hr className='bg-gray-800 border-none rounded-full h-[2px] my-px w-full' />
				<RelatedQuestionItem
					questionId='questionId'
					question='pregunta relacionada 2 dqwmod dmsopdm qmdoqpdpq dmq'
					votes={-1}
				/>
				<hr className='bg-gray-800 border-none rounded-full h-[2px] my-px w-full' />
				<RelatedQuestionItem
					questionId='questionId'
					question='pregunta relacionada 3 dqwmod dmsopdm sad as  dasd sad asd asd asd asdsadaasdasdasddas asddas sdasdaasasdasas dasd qmdoqpdp saddsaasdsadasdasd sadadqdq dqda dadadadsadasds adsadasd asdsa dsa'
					votes={0}
				/>
			</div>
		</div>
	)
}
