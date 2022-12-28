import styled from 'styled-components';

const Colors = {
	title: '#DB7846',
	endline: '#F9EFD7',
};

export const EndLinesWrapper = styled.div`
	width: 20%;
	background-color: ${Colors.title};
	padding: 5px;
	border-radius: 30px;
	text-align: center;
	margin: 0.5em;
`;

export const ExternalLink = styled.a`
	text-decoration: none;
	font-size: 1em;
	color: ${Colors.endline};
	margin-bottom: 2em;

	&:hover,
	&:focus {
		font-weight: 800;
		text-decoration: underline;
	}
`;
