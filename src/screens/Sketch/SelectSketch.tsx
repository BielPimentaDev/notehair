import { View, Text, Pressable, Image } from 'react-native';
import React, { useEffect } from 'react';
import MainContainer from '../../components/Containers/MainContainer';
import RegularButton from '../../components/Buttons/RegularButton';
import { windowWidth } from '../../sizes';
import { useNavigation } from '@react-navigation/native';
import { propsStackSelectSketch } from '../../Routes/Models/SketchProps';
import { useRemoveTabBar } from '../../hook/useRemoveTabBar';

export default function SelectSketch() {
	const navigation = useNavigation<propsStackSelectSketch>();
	useRemoveTabBar();

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
				alignItems: 'baseline',
				alignContent: 'space-around',
				justifyContent: 'space-around',
				flexDirection: 'row',
				flexWrap: 'wrap',
			}}>
			{croquis.map((croqui, index) => {
				return (
					<Pressable
						key={index}
						onPress={() =>
							navigation.navigate('SaveSketchFlow', {
								screen: 'Sketch',
								params: { pic: croqui.picture },
							})
						}
						style={{
							width: windowWidth * 0.3,
							height: windowWidth * 0.3,
							justifyContent: 'center',
						}}>
						<Image
							source={croqui.picture}
							style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
						/>
					</Pressable>
				);
			})}
		</MainContainer>
	);
}
