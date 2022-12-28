import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Colors = {
	background: '#FFF2CC',
	title: '#DB7846',
};

export const Wrapper = styled.div`
	display: flex;
	background-color: ${Colors.background};
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.div`
	max-width: 5%;

	& > img {
		max-width: 100%;
		max-heigth: 100%;
		object-fit: contain;
	}
`;

export const StyledLink = styled(Link)`
	padding: 10px;
	text-decoration: none;
	font-size: 1.2em;
	color: ${Colors.title};

	&:hover,
	&:focus {
		font-weight: 800;
		text-decoration: underline;
	}
`;
