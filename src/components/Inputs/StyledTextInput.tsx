import React from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../colors';
import { useToggle } from '../../hook/useToggle';
import { ExtraInputProps, InputProps } from './types';

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
const RightIcon = styled.View`
	position: absolute;
	right: 16px;
	top: 15px;
`;

export default function StyledTextInput(props: InputProps) {
	return (
		<InputWraper style={props.style}>
			<StyledInput
				placeholder={props.placeholder}
				numberOfLines={1}
				placeholderTextColor={'#B6B6B6'}
				value={props.value}
				onChangeText={props.onChangeText}
			/>

			<RightIcon>{props.icon}</RightIcon>
		</InputWraper>
	);
}
