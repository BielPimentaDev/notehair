import { Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { colors } from '../../colors';
import MainContainer from '../../components/Containers/MainContainer';
import { SketchButton, SketchWraper } from './styles';
import { sketchIcons } from './helpers';
import ColorsModal from './ColorsModal';
import SketchHeader from '../../components/Header/SketchHeader';
import { useNavigation } from '@react-navigation/native';
import {
	propsStackSaveSketch,
	propsStackSketch,
} from '../../Routes/Models/SketchProps';
import Draw from './Draw';
import { SketchContext } from '../../context/SketchContext';
import Zoom from '../../../Zoom';
import { PopUpButtonsInterface } from '../../components/Header/types';

export default function Sketch() {
	const { setTypePicked, currentImageRef } = useContext(SketchContext);
	const navigation = useNavigation<propsStackSaveSketch>();

	const [isPopUpModalOpen, setIsPopUpModalOpen] = useState(false);
	useEffect(() => {
		navigation.getParent();
		navigation.getParent()?.setOptions({ headerShown: false });
		return () => {
			navigation.getParent()?.setOptions({
				headerShown: true,
			});
		};
	}, []);

	const [iconClicked, setIconChosed] = useState<number>(0);
	const [showColorModal, setShowColorModal] = useState(false);

	const sketchButtons = [
		{
			action: () => {
				setIsPopUpModalOpen(false);
			},
			text: 'Deletar',
			color: colors.alert,
		},
		{
			action: () => {
				navigation.navigate('SaveStack');
				setIsPopUpModalOpen(false);
			},
			text: 'Salvar ',
			color: colors.tint,
		},
		{
			action: () => {
				setIsPopUpModalOpen(false);
			},
			text: 'Salvar como',
			color: colors.tint,
		},
	];

	return (
		<MainContainer>
			<SketchHeader
				isOpen={isPopUpModalOpen}
				setIsOpen={setIsPopUpModalOpen}
				buttons={sketchButtons}
			/>

			<Draw />

			{showColorModal && (
				<ColorsModal
					setShowColorModal={setShowColorModal}
					showColorModal={showColorModal}
				/>
			)}
			<SketchWraper horizontal showsHorizontalScrollIndicator={false}>
				{sketchIcons.map((item, index) => {
					const onChoose = () => {
						setIconChosed(index);
						setTypePicked(item.name);
					};
					return (
						<SketchButton
							onLongPress={() => setShowColorModal(true)}
							onPress={onChoose}
							key={index}
							style={{
								elevation: 2,
								backgroundColor:
									index == iconClicked ? colors.primary : 'white',
							}}>
							<Image
								source={item.image}
								style={{
									tintColor: iconClicked == index ? 'white' : 'black',
								}}
							/>
						</SketchButton>
					);
				})}
			</SketchWraper>
		</MainContainer>
	);
}
