import {
	View,
	Text,
	Image,
	KeyboardAvoidingView,
	Platform,
	TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import MainContainer from '../../../components/Containers/MainContainer';
import styled from 'styled-components/native';
import { colors } from '../../../colors';
import BiggerText from '../../../components/Texts/BiggerText';
import StyledTextInput from '../../../components/Inputs/StyledTextInput';
import RegularButton from '../../../components/Buttons/RegularButton';
import { ScrollView } from 'react-native-gesture-handler';
import Checkbox from 'expo-checkbox';
import MediumText from '../../../components/Texts/MediumText';
import FlexContainer from '../../../components/Containers/FlexContainer';

import { CheckWraper } from '../../Register/styles';

import {
	InputsWraper,
	SelectWraper,
	StyledPenIcon,
	StyledProfileImage,
} from '../../Client/ClientsPages/stylesEditClient';

export default function NewClient({ navigation }) {
	const [isChecked, setIsChecked] = useState(true);
	const [name, setName] = useState('Michele Silva');
	useEffect(() => {
		navigation.getParent().getParent().setOptions({ headerShown: false });
		return () => {
			navigation.getParent().getParent().setOptions({ headerShown: true });
		};
	}, []);

	return (
		<MainContainer>
			<ScrollView showsVerticalScrollIndicator={false}>
				<FlexContainer style={{ alignItems: 'center' }}>
					<StyledProfileImage>
						<Image
							source={require('../../../../assets/profiles/genericClientProfile2.png')}
						/>
						<StyledPenIcon>
							<Image source={require('../../../../assets/icons/pen.png')} />
						</StyledPenIcon>
					</StyledProfileImage>

					<InputsWraper>
						<BiggerText style={{ marginBottom: 12 }}>
							INFORMAÇÕES BÁSICAS
						</BiggerText>
						<StyledTextInput placeholder='Nome' style={{ marginBottom: 8 }} />
						<StyledTextInput placeholder='WhatsApp' />
					</InputsWraper>

					<InputsWraper>
						<BiggerText style={{ marginBottom: 12 }}>
							DATA DE ANIVERSÁRIO
						</BiggerText>
						<SelectWraper>
							<StyledTextInput
								style={{ marginBottom: 20, marginRight: 10, width: '48%' }}
								placeholder='14'
							/>
							<StyledTextInput
								style={{ marginBottom: 20, width: '48%' }}
								placeholder='Dia'
							/>
						</SelectWraper>
					</InputsWraper>

					<CheckWraper>
						<Checkbox
							style={{
								margin: 0,
								borderRadius: 5,
							}}
							// color={'red'}
							color={colors.primary}
							value={isChecked}
							onValueChange={setIsChecked}
						/>
						<MediumText
							style={{
								color: colors.paragraph_light,
								marginLeft: 16,
								fontSize: 16,
							}}>
							Ativar notificação de lembrete de data de aniversário
						</MediumText>
					</CheckWraper>

					<InputsWraper>
						<BiggerText style={{ marginBottom: 8 }}>RETORNO</BiggerText>
						<StyledTextInput style={{ marginBottom: 8 }} placeholder='Dia' />
						<StyledTextInput
							style={{ marginBottom: 8 }}
							placeholder='Repetir mensalmente'
						/>
					</InputsWraper>
					<CheckWraper style={{ marginBottom: 70 }}>
						<Checkbox
							style={{
								borderRadius: 5,
							}}
							color={colors.primary}
							value={isChecked}
							onValueChange={setIsChecked}
						/>
						<MediumText
							style={{
								color: colors.paragraph_light,
								marginLeft: 16,
								fontSize: 16,
							}}>
							Ativar notificação de lembrete de retorno
						</MediumText>
					</CheckWraper>
				</FlexContainer>
			</ScrollView>
			<RegularButton
				text='Editar'
				style={{ position: 'absolute', bottom: 10 }}
			/>
		</MainContainer>
	);
}