import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Colors = {
	title: '#DB7846',
};

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
	max-width: 35%;
	margin: 2em;
	& > img {
		max-width: 100%;
		max-heigth: 100%;
		object-fit: contain;
	}
`;

export const Caption = styled.h1`
	font-size: 2.5em;
	color: ${Colors.title};
	font-weight: 800;
`;

export const StyledCTALink = styled(Link)`
	text-decoration: none;
	font-size: 1.2em;
	color: ${Colors.title};
`;

export const SloganCTAWrapper = styled.div`
	max-width: 100%;
	justify-content: flex-end;
`;
