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
import { Text, View } from 'react-native';

const LoginWraper = styled.View`
	width: 100%;
	margin-bottom: auto;
`;
const InputsWraper = styled.View`
	height: 120px;
	justify-content: space-around;
	margin-bottom: 20px;
`;

export default function Login() {
	const { token, setToken, login } = useContext(AppContext);

	return (
		<MainContainer>
			<LoginWraper>
				<InputsWraper>
					<StyledTextInput placeholder='Email' />

					<StyledTextInput
						placeholder='Senha'
						icon={<Feather name='eye-off' size={24} color='black' />}
					/>
				</InputsWraper>

				<RegularButton text='Entrar' onPress={login} />

				<LinkButton text='Esqueceu a senha?' />
			</LoginWraper>
			<Text>{token}</Text>
		</MainContainer>
	);
}
