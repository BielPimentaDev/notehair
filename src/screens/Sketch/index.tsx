import { Image, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import MainContainer from '../../components/Containers/MainContainer';
import ColorsModal from './components/ColorsModal';
import SketchHeader from '../../components/Header/SketchHeader';
import Draw from './Draw';
import { SketchContext } from '../../context/SketchContext';
import SketchTools from './components/SketchTools';
import { SketchHeaderButtons } from './helpers/sketchHeaderButtons';
import { useRemoveHeader } from '../../hook/useRemoveHeader';
import RegularButton from '../../components/Buttons/RegularButton';

export default function Sketch() {
	useRemoveHeader();
	const {
		showColorModal,
		setShowColorModal,
		isPopUpModalOpen,
		setIsPopUpModalOpen,
		zoomIsOn,
		setZoomIsOn,
	} = useContext(SketchContext);

	const { sketchButtons } = SketchHeaderButtons();

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
			<SketchTools />
		</MainContainer>
	);
}
