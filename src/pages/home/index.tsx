import * as React from 'react';
import * as S from './styles';
import img1 from '../../assets/homepage1.png';
import img2 from '../../assets/homepage2.jpg';
import { HomepageWordings, GlobalWordings } from '../../Wordings';

export const HomePage: React.FC = () => {
	return (
		<>
			<S.Wrapper>
				<S.ImageContainer>
					<img src={img1} />
				</S.ImageContainer>
				<S.ImageContainer>
					<img src={img2} />
				</S.ImageContainer>
			</S.Wrapper>
			<S.SloganCTAWrapper>
				<S.Caption>{HomepageWordings.homepageCaption}</S.Caption>
				<S.StyledCTALink to="home">
					{GlobalWordings.discoverMore}
				</S.StyledCTALink>
			</S.SloganCTAWrapper>
		</>
	);
};
