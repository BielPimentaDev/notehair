import { View, Text } from 'react-native';
import React from 'react';
import BiggerText from '../../components/Texts/BiggerText';
import MediumText from '../../components/Texts/MediumText';
import { colors } from '../../colors';
import { FontAwesome } from '@expo/vector-icons';
export default function Details() {
	return (
		<View style={{ marginHorizontal: 16 }}>
			<View style={{ marginBottom: 16 }}>
				<BiggerText style={{ fontSize: 16 }}>Data de nascimento</BiggerText>
				<MediumText style={{ color: colors.paragraph_light }}>
					27/04/1997
				</MediumText>
			</View>
			<View
				style={{
					marginBottom: 16,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '100%',
				}}>
				<View>
					<BiggerText style={{ fontSize: 16 }}>WhatsApp</BiggerText>
					<MediumText style={{ color: colors.paragraph_light }}>
						+55 11 9 8177-8401
					</MediumText>
				</View>
				<FontAwesome name='whatsapp' size={24} color={colors.primary} />
			</View>
			<View style={{ marginBottom: 16 }}>
				<BiggerText style={{ fontSize: 16 }}>Data de retorno</BiggerText>
				<MediumText style={{ color: colors.paragraph_light }}>
					17 de julho (mensalmente)
				</MediumText>
			</View>
		</View>
	);
}
