import * as React from 'react';
import * as S from './styles';
import readingsHeroImg from '../../assets/hero-1.jpg';
import readingsEndImg from '../../assets/readings-2.jpg';
import { ReadingsWordings, GlobalWordings } from '../../Wordings';

export const ReadingsPage: React.FC = () => {
	const wordings = ReadingsWordings.description.trim().split('\n');
	const endPageWordings = ReadingsWordings.readingPageEndLine
		.trim()
		.split('\n');

	return (
		<S.GlobalWrapper>
			<S.Wrapper>
				<S.ImageContainer>
					<img src={readingsHeroImg} />
				</S.ImageContainer>
				<S.Caption>{ReadingsWordings.title}</S.Caption>
			</S.Wrapper>
			<S.BodyWrapper>
				{wordings.map((wording) => (
					<S.BodyDescription key={wording}>{wording}</S.BodyDescription>
				))}
				<S.StyledCTALink to="/booking">
					{GlobalWordings.howItGoes}
				</S.StyledCTALink>
			</S.BodyWrapper>
			<S.Wrapper>
				<S.ImageContainer>
					<img src={readingsEndImg} />
				</S.ImageContainer>
			</S.Wrapper>
			<S.EndLinesWrapper>
				{endPageWordings.map((wording) => (
					<S.EndLinesText key={wording}>{wording}</S.EndLinesText>
				))}
			</S.EndLinesWrapper>
		</S.GlobalWrapper>
	);
};
