import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled, { css } from 'styled-components/native';
import { colors } from '../../colors';
import MediumText from '../Texts/MediumText';
import { ButtonProps } from './types';
import { Entypo } from '@expo/vector-icons';
import { View } from 'react-native';
import { windowWidth } from '../../sizes';

const StyledButton = styled.Pressable`
	justify-content: center;
	align-items: center;
	height: 50px;
	background-color: ${colors.primary};
	border-radius: 26px;
	flex-direction: row;
	padding: 0 16px;
	z-index: 1;
	position: absolute;
	bottom: 16px;
	right: 5px;
`;
const StyledButtonText = styled.Text`
	font-size: ${windowWidth > 400 ? 16 : 14}px;
	font-family: 'inter-semibold';
	margin: 0 5px;
	color: ${colors.white};
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export default function FloatButton({
	style,
	text,
	onPress,
	plusIcon = true,
}: ButtonProps) {
	return (
		<StyledButton style={style} onPress={onPress}>
			{plusIcon && <Entypo name='plus' size={24} color='white' />}
			<StyledButtonText allowFontScaling={false}>{text}</StyledButtonText>
		</StyledButton>
	);
}
