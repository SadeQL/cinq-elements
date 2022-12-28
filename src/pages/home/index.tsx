import * as React from 'react';
import * as S from './styles';
import img1 from '../../assets/homepage1.png';
import img2 from '../../assets/homepage2.jpg';
import flowerImg from '../../assets/flower.jpg';
import { HomepageWordings, GlobalWordings } from '../../Wordings';

export const HomePage: React.FC = () => {
	return (
		<>
			<S.GlobalWrapper>
				<S.CaptionCTAWrapper>
					<S.Caption>{HomepageWordings.homepageCaption}</S.Caption>
					<S.StyledCTALink to="home">
						{GlobalWordings.discoverMore}
					</S.StyledCTALink>
				</S.CaptionCTAWrapper>
				<S.Wrapper>
					<S.ImageContainer>
						<img src={img1} />
					</S.ImageContainer>
					<S.ImageContainer>
						<img src={img2} />
					</S.ImageContainer>
				</S.Wrapper>
				<S.SloganImageWrapper>
					<S.Slogan>{HomepageWordings.homepageSlogan}</S.Slogan>
					<S.ImageContainer>
						<img src={flowerImg} />
					</S.ImageContainer>
				</S.SloganImageWrapper>
				<S.EndLinesWrapper>
					<S.EndLinesText>{HomepageWordings.homepageEndLine}</S.EndLinesText>
					<S.EndLinesText>{HomepageWordings.homePageEndLine2}</S.EndLinesText>
					<S.EndLinesText>{HomepageWordings.endLineAuthor}</S.EndLinesText>
				</S.EndLinesWrapper>
			</S.GlobalWrapper>
		</>
	);
};
