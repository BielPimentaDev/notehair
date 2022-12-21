import { View, Text } from 'react-native';
import React, { useRef, useCallback, useState } from 'react';
import { colors } from '../../colors';
import FloatButton from '../../components/Buttons/FloatButton';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import BottomSheetComponent from '../../components/BottomSheet/BottomSheetComponent';
import { FontAwesome } from '@expo/vector-icons';

const galieries = [0, 1, 2, 3, 4];

export default function Galeries() {
	const modalRef = useRef<BottomSheet>(null);

	const handleSnapPress = useCallback(() => {
		modalRef.current?.snapToIndex(0);
		setIsOpen(true);
	}, []);

	const [isOpen, setIsOpen] = useState(false);

	return (
		<View
			style={{
				width: '100%',
				flexDirection: 'row',
				flexWrap: 'wrap',
				margin: 'auto',
				flex: 1,
				height: '100%',
			}}>
			{galieries.map((item) => {
				return (
					<View
						key={item}
						style={{
							width: '28%',
							height: 100,
							borderRadius: 8,
							backgroundColor: colors.gray_3,
							marginBottom: 16,
							marginLeft: 16,
						}}
					/>
				);
			})}
			<FloatButton text='Nova foto' onPress={handleSnapPress} />
			<BottomSheetComponent
				bottomSheetRef={modalRef}
				percentual={'50%'}
				setIsToggle={setIsOpen}
				toggle={isOpen}
				buttons={[
					{
						icon: <FontAwesome name='picture-o' size={24} color='black' />,
						text: 'Tirar nova foto',
						onPress: () => console.log('OK'),
					},
					{
						icon: <FontAwesome name='picture-o' size={24} color='black' />,
						text: 'Tirar nova foto',
						onPress: () => console.log('OK'),
					},
				]}
			/>
		</View>
	);
}
