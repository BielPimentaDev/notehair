import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../colors';
import { TextProps } from './types';

const StyledText = styled.Text`
	font-size: 14px;
	font-family: 'inter';
	color: ${colors.paragraph_light};
`;

export default function SmallText(props: TextProps) {
	return (
		<StyledText allowFontScaling={false} style={props.style}>
			{props.children}
		</StyledText>
	);
}
