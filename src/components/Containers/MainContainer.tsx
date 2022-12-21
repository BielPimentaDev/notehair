import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../colors';
import { ContainerProps } from './types';

const StyledContainer = styled.View`
	flex: 1;
	padding: 8px 24px;
	background-color: ${colors.white};
	justify-content: center;
	align-items: center;
`;

export default function MainContainer(props: ContainerProps) {
	return (
		<StyledContainer
			style={props.style}
			onTouchEnd={() => props.closeModal && props.closeModal}>
			<StatusBar style='auto' />
			{props.children}
		</StyledContainer>
	);
}
