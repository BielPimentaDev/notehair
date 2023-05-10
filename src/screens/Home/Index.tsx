import MainContainer from '../../components/Containers/MainContainer';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import FloatButton from '../../components/Buttons/FloatButton';
import { colors } from '../../colors';
import { useState, useRef, useCallback } from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import MediumText from '../../components/Texts/MediumText';
import { useNavigation } from '@react-navigation/native';
import { propsStackSelectSketch } from '../../Routes/Models/SketchProps';
import BottomSheetComponent from '../../components/BottomSheet/BottomSheetComponent';
import { BottomSheetButtonInterface } from '../../components/BottomSheet/types';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Mosaic from './components/Mosaic';
import { getWhere } from '../../services/getWhere';
import { useAuth } from '../../hook/useAuth';

function Home() {
	const { user } = useAuth();

	const { returningList: picturesFromClients } = getWhere({
		databaseCollection: 'galerie',
		databaseKey: 'userId',
		equalTo: user?.uid,
	});
	const navigation = useNavigation<propsStackSelectSketch>();

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

	return (
		<MainContainer>
			<Mosaic picturesFromClients={picturesFromClients} />
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
