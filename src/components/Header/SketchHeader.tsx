import { View, Text, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import BiggerText from '../Texts/BiggerText';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { propsNavigationStackSketch } from '../../Routes/Models/SketchProps';
import { windowWidth } from '../../sizes';
import PopUpMenu, { BackgroundStyled, PopUpWraper } from './PopUpMenu';
import { SketchHeaderProps } from './types';
import { colors } from '../../colors';

export default function SketchHeader(props: SketchHeaderProps) {
	const navigation = useNavigation<propsNavigationStackSketch>();

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
						EDITOR
					</BiggerText>
				</View>
				<View
					style={{
						flexDirection: 'row',

						width: '30%',
						justifyContent: 'space-between',
					}}>
					<MaterialIcons name='undo' size={24} color='black' />
					<MaterialIcons name='redo' size={24} color='black' />
					<Entypo
						name='dots-three-vertical'
						size={24}
						color='black'
						onPress={() => props.setIsOpen(true)}
						// onPress={() => console.log('ok')}
					/>
				</View>
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
