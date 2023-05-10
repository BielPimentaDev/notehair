import { windowWidth } from './../../../../sizes';
import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import { SketchContext } from '../../../../context/SketchContext';
import { Gesture } from 'react-native-gesture-handler';

export default function usePanDraw() {
	const panDraw = Gesture.Pan()
		.runOnJS(true)
		.maxPointers(1)
		.onStart(() => console.log(`PAN AND LONGER PRESS`))
		.onUpdate((ev) => {
			console.log(ev.x, ev.y);
		})
		.onEnd(() => {});

	return { panDraw };
}
