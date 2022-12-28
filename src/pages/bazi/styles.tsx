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
	flex-direction: column;
	align-items: center;
`;

export const Caption = styled.h1`
	font-size: 2em;
	color: black;
	font-style: bold;
	margin-bottom: 5px;
`;

export const TitleDescription = styled.p`
	font-size: 1.2em;
	color: black;
	font-style: italic;
	margin-top: 0px;
`;

export const BodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 50%;
	margin: 3em;
`;

export const BodyDescription = styled.p`
	font-size: 1.2em;
	color: black;
	margin-top: 5px;
`;

export const StyledCTALink = styled(Link)`
	text-decoration: none;
	font-size: 1em;
	color: ${Colors.title};

	&:hover,
	&:focus {
		font-weight: 800;
		text-decoration: underline;
	}
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

export const ImageContainer = styled.div`
	max-width: 35%;
	margin: 2em;
	& > img {
		max-width: 100%;
		max-heigth: 100%;
		object-fit: contain;
	}
`;
