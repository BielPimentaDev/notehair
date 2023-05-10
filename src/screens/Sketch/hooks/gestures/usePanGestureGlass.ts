import { windowWidth } from './../../../../sizes';
import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import { SketchContext } from '../../../../context/SketchContext';
import { Gesture } from 'react-native-gesture-handler';

export default function useDragMagnifierGlass() {
	const { currentPointX, currentPointY } = useContext(SketchContext);

	const dragMagnifierGlass = Gesture.Pan()
		.runOnJS(true)
		.maxPointers(1)
		// .activateAfterLongPress(2000)
		.onStart(() => console.log(`PAN AND LONGER PRESS`))
		.onUpdate((ev) => {
			console.log(ev.x, ev.y);
			// currentPointX.value = ev.x - 75;
			// currentPointY.value = ev.y - 100;
		})
		.onEnd(() => {
			// currentPointX.value = -1500;
			// currentPointY.value = -1500;
		});

	return { dragMagnifierGlass };
}
