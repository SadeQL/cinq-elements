import * as React from 'react';
import * as S from './styles';
import { GlobalWordings } from '../../Wordings';
import Logo from '../../assets/logo-beige.png';

export const Footer: React.FC = () => {
	return (
		<S.Wrapper>
			<S.StyledLink to="/home">{GlobalWordings.contact}</S.StyledLink>
			<S.StyledLink to="/terms-and-conditions">
				{GlobalWordings.termsAndCondition}
			</S.StyledLink>
			<S.StyledLink to="/home">{GlobalWordings.privacy}</S.StyledLink>
			<S.Logo>
				<img src={Logo} />
			</S.Logo>
		</S.Wrapper>
	);
};
