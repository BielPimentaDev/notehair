import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../colors';
import { ExtraInputProps } from './types';

const InputWraper = styled.View`
	position: relative;
	min-width: 50%;
`;

const StyledInput = styled.TextInput`
	background-color: ${colors.gray};
	height: 50px;
	border-radius: 14px;
	font-size: 16px;
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 14px;
`;
const Label = styled.Text`
	position: absolute;
	top: 5%;
	left: 20px;
	color: 'rgba(182, 182, 182, 1)';
	font-family: 'inter';
	font-size: 14px;
`;

export default function StyledLabelText(props: ExtraInputProps) {
	return (
		<InputWraper style={props.style}>
			<Label>{props.label}</Label>
			<StyledInput
				onChangeText={props.onChange}
				placeholder={props.placeholder}
				numberOfLines={1}
				placeholderTextColor={'#4e4e4e'}
			/>
		</InputWraper>
	);
}
