import { View, Text, Image, Pressable } from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { colors } from '../../colors';
import styled from 'styled-components/native';
import MainContainer from '../../components/Containers/MainContainer';
import { windowHeight, windowWidth } from '../../sizes';
import { SketchButton, SketchWraper } from './styles';
import { sketchIcons } from './helpers';
import ColorsModal from './ColorsModal';
import SketchHeader from '../../components/Header/SketchHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
	propsNavigationStackSketch,
	propsStackSketch,
} from '../../Routes/Models/SketchProps';
import Draw from './Draw';
import { SketchContext } from '../../context/SketchContext';
import FlexContainer from '../../components/Containers/FlexContainer';

export default function Sketch() {
	const { setTypePicked } = useContext(SketchContext);
	const navigation = useNavigation<propsStackSketch>();

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

	return (
		<MainContainer>
			<SketchHeader
				isOpen={isPopUpModalOpen}
				setIsOpen={setIsPopUpModalOpen}
				buttons={[
					{
						action: () => {
							navigation.navigate('SaveSketchFlow');
							setIsPopUpModalOpen(false);
						},
						text: 'Deletar',
						color: colors.alert,
					},
					{
						action: () => {
							navigation.navigate('SaveSketchFlow');
							setIsPopUpModalOpen(false);
						},
						text: 'Salvar ',
						color: colors.tint,
					},
					{
						action: () => {
							navigation.navigate('SaveSketchFlow');
							setIsPopUpModalOpen(false);
						},
						text: 'Salvar como',
						color: colors.tint,
					},
				]}
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
								elevation: index == iconClicked ? 0 : 2,
								backgroundColor:
									index == iconClicked ? 'rgba(51, 48, 211, 0.1)' : 'white',
							}}>
							<Image
								source={item.image}
								style={{
									tintColor: iconClicked == index ? colors.primary : 'black',
								}}
							/>
						</SketchButton>
					);
				})}
			</SketchWraper>
		</MainContainer>
	);
}
