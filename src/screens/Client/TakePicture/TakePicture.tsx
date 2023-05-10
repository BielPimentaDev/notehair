import { View, Text, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useRemoveHeader } from '../../../hook/useRemoveHeader';
import { useNavigation } from '@react-navigation/native';
import MainContainer from '../../../components/Containers/MainContainer';
import RegularButton from '../../../components/Buttons/RegularButton';
import {
	launchCameraAsync,
	PermissionStatus,
	useCameraPermissions,
	ImagePickerAsset,
} from 'expo-image-picker';
import { ClientContext } from '../../../context/ClientContext';
import { useAddDoc } from '../../../services/useAddDoc';
import { propsStackClients } from '../../../Routes/Models/ClientsProps';
import * as ImagePicker from 'expo-image-picker';
import LinkButton from '../../../components/Buttons/LinkButton';
import { useAuth } from '../../../hook/useAuth';

export default function TakePicture() {
	const [imageUri, setImageUri] = useState<string | undefined>('');
	const { addNewDoc: savePicture, error, loading } = useAddDoc();
	const navigation = useNavigation<propsStackClients>();

	const takeImageFromGalerie = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			aspect: [4, 3],
			quality: 1,
		});
		console.log(result);

		if (!result.canceled) {
			setImageUri(result.assets[0].uri);
		}
	};

	const [cameraPermissionInformation, requestPermission] =
		useCameraPermissions();

	const verifyPermission = async () => {
		if (cameraPermissionInformation?.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = requestPermission();
			return (await permissionResponse).granted;
		}

		if (cameraPermissionInformation?.status === PermissionStatus.DENIED) {
			// Alert.alert('Insuficient Permissions!');
			// return false;
			const permissionResponse = requestPermission();
			return (await permissionResponse).granted;
		}

		return true;
	};
	const { clientId } = useContext(ClientContext);
	const takeImageHandler = async () => {
		const hasPermission = await verifyPermission();

		if (!hasPermission) {
			return;
		}
		let image = await launchCameraAsync({
			aspect: [19, 9],
			quality: 0.5,
		});

		setImageUri(image.uri);
	};

	const { user } = useAuth();

	const saveImageUri = () => {
		savePicture({
			collectionName: 'galerie',
			doc: { clientId, imageUri, userId: user?.uid },
		});
		navigation.goBack();
	};

	return (
		<MainContainer>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					alignContent: 'center',
					justifyContent: 'center',
					width: '100%',
				}}>
				{imageUri == '' ? (
					<Text>Nenhuma foto ainda</Text>
				) : (
					<Image
						source={{ uri: imageUri }}
						style={{ width: '100%', height: '90%' }}
						resizeMode='center'
					/>
				)}
			</View>
			<View
				style={{
					width: '100%',
					marginBottom: 20,
				}}>
				<RegularButton
					text='Tirar foto'
					style={{ marginBottom: 10 }}
					onPress={takeImageHandler}
				/>
				<RegularButton
					type='outline'
					text='Selecionar da galeria'
					style={{ marginBottom: 10 }}
					onPress={takeImageFromGalerie}
				/>

				<LinkButton
					text='Salvar'
					onPress={() => {
						saveImageUri();
					}}
				/>
			</View>
		</MainContainer>
	);
}
