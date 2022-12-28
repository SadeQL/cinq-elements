import * as React from 'react';
import * as S from './styles';
import contactImg from '../../assets/contact.jpg';
import { ContactWordings } from '../../Wordings';
import { CTARedirect } from '../../components/cta';

export const ContactPage: React.FC = () => {
	const bodyDescriptionWordings = ContactWordings.description
		.trim()
		.split('\n');
	const openEmailModal = 'mailto:felicia.chiang@icloud.com';
	return (
		<S.GlobalWrapper>
			<S.Title>{ContactWordings.title}</S.Title>
			<S.Wrapper>
				<S.ImageContainer>
					<img src={contactImg} />
				</S.ImageContainer>
			</S.Wrapper>
			<S.BodyWrapper>
				{bodyDescriptionWordings.map((wording) => (
					<S.BodyDescription key={wording}>{wording}</S.BodyDescription>
				))}
				<S.ContactWrapper>
					<S.BodyDescription>{ContactWordings.nameTag}</S.BodyDescription>
					<CTARedirect href={openEmailModal}>
						{ContactWordings.emailText}
					</CTARedirect>
				</S.ContactWrapper>
			</S.BodyWrapper>
		</S.GlobalWrapper>
	);
};
