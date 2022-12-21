import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { windowHeight, windowWidth } from '../../sizes';

const BackgroundModal = styled.View`
	width: ${windowWidth}px;
	height: ${windowHeight}px;
	background-color: rgba(0, 0, 0, 0.4);
	position: absolute;
	z-index: 2;
`;

const MenuModal = styled.View`
	width: 100%;
	height: 35%;
	background-color: white;
	margin-top: auto;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
`;

const ItemModal = styled.View``;

export default function SketchModal() {
	return (
		<BackgroundModal>
			<MenuModal>
				<ItemModal></ItemModal>
			</MenuModal>
		</BackgroundModal>
	);
}
