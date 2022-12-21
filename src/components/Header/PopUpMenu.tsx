import { View, Text, Pressable } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components/native';
import BiggerText from '../Texts/BiggerText';
import { colors } from '../../colors';
import { PopUpMenuProps } from './types';
import { windowHeight, windowWidth } from '../../sizes';
import BottomSheetComponent from '../BottomSheet/BottomSheetComponent';
import { FontAwesome5 } from '@expo/vector-icons';
import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
import { useNavigation } from '@react-navigation/native';
import { propsStackClients } from '../../Routes/Models/ClientsProps';

export const PopUpWraper = styled.View`
	background-color: white;
	width: 230px;
	border-radius: 8px;
	position: absolute;
	top: 75px;
	right: 20px;
	z-index: 99;
`;
export const BackgroundStyled = styled.Pressable`
	flex: 1;
	width: ${windowWidth}px;
	height: ${windowHeight}px;
	background-color: rgba(0, 0, 0, 0);
	/* background-color: red; */
	position: absolute;
	top: 0;
	right: 0;
`;
export const popUpButtons = [
	{
		text: 'Editar',
		action: () => console.log('first'),
		color: colors.tint,
	},
	{
		text: 'Excluir',
		action: () => console.log('excluir'),
		color: colors.alert,
	},
];

export default function PopUpMenu(props: PopUpMenuProps) {
	const navigation = useNavigation<propsStackClients>();
	return (
		<>
			<PopUpWraper style={{ elevation: 5 }}>
				{<BackgroundStyled onTouchEnd={() => props.setIsOpen(false)} />}
				{props.buttons.map((button, index) => {
					return (
						<Pressable key={index} onPress={button.action}>
							<BiggerText style={{ padding: 16, color: button.color }}>
								{button.text}
							</BiggerText>
						</Pressable>
					);
				})}
			</PopUpWraper>
		</>
	);
}
