import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../colors';
import { TextProps } from './types';

const StyledText = styled.Text`
	font-size: 16px;
	font-weight: 600;
	font-family: 'inter-semibold';
`;

export default function BiggerText(props: TextProps) {
	return (
		<StyledText allowFontScaling={false} style={props.style}>
			{props.children}
		</StyledText>
	);
}
