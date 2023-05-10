import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { colors } from '../../colors';
import { InputProps } from './types';
import { Feather } from '@expo/vector-icons';
import { useToggle } from '../../hook/useToggle';

const InputWraper = styled.View`
	width: 100%;
	position: relative;
`;

const StyledInput = styled.TextInput`
	background-color: ${colors.gray};
	height: 50px;
	border-radius: 14px;
	font-size: 16px;
	padding-left: 20px;
	padding-right: 20px;
`;
const RightIcon = styled.Pressable`
	position: absolute;
	right: 16px;
	top: 15px;
`;

export default function PasswordTextInput(props: InputProps) {
	const { status: showPassword, changeStatus: changeShowPassword } =
		useToggle();
	useEffect(() => changeShowPassword(), []);
	return (
		<InputWraper style={props.style}>
			<StyledInput
				secureTextEntry={showPassword}
				placeholder={props.placeholder}
				numberOfLines={1}
				placeholderTextColor={'#B6B6B6'}
				value={props.value}
				onChangeText={props.onChangeText}
			/>
			<RightIcon
				onPress={() => {
					changeShowPassword();
					console.log(showPassword);
				}}>
				<Feather
					name={showPassword ? 'eye-off' : 'eye'}
					size={24}
					color='black'
				/>
			</RightIcon>
		</InputWraper>
	);
}
