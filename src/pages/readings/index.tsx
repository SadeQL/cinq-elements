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
				<S.BodyDescription>{wordings[0]}</S.BodyDescription>
				<S.BodyDescription>{wordings[1]}</S.BodyDescription>
				<S.BodyDescription>{wordings[2]}</S.BodyDescription>
				<S.BodyDescription>{wordings[3]}</S.BodyDescription>
				<S.BodyDescription>{wordings[4]}</S.BodyDescription>
				<S.BodyDescription>{wordings[5]}</S.BodyDescription>
				<S.BodyDescription>{wordings[6]}</S.BodyDescription>
				<S.StyledCTALink to="/home">{GlobalWordings.howItGoes}</S.StyledCTALink>
			</S.BodyWrapper>
			<S.Wrapper>
				<S.ImageContainer>
					<img src={readingsEndImg} />
				</S.ImageContainer>
			</S.Wrapper>
			<S.EndLinesWrapper>
				<S.EndLinesText>{endPageWordings[0]}</S.EndLinesText>
				<S.EndLinesText>{endPageWordings[1]}</S.EndLinesText>
				<S.EndLinesText>{endPageWordings[2]}</S.EndLinesText>
			</S.EndLinesWrapper>
		</S.GlobalWrapper>
	);
};
