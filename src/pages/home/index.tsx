import * as React from 'react';
import * as S from './styles';
import img1 from '../../assets/homepage1.png';
import img2 from '../../assets/homepage2.jpg';
import flowerImg from '../../assets/flower.jpg';
import { HomepageWordings, GlobalWordings } from '../../Wordings';
import { QuoteBanner } from '../../components/quote';

export const HomePage: React.FC = () => {
	const Wordings = HomepageWordings.homepageEndLine.split('\n');
	return (
		<>
			<S.GlobalWrapper>
				<S.CaptionCTAWrapper>
					<S.Caption>{HomepageWordings.homepageCaption}</S.Caption>
					<S.StyledCTALink to="/readings">
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
					{Wordings.map((wording) => (
						<QuoteBanner key={wording}>{wording}</QuoteBanner>
					))}
				</S.EndLinesWrapper>
			</S.GlobalWrapper>
		</>
	);
};
