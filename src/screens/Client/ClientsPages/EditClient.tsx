import {
	View,
	Text,
	Image,
	KeyboardAvoidingView,
	Platform,
	TextInput,
} from 'react-native';
import React, { useState } from 'react';
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
import {
	InputsWraper,
	SelectWraper,
	StyledPenIcon,
	StyledProfileImage,
} from './stylesEditClient';

import { CheckWraper } from '../../Register/styles';
import StyledLabelText from '../../../components/Inputs/StyledLabelText';

export default function EditClient() {
	const [isChecked, setIsChecked] = useState(true);
	const [name, setName] = useState('Michele Silva');

	return (
		<MainContainer>
			<ScrollView showsVerticalScrollIndicator={false}>
				<FlexContainer style={{ alignItems: 'center' }}>
					<StyledProfileImage>
						<Image
							source={require('../../../../assets/profiles/ClientEditImage.png')}
						/>
						<StyledPenIcon>
							<Image source={require('../../../../assets/icons/pen.png')} />
						</StyledPenIcon>
					</StyledProfileImage>

					<InputsWraper>
						<BiggerText style={{ marginBottom: 12 }}>
							INFORMAÇÕES BÁSICAS
						</BiggerText>
						<StyledLabelText
							placeholder='Michele Silvas'
							label='Nome'
							style={{ marginBottom: 8 }}
						/>
						<StyledLabelText placeholder='(99) 9 834-5678' label='WhatsApp' />
					</InputsWraper>

					<InputsWraper>
						<BiggerText style={{ marginBottom: 12 }}>
							DATA DE ANIVERSÁRIO
						</BiggerText>
						<SelectWraper>
							<StyledLabelText
								label='Dia'
								style={{ marginBottom: 20, marginRight: 10 }}
								placeholder='14'
							/>
							<StyledLabelText
								label='Dia'
								style={{ marginBottom: 20 }}
								placeholder='Michele Silva'
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
					<CheckWraper style={{ marginBottom: 50 }}>
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
