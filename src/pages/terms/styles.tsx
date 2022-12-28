import styled from 'styled-components';

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

export const SecondaryTitle = styled.h1`
	font-size: 2em;
	color: black;
	margin-bottom: 15px;
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
