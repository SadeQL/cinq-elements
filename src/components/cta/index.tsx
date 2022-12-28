import * as React from 'react';
import * as S from './styles';

type CTAProps = {
	children: JSX.Element | string;
	href?: string;
};

export const CTARedirect: React.FC<CTAProps> = ({ children, href }) => {
	return (
		<S.EndLinesWrapper>
			<S.ExternalLink href={href} target="_blank">
				{children}
			</S.ExternalLink>
		</S.EndLinesWrapper>
	);
};
