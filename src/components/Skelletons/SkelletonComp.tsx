import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../../colors';
import styled from 'styled-components/native';

const StyledSkelleton = styled.View`
	border-radius: 8;
	background-color: ${colors.gray_3};
	margin: 8;
`;

export default function SkelletonComp() {
	return <StyledSkelleton />;
}
