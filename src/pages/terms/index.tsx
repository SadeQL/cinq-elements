import * as React from 'react';
import * as S from './styles';
import { TermsAndConditionsPageWordings, GlobalWordings } from '../../Wordings';

export const TermsAndConditionsPage: React.FC = () => {
	const bookingDescriptionWordings =
		TermsAndConditionsPageWordings.bookingDescription.trim().split('\n');
	const rescheduleDescriptionWordings =
		TermsAndConditionsPageWordings.rescheduleDescription.trim().split('\n');
	const paymentDescriptionWordings =
		TermsAndConditionsPageWordings.paymentDescription.trim().split('\n');
	return (
		<S.GlobalWrapper>
			<S.Wrapper>
				<S.Title>{GlobalWordings.termsAndCondition}</S.Title>
			</S.Wrapper>
			<S.BodyWrapper>
				<S.SecondaryTitle>
					{TermsAndConditionsPageWordings.bookingTitle}
				</S.SecondaryTitle>
				{bookingDescriptionWordings.map((wording) => (
					<S.BodyDescription key={wording}>{wording}</S.BodyDescription>
				))}
			</S.BodyWrapper>
			<S.BodyWrapper>
				<S.SecondaryTitle>
					{TermsAndConditionsPageWordings.rescheduleTitle}
				</S.SecondaryTitle>
				{rescheduleDescriptionWordings.map((wording) => (
					<S.BodyDescription key={wording}>{wording}</S.BodyDescription>
				))}
			</S.BodyWrapper>
			<S.BodyWrapper>
				<S.SecondaryTitle>
					{TermsAndConditionsPageWordings.paymentTitle}
				</S.SecondaryTitle>
				{paymentDescriptionWordings.map((wording) => (
					<S.BodyDescription key={wording}>{wording}</S.BodyDescription>
				))}
			</S.BodyWrapper>
		</S.GlobalWrapper>
	);
};
