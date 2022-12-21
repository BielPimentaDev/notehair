import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../colors';
import { TextProps } from './types';

const StyledText = styled.Text`
	font-size: 16px;
	font-family: 'inter';
`;

export default function MediumText(props: TextProps) {
	return (
		<StyledText style={props.style} allowFontScaling={false}>
			{props.children}
		</StyledText>
	);
}
