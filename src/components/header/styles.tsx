import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Colors = {
	title: '#DB7846',
};

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: sticky;
	top: 0px;
	width: 100%;
	height: 7em;
`;

export const StyledTitleLink = styled(Link)`
	font-size: 2em;
	text-align: center;
	text-decoration: none;
	color: ${Colors.title};
	font-weight: bold;
`;

export const Logo = styled.div`
	max-width: 15%;

	& > img {
		max-width: 100%;
		max-heigth: 100%;
		object-fit: contain;
	}
`;

export const StyledLink = styled(Link)`
	padding: 10px;
	text-decoration: none;
	color: black;
	font-size: 1.2em;
	color: ${Colors.title};

	&:hover,
	&:focus {
		font-weight: 800;
		text-decoration: underline;
	}
`;

export const LogoTitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const LinkWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 2em;
`;
