import { Image, Text, View, ImageBackground } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
	Gesture,
	GestureDetector,
	GestureHandlerRootView,
} from 'react-native-gesture-handler';
import MainContainer from './src/components/Containers/MainContainer';
import { windowHeight, windowWidth } from './src/sizes';

import ImageViewer from 'react-native-image-zoom-viewer';
import styled from 'styled-components/native';
import { colors } from './src/colors';

export default function Zoom() {
	const images = [
		{
			url: '',
			props: {
				source: require('./assets/sketchs/header_grade_1.png'),
			},
		},
	];
	const [moveX, setMoveX] = useState<number>(0);
	const [moveY, setMoveY] = useState<number>(0);

	const [moveXGlass, setMoveXGlass] = useState<number>(0);
	const [moveYGlass, setMoveYGlass] = useState<number>(0);

	const pan = Gesture.Pan()
		.runOnJS(true)
		.onStart((g) => {
			console.log('start');
		})
		.onUpdate((g) => {
			setMoveX(g.x - 30);
			setMoveY(g.y - 30);
		});

	const imageRef = useRef<ImageBackground>(null);

	// Image.getSize(
	// 	require('./assets/sketchs/head1.png'),
	// 	(w, h) => console.log(`w: ${w} h: ${h}`),
	// 	() => console.log('error')
	// );

	return (
		// <ImageViewer

		// 	imageUrls={images}
		// 	style={{ width: 400 }}
		// 	backgroundColor='white'

		// />

		<GestureHandlerRootView>
			<GestureDetector gesture={pan}>
				<MainContainer style={{ position: 'relative' }}>
					<ImageBackground
						ref={imageRef}
						source={require('./assets/sketchs/header_grade_1.png')}
						style={{ width: windowWidth, height: windowHeight }}
					/>
					<ImageBackground
						source={require('./assets/sketchs/header_grade_1.png')}
						style={{
							width: 150,
							height: 150,
							position: 'absolute',
							borderWidth: 1,
							borderRadius: 200,
							overflow: 'hidden',
							top: moveY,
							left: moveX,
							backgroundColor: colors.white,
						}}
						imageStyle={{
							width: windowWidth * 2,
							height: windowHeight * 2,
							top: (moveY * 2 + 100) * -1,
							left: (moveX * 2 + 75) * -1,
							opacity: 1,
							// opacity: 0.4,
						}}
					/>
				</MainContainer>
			</GestureDetector>
		</GestureHandlerRootView>
	);
}
