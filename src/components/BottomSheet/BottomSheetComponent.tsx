import { Pressable } from 'react-native';
import { useState } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { windowHeight, windowWidth } from '../../sizes';
import BiggerText from '../Texts/BiggerText';
import { BottomSheetCompProps } from './types';
import styled from 'styled-components/native';
import { colors } from '../../colors';
import { View } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const StyledPressable = styled.Pressable`
	flex-direction: row;
	height: 76px;
	margin-bottom: 15px;
	align-items: center;
	padding: 10px;
	border-radius: 8px;
`;

export default function BottomSheetComponent(props: BottomSheetCompProps) {
	return (
		<>
			{props.toggle && (
				<Pressable
					// on={() => props.bottomSheetRef.current?.close()}
					onPress={() => props.bottomSheetRef.current?.close()}
					style={{
						width: windowWidth + 50,
						position: 'absolute',
						height: windowHeight + 50,
						backgroundColor: 'rgba(0,0,0,0.4)',
						bottom: 0,
						right: 0,
					}}
				/>
			)}

			<BottomSheet
				ref={props.bottomSheetRef}
				snapPoints={[props.percentual]}
				enablePanDownToClose={true}
				onClose={() => props.setIsToggle(false)}
				index={-1}
				style={{ zIndex: 99 }}>
				<BottomSheetView style={{ padding: 17, height: '100%', zIndex: 99 }}>
					{props.buttons.map((button, index) => {
						function onPressButton() {
							button.onPress(),
								props.setIsToggle(false),
								props.bottomSheetRef.current?.close();
						}
						return (
							<StyledPressable
								style={{
									zIndex: 10,
									backgroundColor:
										index == 0
											? colors.primary_opacity_10
											: colors.transparent_03,
								}}
								key={index}
								onPress={onPressButton}>
								{button.icon}

								<BiggerText
									style={{
										zIndex: 10,
										color: index == 0 ? colors.primary : colors.tint,
										marginLeft: 16,
									}}>
									{button.text}
								</BiggerText>
							</StyledPressable>
						);
					})}
				</BottomSheetView>
			</BottomSheet>
		</>
	);
}
