import { View, Pressable, Image, Text } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import FloatButton from '../../components/Buttons/FloatButton';
import { colors } from '../../colors';
import { useState, useRef, useCallback, useEffect } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import MediumText from '../../components/Texts/MediumText';
import { useNavigation } from '@react-navigation/native';
import { propsStackSketch } from '../../Routes/Models/SketchProps';
import BottomSheetComponent from '../../components/BottomSheet/BottomSheetComponent';
import { BottomSheetButtonInterface } from '../../components/BottomSheet/types';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MotiView, ScrollView } from 'moti';
import LinearGradient from 'expo-linear-gradient';
import { Skeleton, SkeletonContainer } from 'react-native-skeleton-component';
import { FlatList } from 'react-native-gesture-handler/lib/typescript/components/GestureComponents';

function Home() {
	const navigation = useNavigation<propsStackSketch>();

	const modalRef = useRef<BottomSheet>(null);

	const [isOpen, setIsOpen] = useState(false);

	const buttonsBottom: BottomSheetButtonInterface[] = [
		{
			icon: <AntDesign name='pluscircle' size={40} color={colors.primary} />,
			text: 'Criar novo sketch',
			onPress: () => navigation.navigate('SelectSketch'),
		},
		{
			icon: (
				<MaterialCommunityIcons
					name='image-search-outline'
					size={40}
					color='black'
				/>
			),
			text: 'Usar predefinição',
			onPress: () => navigation.navigate('SelectSketch'),
		},
	];

	const handleSnapPress = useCallback(() => {
		modalRef.current?.snapToIndex(0);
		setIsOpen(true);
	}, []);

	const mockPosts = [0, 1, 2, 3, 4];

	return (
		<MainContainer>
			<ScrollView
				style={{ width: '100%', zIndex: -1 }}
				showsVerticalScrollIndicator={false}>
				<SkeletonContainer backgroundColor='#E4E4E4'>
					{mockPosts.map((post, index) => {
						return (
							<View
								key={index}
								style={{
									flexDirection: index % 2 == 0 ? 'row' : 'row-reverse',
									justifyContent: 'space-around',
									marginBottom: 15,
								}}>
								<Skeleton
									style={{ width: 233, height: 233, borderRadius: 8 }}
								/>
								<View style={{ justifyContent: 'space-between' }}>
									<Skeleton
										style={{ width: 110, height: 110, borderRadius: 8 }}
									/>
									<Skeleton
										style={{ width: 110, height: 110, borderRadius: 8 }}
									/>
								</View>
							</View>
						);
					})}
				</SkeletonContainer>
			</ScrollView>
			<BottomSheetComponent
				bottomSheetRef={modalRef}
				percentual={'35%'}
				buttons={buttonsBottom}
				toggle={isOpen}
				setIsToggle={setIsOpen}
			/>

			<FloatButton onPress={handleSnapPress} text='Novo sketch' />
		</MainContainer>
	);
}
export default gestureHandlerRootHOC(Home);
