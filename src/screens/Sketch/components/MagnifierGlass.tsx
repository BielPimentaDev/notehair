import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { SketchContext } from '../../../context/SketchContext';
import { windowHeight, windowWidth } from '../../../sizes';
import { colors } from '../../../colors';

interface IMagnifier {
	moveX: number;
	moveY: number;
}
const MagnifierGlassComponent = styled.ImageBackground<IMagnifier>`
	width: 80px;
	height: 80px;
	border-radius: 75px;
	position: absolute;
	top: ${(props) => props.moveY}px;
	left: ${(props) => props.moveX}px;
	border: 1px solid black;
	overflow: hidden;
	background-color: ${colors.white};
`;

export default function MagnifierGlass() {
	// const imageRef = currentImageRef.current?.makeImageSnapshot();
	// const base64 = imageRef?.encodeToBase64();
	const { currentPointX, currentPointY } = useContext(SketchContext);
	return (
		<View />
		// <MagnifierGlassComponent
		// 	// source={{ uri: `data:image/png;base64,${base64}` }}'
		// 	source={require('../../../../assets/sketchs/head1.png')}
		// 	moveX={currentPointX.value}
		// 	moveY={currentPointY.value}
		// 	imageStyle={{
		// 		width: windowWidth * 2,
		// 		height: windowHeight * 2,
		// 		top: (currentPointX.value * 2 + 100) * -1,
		// 		left: (currentPointY.value * 2 + 75) * -1,
		// 		opacity: 1,

		// 		// opacity: 0.4,
		// 	}}
		// />
	);
}
