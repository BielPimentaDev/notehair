import { View, Text, Pressable, Image } from 'react-native';
import React, { useEffect } from 'react';
import MainContainer from '../../components/Containers/MainContainer';
import RegularButton from '../../components/Buttons/RegularButton';
import { windowWidth } from '../../sizes';
import { useNavigation } from '@react-navigation/native';
import {
	propsNavigationStackSketch,
	propsStackSketch,
} from '../../Routes/Models/SketchProps';

export default function SelectSketch() {
	const navigation = useNavigation<propsStackSketch>();
	useEffect(() => {
		navigation
			.getParent()
			?.setOptions({ tabBarStyle: { display: 'none' }, headerShown: false });
		return () => {
			navigation.getParent()?.setOptions({
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

	const croquis = [
		{
			name: 'position 1',
			picture: require('../../../assets/sketchs/head1.png'),
		},
		{
			name: 'position 2',
			picture: require('../../../assets/sketchs/head2.png'),
		},
		{
			name: 'position 3',
			picture: require('../../../assets/sketchs/head3.png'),
		},
		{
			name: 'position 4',
			picture: require('../../../assets/sketchs/head4.png'),
		},
		{
			name: 'position 5',
			picture: require('../../../assets/sketchs/head5.png'),
		},
	];
	return (
		<MainContainer
			style={{
				alignContent: 'space-around',
				justifyContent: 'space-around',
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}>
			{croquis.map((c, index) => {
				return (
					<Pressable
						key={index}
						onPress={() =>
							navigation.navigate('SaveSketchFlow', {
								screen: 'Sketch',
								params: {
									pic: c.picture,
								},
							})
						}
						style={{
							width: windowWidth * 0.4,
							height: windowWidth * 0.4,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Image
							source={c.picture}
							style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
						/>
					</Pressable>
				);
			})}
		</MainContainer>
	);
}
