import * as React from 'react';
import * as S from './styles';
import baziHeroImg from '../../assets/bazi-1.jpg';
import {
	BaZipageWordings,
	GlobalWordings,
	TestimonialWordings,
} from '../../Wordings';
import { QuoteBanner } from '../../components/quote';

export const BaziPage: React.FC = () => {
	const baziDescription = BaZipageWordings.bazipageDescription.split('\n');

	return (
		<S.GlobalWrapper>
			<S.Wrapper>
				<S.Caption>{BaZipageWordings.title}</S.Caption>
				<S.ImageContainer>
					<img src={baziHeroImg} />
				</S.ImageContainer>
				<S.Caption>{BaZipageWordings.baziChineseCharacter}</S.Caption>
				<S.TitleDescription>
					{BaZipageWordings.baziWordDescription}
				</S.TitleDescription>
			</S.Wrapper>
			<S.BodyWrapper>
				{baziDescription.map((wording) => (
					<S.BodyDescription key={wording}>{wording}</S.BodyDescription>
				))}
				<S.StyledCTALink to="/">
					{GlobalWordings.learnAboutFiveElements}
				</S.StyledCTALink>
			</S.BodyWrapper>
			<S.EndLinesWrapper>
				<QuoteBanner>{TestimonialWordings.descriptionOne}</QuoteBanner>
				<QuoteBanner>{TestimonialWordings.nameOne}</QuoteBanner>
			</S.EndLinesWrapper>
		</S.GlobalWrapper>
	);
};
