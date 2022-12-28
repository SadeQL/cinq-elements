import * as React from 'react';
import * as S from './styles';
import bookingHeroImg from '../../assets/booking.jpg';
import bookingEndImg from '../../assets/booking-2.jpg';

import { BookingWordings, GlobalWordings } from '../../Wordings';
import { QuoteBanner } from '../../components/quote';
import { CTARedirect } from '../../components/cta';

export const BookingPage: React.FC = (...url) => {
	const bodyWordings = BookingWordings.description.trim().split('\n');
	const conditionWordings = BookingWordings.condition.trim().split('\n');
	const pageEndLineWordings = BookingWordings.bookingPageEndLine
		.trim()
		.split('\n');
	const bookingUrl =
		'https://form.jotform.com/220267190110038?fbclid=IwAR24gqOXsIJ7-1zOsvXVo7bkm4Dkgg5JXtCX1u_2tAjIcDhLNAHjFICwehQ';
	const instagramUrl = 'https://www.instagram.com/cinq.elements/';
	const openEmailModal = 'mailto:felicia.chiang@icloud.com';

	return (
		<S.GlobalWrapper>
			<S.Wrapper>
				<S.Caption>{BookingWordings.title}</S.Caption>
				<S.ImageContainer>
					<img src={bookingHeroImg} />
				</S.ImageContainer>
			</S.Wrapper>
			<S.BodyWrapper>
				{bodyWordings.map((wording) => (
					<S.BodyDescription key={wording}>{wording}</S.BodyDescription>
				))}
				<CTARedirect href={bookingUrl}>
					{GlobalWordings.bookASession}
				</CTARedirect>
				<S.BookingCTATitle>{BookingWordings.subTitle}</S.BookingCTATitle>
				<S.BookingCTABody>{BookingWordings.price}</S.BookingCTABody>
				{conditionWordings.map((wording) => (
					<S.BodyDescription key={wording}>{wording}</S.BodyDescription>
				))}
				<CTARedirect href={instagramUrl}>
					{BookingWordings.instagram}
				</CTARedirect>

				<S.BodyDescription>{BookingWordings.question}</S.BodyDescription>
				<CTARedirect href={openEmailModal}>{BookingWordings.email}</CTARedirect>
			</S.BodyWrapper>
			<S.SloganImageWrapper>
				<S.Slogan>{BookingWordings.bookingPageSlogan}</S.Slogan>
				<S.ImageContainer>
					<img src={bookingEndImg} />
				</S.ImageContainer>
			</S.SloganImageWrapper>
			<S.EndLinesWrapper>
				{pageEndLineWordings.map((wording) => (
					<QuoteBanner key={wording}>{wording}</QuoteBanner>
				))}
			</S.EndLinesWrapper>
		</S.GlobalWrapper>
	);
};
