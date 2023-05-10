import { View, Text, Alert } from 'react-native';
import React from 'react';
import RegularButton from '../../../components/Buttons/RegularButton';
import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus,
} from 'expo-image-picker';

export default function ImagePicker() {
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

	const takeImageHandler = async () => {
		const hasPermission = await verifyPermission();

		if (!hasPermission) {
			return;
		}
		let image = await launchCameraAsync({
			allowsEditing: true,
			aspect: [19, 9],
			quality: 0.5,
			// base64: true,
		});
		let temp = {
			assets: [
				{
					assetId: null,
					base64: null,
					duration: null,
					exif: null,
					height: 1644,
					rotation: null,
					type: 'image',
					uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540gbrlpimenta%252Fnotehair/ImagePicker/afacd3b9-6b25-4591-9828-62a67c56674f.jpeg',
					width: 3472,
				},
			],
			canceled: false,
			cancelled: false,
		};
		// console.log(image.assets);
		console.log(temp.assets[0].uri);
	};
	return (
		<View>
			<Text>ImagePicker</Text>
			<RegularButton onPress={takeImageHandler} text='take picture' />
		</View>
	);
}
