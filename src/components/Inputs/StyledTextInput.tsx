import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../colors';
import { ExtraInputProps } from './types';

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

export default function StyledTextInput(props: ExtraInputProps) {
	return (
		<InputWraper style={props.style}>
			<StyledInput
				onChangeText={props.onChange}
				placeholder={props.placeholder}
				numberOfLines={1}
				placeholderTextColor={'#B6B6B6'}
			/>
			<RightIcon>{props.icon}</RightIcon>
		</InputWraper>
	);
}
