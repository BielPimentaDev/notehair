import { propsStackSaveSketch } from './../Routes/Models/SketchProps';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { windowWidth } from '../sizes';

interface useRemoveTabBarInterface {
	showHeader?: boolean;
}

export const useRemoveTabBar = (showHeader?: boolean) => {
	const navigation = useNavigation();
	useEffect(() => {
		navigation
			.getParent()
			.setOptions({ tabBarStyle: { display: 'none' }, headerShown: false });
		return () => {
			navigation.getParent().setOptions({
				tabBarStyle: {
					height: windowWidth * 0.15,
					width: '100%',
					paddingHorizontal: 10,
					marginVertical: 5,
					elevation: 0,
					backgroundColor: 'white',
					display: 'flex',
					heigh: 45,
				},
				headerShown: true,
			});
		};
	}, []);
};
