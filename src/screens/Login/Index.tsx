import MainContainer from '../../components/Containers/MainContainer';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import { Feather } from '@expo/vector-icons';
import RegularButton from '../../components/Buttons/RegularButton';
import LinkButton from '../../components/Buttons/LinkButton';
import styled from 'styled-components/native';
import {
	NavigationContainer,
	useNavigation,
	useNavigationContainerRef,
} from '@react-navigation/native';
import { useContext, useState } from 'react';

import { TextInput } from 'react-native-gesture-handler';
import BiggerText from '../../components/Texts/BiggerText';
import { AppContext } from '../../context/AuthContext';
import { Alert, Text, View } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../config/firebase';

const LoginWraper = styled.View`
	width: 100%;
	margin-bottom: auto;
`;
const InputsWraper = styled.View`
	height: 120px;
	justify-content: space-around;
	margin-bottom: 20px;
`;
const auth = getAuth(app);
export default function Login() {
	const { token, setToken, login } = useContext(AppContext);

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	async function signIn() {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			console.log(error.message);
			Alert.alert('Erro ao fazer login');
		}
	}
	return (
		<MainContainer>
			<LoginWraper>
				<InputsWraper>
					<StyledTextInput
						placeholder='Email'
						value={email}
						onChangeText={setEmail}
					/>

					<StyledTextInput
						value={password}
						onChangeText={setPassword}
						placeholder='Senha'
						icon={<Feather name='eye-off' size={24} color='black' />}
					/>
				</InputsWraper>

				<RegularButton text='Entrar' onPress={signIn} />

				<LinkButton text='Esqueceu a senha?' />
			</LoginWraper>
			<Text>{token}</Text>
		</MainContainer>
	);
}
