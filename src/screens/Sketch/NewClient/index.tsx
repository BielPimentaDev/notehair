import { Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import MainContainer from '../../../components/Containers/MainContainer';
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
} from '../../Client/ClientsPages/styles';
import { useCreateClient } from './useCreateClient';
import { useNavigation } from '@react-navigation/native';
import { propsStackSketch } from '../../../Routes/Models/SketchProps';
import { Picker } from '@react-native-picker/picker';
import { useRemoveTabBar } from '../../../hook/useRemoveTabBar';
import { useRemoveHeader } from '../../../hook/useRemoveHeader';

export default function NewClient() {
	useRemoveTabBar();

	const navigation = useNavigation<propsStackSketch>();
	const [isChecked, setIsChecked] = useState(true);

	const createNewClientHandler = () => {
		createNewClient();
		navigation.goBack();
	};

	const returningArray = [
		{ label: 'Repetir mensalmente', value: 'once at month' },
		{ label: 'Repetir trimestralmente', value: 'once at three months' },
		{ label: 'Repetir semestralmente', value: 'once at 6 months' },
	];

	const monthsOfTheYear = [
		{ label: 'Janeiro', value: 'janeiro' },
		{ label: 'Fevereiro', value: 'janeiro' },
		{ label: 'Março', value: 'janeiro' },
		{ label: 'Abril', value: 'janeiro' },
		{ label: 'Maio', value: 'maio' },
		{ label: 'Junho', value: 'junho' },
		{ label: 'Julho', value: 'julho' },
		{ label: 'Agosto', value: 'agosto' },
		{ label: 'Setembro', value: 'setembro' },
		{ label: 'Outubro', value: 'outubro' },
		{ label: 'Novembro', value: 'novembro' },
		{ label: 'Dezembro', value: 'dezembro' },
	];

	const [returningFrequence, setReturningFrequence] = useState('janeiro');
	const [birthdayMonth, setBirthdayMonth] = useState(monthsOfTheYear[0].value);
	const { setClientForm, clientForm, createNewClient } = useCreateClient(
		returningFrequence,
		birthdayMonth
	);
	const { birthday, name, number, returningDate, instagram } = clientForm;
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
						<StyledTextInput
							placeholder='Nome'
							style={{ marginBottom: 8 }}
							value={name}
							onChangeText={(ev) => setClientForm({ ...clientForm, name: ev })}
						/>
						<StyledTextInput
							placeholder='WhatsApp'
							style={{ marginBottom: 8 }}
							value={number}
							onChangeText={(ev) =>
								setClientForm({ ...clientForm, number: ev })
							}
						/>
						<StyledTextInput
							placeholder='Instagram'
							value={instagram}
							onChangeText={(ev) =>
								setClientForm({ ...clientForm, instagram: ev })
							}
						/>
					</InputsWraper>

					<InputsWraper>
						<BiggerText style={{ marginBottom: 12 }}>
							DATA DE ANIVERSÁRIO
						</BiggerText>
						<SelectWraper>
							<StyledTextInput
								style={{ marginBottom: 20, marginRight: 10, width: '48%' }}
								placeholder='Dia'
								value={birthday}
								onChangeText={(ev) =>
									setClientForm({ ...clientForm, birthday: ev })
								}
							/>
							<Picker
								itemStyle={{ backgroundColor: 'red' }}
								style={{
									backgroundColor: colors.gray,
									width: '50%',
									height: 50,
								}}
								selectedValue={birthdayMonth}
								onValueChange={(itemValue, itemIndex) =>
									setBirthdayMonth(itemValue)
								}>
								{monthsOfTheYear.map((data, index) => {
									return (
										<Picker.Item
											label={data.label}
											value={data.value}
											key={index}
										/>
									);
								})}
							</Picker>
						</SelectWraper>
					</InputsWraper>

					<CheckWraper>
						<Checkbox
							style={{
								margin: 0,
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
							Ativar notificação de lembrete de data de aniversário
						</MediumText>
					</CheckWraper>

					<InputsWraper>
						<BiggerText style={{ marginBottom: 8 }}>RETORNO</BiggerText>
						<StyledTextInput
							style={{ marginBottom: 8 }}
							placeholder='Dia'
							value={returningDate}
							onChangeText={(ev) =>
								setClientForm({ ...clientForm, returningDate: ev })
							}
						/>
						<Picker
							itemStyle={{ backgroundColor: 'red' }}
							style={{
								backgroundColor: colors.gray,
								width: '100%',
								height: 50,
							}}
							selectedValue={birthdayMonth}
							onValueChange={(itemValue, itemIndex) =>
								setReturningFrequence(itemValue)
							}>
							{returningArray.map((data, index) => {
								return (
									<Picker.Item
										label={data.label}
										value={data.value}
										key={index}
									/>
								);
							})}
						</Picker>
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
				text='Salvar'
				style={{ position: 'absolute', bottom: 10 }}
				onPress={createNewClientHandler}
				// onPress={() => {
				// 	console.log('mes:', birthdayMonth, 'frequencia:', returningFrequence);
				// }}
			/>
		</MainContainer>
	);
}
