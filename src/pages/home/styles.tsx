import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Colors = {
	title: '#DB7846',
	endline: '#F9EFD7',
};

export const GlobalWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
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

export const Slogan = styled.h1`
	font-size: 2.5em;
	color: ${Colors.title};
`;

export const StyledCTALink = styled(Link)`
	text-decoration: none;
	font-size: 1.2em;
	color: ${Colors.title};

	&:hover,
	&:focus {
		font-weight: 800;
		text-decoration: underline;
	}
`;

export const CaptionCTAWrapper = styled.div`
	margin-top: 3em;
	max-width: 100%;
	align-items: left;
`;

export const SloganImageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 3em;
	max-width: 100%;
	align-items: center;
`;

export const EndLinesText = styled.h3`
	font-size: 2em;
	color: ${Colors.endline};
	text-align: center;
`;

export const EndLinesWrapper = styled.div`
	width: 100%;
	background-color: ${Colors.title};
	padding: 20px;
`;
