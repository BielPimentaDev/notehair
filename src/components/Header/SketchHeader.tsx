import { View, Text, Pressable, StatusBar } from 'react-native';
import React, { useState, useContext } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import BiggerText from '../Texts/BiggerText';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
	propsNavigationStackSketch,
	propsStackSketch,
} from '../../Routes/Models/SketchProps';
import PopUpMenu, { BackgroundStyled, PopUpWraper } from './PopUpMenu';
import { SketchHeaderProps } from './types';
import { HeaderWraper, IconsWraper } from './styles';
import { colors } from '../../colors';
import { useDrawHandler } from '../../screens/Sketch/hooks/useDrawHandler';

export default function SketchHeader(props: SketchHeaderProps) {
	const navigation = useNavigation<propsStackSketch>();
	const { reDoDrawHandler, unDoDrawHandler } = useDrawHandler();
	return (
		<>
			<HeaderWraper>
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
				<IconsWraper>
					<MaterialIcons
						name='undo'
						size={24}
						color='black'
						style={{ marginRight: 5 }}
						onPress={unDoDrawHandler}
					/>
					<MaterialIcons
						name='redo'
						size={24}
						color='black'
						style={{ marginLeft: 15, marginRight: 15 }}
						onPress={reDoDrawHandler}
					/>
					<Entypo
						name='dots-three-vertical'
						size={24}
						color='black'
						onPress={() => props.setIsOpen(true)}
					/>
				</IconsWraper>
			</HeaderWraper>
			{props.isOpen && (
				<PopUpWraper style={{ elevation: 5 }}>
					{<BackgroundStyled onTouchEnd={() => props.setIsOpen(false)} />}
					{props.buttons.map((button, index) => {
						return (
							<Pressable
								key={index}
								onPress={button.action}
								style={{ backgroundColor: colors.white }}>
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
