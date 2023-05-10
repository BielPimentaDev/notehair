import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import { SketchContext } from '../../../../context/SketchContext';
import { Gesture } from 'react-native-gesture-handler';
import { withSpring } from 'react-native-reanimated';

export default function useZoomHandler() {
	const {
		setImageScale,
		zoomIsOn,
		offSetScale,
		offSetFocalX,
		offSetFocalY,
		currentScale,
		setCurrentScale,
	} = useContext(SketchContext);

	const zoomHandler = Gesture.Pinch()

		.runOnJS(true)
		.onBegin((ev) => {
			console.log(`ev`);
		})

		.onUpdate((event) => {
			if (event.scale > 4) return;
			if (event.scale < 0.1) return;
			offSetScale.value = event.scale;
			// offSetFocalX.value = event.focalX;
			// offSetFocalY.value = event.focalY;
		})
		.onFinalize((ev) => {
			console.log(`fim`);
		});
	return { zoomHandler };
}
