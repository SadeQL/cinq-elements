import * as React from 'react';
import * as S from './styles';
import { PrivacyWordings } from '../../Wordings';
export const PrivacyPage: React.FC = () => {
	const privacyDescriptionWordings = PrivacyWordings.description
		.trim()
		.split('\n');
	return (
		<S.GlobalWrapper>
			<S.Title>{PrivacyWordings.title}</S.Title>
			<S.BodyWrapper>
				{privacyDescriptionWordings.map((wording) => (
					<S.BodyDescription key={wording}>{wording}</S.BodyDescription>
				))}
			</S.BodyWrapper>
		</S.GlobalWrapper>
	);
};
