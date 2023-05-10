import { View, Text, Linking, Alert, Pressable, Button } from 'react-native';
import React, { useCallback, useContext } from 'react';
import BiggerText from '../../components/Texts/BiggerText';
import MediumText from '../../components/Texts/MediumText';
import { colors } from '../../colors';
import { FontAwesome } from '@expo/vector-icons';
import { IClient } from './types/models';
import { ClientContext } from '../../context/ClientContext';

const INSTA_URL = 'https://www.instagram.com/';
const WPP_URL = 'https://wa.me/';

interface URLButtonProps {
	url: string;
	children: any;
}
const OpenURLButton = ({ url, children }: URLButtonProps) => {
	const handlePress = useCallback(async () => {
		// Checking if the link is supported for links with custom URL scheme.
		const supported = await Linking.canOpenURL(url);

		if (supported) {
			// Opening the link with some app, if the URL scheme is "http" the web link should be opened
			// by some browser in the mobile
			await Linking.openURL(url);
		} else {
			Alert.alert(`Don't know how to open this URL: ${url}`);
		}
	}, [url]);

	return <Pressable onPress={handlePress}>{children}</Pressable>;
};
export default function Details() {
	const { clientInfos } = useContext(ClientContext);

	return (
		<View style={{ marginHorizontal: 16 }}>
			<View style={{ marginBottom: 16 }}>
				<BiggerText style={{ fontSize: 16 }}>Data de nascimento</BiggerText>
				<MediumText style={{ color: colors.paragraph_light }}>
					{clientInfos.data.birthday} de {clientInfos.data.returningFrequence}
				</MediumText>
			</View>
			<View
				style={{
					marginBottom: 16,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					marginRight: 16,
				}}>
				<View>
					<BiggerText style={{ fontSize: 16 }}>WhatsApp</BiggerText>
					<MediumText style={{ color: colors.paragraph_light }}>
						{clientInfos.data.number
							? clientInfos.data.number
							: 'Não informado'}
					</MediumText>
				</View>
				<OpenURLButton url={`${WPP_URL}/55${clientInfos.data.number}`}>
					<FontAwesome name='whatsapp' size={24} color={colors.primary} />
				</OpenURLButton>
			</View>
			<View
				style={{
					marginBottom: 16,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
					marginRight: 16,
				}}>
				<View>
					<BiggerText style={{ fontSize: 16 }}>Instagram</BiggerText>
					<MediumText style={{ color: colors.paragraph_light }}>
						{clientInfos.data.instagram
							? clientInfos.data.instagram
							: 'Não informado'}
					</MediumText>
				</View>
				<OpenURLButton url={`${INSTA_URL}/${clientInfos.data.instagram}`}>
					<FontAwesome name='instagram' size={24} color={colors.primary} />
				</OpenURLButton>
			</View>
			<View style={{ marginBottom: 16 }}>
				<BiggerText style={{ fontSize: 16 }}>Data de retorno</BiggerText>
				<MediumText style={{ color: colors.paragraph_light }}>
					Dia {clientInfos.data.returningDate} ({clientInfos.data.birthdayMonth}
					)
				</MediumText>
			</View>
		</View>
	);
}
