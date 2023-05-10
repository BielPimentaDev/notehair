import { propsStackSaveSketch } from './../Routes/Models/SketchProps';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export function useRemoveHeader() {
	const navigation = useNavigation<propsStackSaveSketch>();

	useEffect(() => {
		navigation.getParent();
		navigation.getParent()?.setOptions({ headerShown: false });
		return () => {
			navigation.getParent()?.setOptions({
				headerShown: true,
			});
		};
	}, []);
}
