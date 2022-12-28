import * as React from 'react';
import * as S from './styles';

type QuoteProps = {
	children: JSX.Element | string;
};
export const QuoteBanner: React.FC<QuoteProps> = ({ children }) => {
	return <S.EndLinesText>{children}</S.EndLinesText>;
};
