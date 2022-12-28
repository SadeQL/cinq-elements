import * as React from 'react';
import * as S from './styles';
import baziHeroImg from '../../assets/bazi-1.jpg';
import {
	BaZipageWordings,
	GlobalWordings,
	TestimonialWordings,
} from '../../Wordings';

export const BaziPage: React.FC = () => {
	const baziDescription = BaZipageWordings.bazipageDescription.split('\n');

	return (
		<S.GlobalWrapper>
			<S.Wrapper>
				<S.ImageContainer>
					<img src={baziHeroImg} />
				</S.ImageContainer>
				<S.Caption>{BaZipageWordings.title}</S.Caption>
				<S.Caption>{BaZipageWordings.baziChineseCharacter}</S.Caption>
				<S.TitleDescription>
					{BaZipageWordings.baziWordDescription}
				</S.TitleDescription>
			</S.Wrapper>
			<S.BodyWrapper>
				<S.BodyDescription>{baziDescription[0]}</S.BodyDescription>
				<S.BodyDescription>{baziDescription[1]}</S.BodyDescription>
				<S.BodyDescription>{baziDescription[2]}</S.BodyDescription>
				<S.StyledCTALink to="/home">
					{GlobalWordings.learnAboutFiveElements}
				</S.StyledCTALink>
			</S.BodyWrapper>
			<S.EndLinesWrapper>
				<S.EndLinesText>{TestimonialWordings.descriptionOne}</S.EndLinesText>
				<S.EndLinesText>{TestimonialWordings.nameOne}</S.EndLinesText>
			</S.EndLinesWrapper>
		</S.GlobalWrapper>
	);
};
