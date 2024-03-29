import { Alert } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import { Feather } from '@expo/vector-icons';
import RegularButton from '../../components/Buttons/RegularButton';
import MediumText from '../../components/Texts/MediumText';
import { colors } from '../../colors';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { CheckWraper, InputsWraper, LoginWraper } from './styles';
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import app from '../../config/firebase';
import PasswordTextInput from '../../components/Inputs/PasswordTextInput';

const auth = getAuth(app);

export default function Register() {
	const [isChecked, setChecked] = useState(true);

	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	async function signUp() {
		if (email == '' || password == '' || name == '') {
			Alert.alert('Todos os campos precisam ser preenchidos');
		}
		if (auth) {
			try {
				await createUserWithEmailAndPassword(auth, email, password);
				console.log('criado com sucesso');

				await updateProfile(auth.currentUser, {
					displayName: name,
					photoURL: '',
				});
			} catch (error) {
				console.log(error);
				Alert.alert('Aconteceu um erro');
			}
		}
	}

	return (
		<MainContainer>
			<LoginWraper>
				<MediumText style={{ color: colors.paragraph_light }}>
					Que bom ter você aqui! Insira seus dados para prosseguirmos com o
					cadastro.
				</MediumText>

				<InputsWraper>
					<StyledTextInput
						placeholder='Nome'
						value={name}
						onChangeText={setName}
					/>
					<StyledTextInput
						placeholder='Email'
						value={email}
						onChangeText={setEmail}
					/>
					<PasswordTextInput
						value={password}
						onChangeText={setPassword}
						placeholder='Senha'
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

				{/* <RegularButton text='Cadastrar' onPress={login} /> */}
				<RegularButton text='Cadastrar' onPress={signUp} />
			</LoginWraper>
		</MainContainer>
	);
}
