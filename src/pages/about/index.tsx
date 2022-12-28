import * as React from 'react';
import * as S from './styles';
import aboutImg from '../../assets/about.jpg';
import authorImg from '../../assets/felicia.png';
import { AboutWordings } from '../../Wordings';
import { QuoteBanner } from '../../components/quote';

export const AboutPage: React.FC = () => {
	const firstDescriptionWordings = AboutWordings.description.trim().split('\n');
	const secondaryDescriptionWordings = AboutWordings.secondaryDescription
		.trim()
		.split('\n');
	const endPageLineWordings = AboutWordings.aboutPageEndLine.trim().split('\n');
	return (
		<S.GlobalWrapper>
			<S.Wrapper>
				<S.Caption>{AboutWordings.title}</S.Caption>
				<S.ImageContainer>
					<img src={aboutImg} />
				</S.ImageContainer>
			</S.Wrapper>
			<S.BodyWrapper>
				{firstDescriptionWordings.map((wording) => (
					<S.BodyDescription key={wording}>{wording}</S.BodyDescription>
				))}
			</S.BodyWrapper>
			<S.Wrapper>
				<S.ImageContainer>
					<img src={authorImg} />
				</S.ImageContainer>
			</S.Wrapper>
			<S.BodyWrapper>
				{secondaryDescriptionWordings.map((wording) => (
					<S.BodyDescription key={wording}>{wording}</S.BodyDescription>
				))}
				<S.BodyDescription>{AboutWordings.nameTag}</S.BodyDescription>
			</S.BodyWrapper>
			<S.EndLinesWrapper>
				{endPageLineWordings.map((wording) => (
					<QuoteBanner key={wording}>{wording}</QuoteBanner>
				))}
			</S.EndLinesWrapper>
		</S.GlobalWrapper>
	);
};
