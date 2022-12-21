import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../colors';
import { ContainerProps } from './types';

const StyledContainer = styled.View`
	flex: 1;
	background-color: ${colors.white};

	width: 100%;
`;

export default function FlexContainer(props: ContainerProps) {
	return (
		<StyledContainer
			style={props.style}
			onTouchEnd={() => props.closeModal && props.closeModal(false)}>
			<StatusBar style='auto' />
			{props.children}
		</StyledContainer>
	);
}
