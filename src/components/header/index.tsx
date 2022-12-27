import * as React from 'react';
import * as S from './styles';
import Logo from '../../assets/logo-beige.png';
import { GlobalWordings } from '../../Wordings';

export const Header: React.FC = () => {
	return (
		<>
			<S.LogoTitleWrapper>
				<S.Logo>
					<img src={Logo} />
				</S.Logo>
				<S.StyledTitleLink to="home">{GlobalWordings.title}</S.StyledTitleLink>
			</S.LogoTitleWrapper>
			<S.LinkWrapper>
				<S.StyledLink to="home">{GlobalWordings.home}</S.StyledLink>
				<S.StyledLink to="home">{GlobalWordings.bazi}</S.StyledLink>
				<S.StyledLink to="home">{GlobalWordings.readings}</S.StyledLink>
				<S.StyledLink to="home">{GlobalWordings.booking}</S.StyledLink>
				<S.StyledLink to="home">{GlobalWordings.about}</S.StyledLink>
			</S.LinkWrapper>
		</>
	);
};
