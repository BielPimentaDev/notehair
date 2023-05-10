import { ActivityIndicator } from 'react-native';
import React, { useRef, useCallback, useState, useContext } from 'react';
import { colors } from '../../../colors';
import FloatButton from '../../../components/Buttons/FloatButton';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomSheetComponent from '../../../components/BottomSheet/BottomSheetComponent';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { propsStackClients } from '../../../Routes/Models/ClientsProps';
import { getWhere } from '../../../services/getWhere';
import { ClientContext } from '../../../context/ClientContext';
import {
	SelectedItem,
	SelectedListWraper,
	SelectedMapComponent,
} from '../styles';
import { ClientInterface } from '../types/models';

export default function Galeries() {
	const modalRef = useRef<BottomSheet>(null);
	const navigate = useNavigation<propsStackClients>();
	const { clientId } = useContext(ClientContext);
	const handleSnapPress = useCallback(() => {
		modalRef.current?.snapToIndex(0);
		setIsOpen(true);
	}, []);
	const [isOpen, setIsOpen] = useState(false);
	const getWhereProps = {
		databaseCollection: 'galerie',
		databaseKey: 'clientId',
		equalTo: clientId,
	};
	const { loading, returningList: picturesList } = getWhere(getWhereProps);
	return (
		<SelectedMapComponent>
			{loading ? (
				<ActivityIndicator
					size={24}
					color={colors.primary}
					style={{ marginTop: 100 }}
				/>
			) : (
				<SelectedListWraper>
					{picturesList.map((picture: ClientInterface, index) => {
						return (
							<SelectedItem
								source={{ uri: picture.data.imageUri }}
								key={index}
								index={index}
							/>
						);
					})}
				</SelectedListWraper>
			)}

			<FloatButton
				text='Nova foto'
				onPress={handleSnapPress}
				style={{ zIndex: 10 }}
			/>
			<BottomSheetComponent
				bottomSheetRef={modalRef}
				percentual={'50%'}
				setIsToggle={setIsOpen}
				toggle={isOpen}
				buttons={[
					{
						icon: <FontAwesome name='picture-o' size={24} color='black' />,
						text: 'Tirar nova foto',
						onPress: () => navigate.navigate('TakePicture'),
					},
					{
						icon: <FontAwesome name='picture-o' size={24} color='black' />,
						text: 'Tirar nova foto',
						onPress: () => console.log('OK'),
					},
				]}
			/>
		</SelectedMapComponent>
	);
}
