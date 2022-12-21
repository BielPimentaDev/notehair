import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import { Feather } from '@expo/vector-icons';
import RegularButton from '../../components/Buttons/RegularButton';
import MediumText from '../../components/Texts/MediumText';
import { colors } from '../../colors';
import Checkbox from 'expo-checkbox';
import { useContext, useState } from 'react';
import { CheckWraper, InputsWraper, LoginWraper } from './styles';
import { AppContext } from '../../context/AuthContext';

export default function Register() {
	const { token, setToken, login } = useContext(AppContext);
	const [isChecked, setChecked] = useState(true);
	return (
		<MainContainer>
			<LoginWraper>
				<MediumText style={{ color: colors.paragraph_light }}>
					Que bom ter você aqui! Insira seus dados para prosseguirmos com o
					cadastro.
				</MediumText>

				<InputsWraper>
					<StyledTextInput placeholder='Nome' />
					<StyledTextInput placeholder='Email' />
					<StyledTextInput
						placeholder='Senha'
						icon={<Feather name='eye-off' size={24} color='black' />}
					/>
					<StyledTextInput
						placeholder='Nova senha'
						icon={<Feather name='eye-off' size={24} color='black' />}
					/>
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
						onValueChange={setChecked}
					/>
					<MediumText
						style={{
							color: colors.paragraph_light,
							marginLeft: 16,
							fontSize: 16,
						}}>
						Declaro que li e aceito os{' '}
						<MediumText style={{ color: colors.primary }}>
							Termos de Privacidade
						</MediumText>{' '}
						do Note Hair.
					</MediumText>
				</CheckWraper>

				<RegularButton text='Cadastrar' onPress={login} />
			</LoginWraper>
		</MainContainer>
	);
}

const styles = StyleSheet.create({
	checkbox: {
		margin: 8,
		borderRadius: 5,
	},
});
