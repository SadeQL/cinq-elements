import styled from 'styled-components';

const Colors = {
	title: '#DB7846',
};

export const GlobalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

export const Title = styled.h1`
	font-size: 2.5em;
	color: black;
	font-weight: bold;
	text-align: center;
`;

export const BodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	max-width: 50%;
`;

export const BodyDescription = styled.p`
	font-size: 1.2em;
	color: black;
	margin-top: 5px;
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

export const ExternalLink = styled.a`
	text-decoration: none;
	font-size: 1em;
	color: ${Colors.title};
	margin-bottom: 2em;
	&:hover,
	&:focus {
		font-weight: 800;
		text-decoration: underline;
	}
`;

export const ContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
