import { View, Text, Pressable } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import BiggerText from '../Texts/BiggerText';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { propsStackLogin } from '../../Routes/Models/LoginProps';
import { windowWidth } from '../../sizes';
import PopUpMenu, { BackgroundStyled, PopUpWraper } from './PopUpMenu';
import { SketchHeaderProps } from './types';
import bottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet';
import BottomSheetComponent from '../BottomSheet/BottomSheetComponent';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../colors';

export default function PopUpHeader(props: SketchHeaderProps) {
	const navigation = useNavigation<propsStackLogin>();

	return (
		<>
			<View
				style={{
					width: windowWidth - 32,
					height: 55,
					flexDirection: 'row',
					marginTop: 50,
					justifyContent: 'space-between',
					alignItems: 'center',
					zIndex: 99,
				}}>
				<View style={{ flexDirection: 'row' }}>
					<Ionicons
						name='arrow-back'
						size={24}
						color='black'
						onPress={() => navigation.goBack()}
					/>
					<BiggerText style={{ marginLeft: 16, fontFamily: 'inter-bold' }}>
						CLIENTE
					</BiggerText>
				</View>

				<Entypo
					name='dots-three-vertical'
					size={24}
					color='black'
					onPress={() => props.setIsOpen(true)}
				/>
			</View>
			{props.isOpen && (
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
			)}
		</>
	);
}
