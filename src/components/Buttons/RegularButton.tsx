import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled, { css } from 'styled-components/native';
import { colors } from '../../colors';
import MediumText from '../Texts/MediumText';
import { ButtonProps } from './types';

const IconWraper = styled.View`
	margin-right: 8;
`;

const StyledButton = styled.TouchableHighlight`
	justify-content: center;
	align-items: center;
	border-radius: 26px;
	height: 50px;
	width: 100%;

	background-color: ${colors.primary};
	${(props: ButtonProps) =>
		props.type == 'outline' &&
		css`
			background-color: ${colors.white};
			border: 1px solid ${props.color};
		`}
`;
const StyledButtonText = styled.Text`
	font-size: 16px;
	color: ${colors.white};
	font-family: 'inter-semibold';
	${(props: ButtonProps) =>
		props.type == 'outline' &&
		css`
			color: ${props.color};
		`};
`;

export default function RegularButton({
	style,
	text,
	type,
	disable,
	onPress,
	color = colors.primary,
	icon,
}: ButtonProps) {
	return (
		<StyledButton
			style={style}
			type={type}
			text={text}
			disable={disable}
			onPress={onPress}
			color={color}>
			<StyledButtonText
				adjustsFontSizeToFit
				type={type}
				text={text}
				disable={disable}
				color={color}>
				{text}
			</StyledButtonText>
		</StyledButton>
	);
}
