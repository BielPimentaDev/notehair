import React, { useEffect, useState } from 'react';
import {
	Gesture,
	GestureDetector,
	GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
	useAnimatedStyle,
	useSharedValue,
} from 'react-native-reanimated';
import { windowHeight, windowWidth } from '../../sizes';
import useDrawGesture from './hooks/gestures/useSetImagePosition';
import useZoomHandler from './hooks/gestures/usePinch';
import { Matrix4, multiply4, toMatrix3, identity4 } from 'react-native-redash';
import { useSharedValueEffect } from '@shopify/react-native-skia';
import useSetImagePosition from './hooks/gestures/useSetImagePosition';
import useDragMagnifierGlass from './hooks/gestures/usePanGestureGlass';
import { View } from 'react-native';
import usePanDraw from './hooks/gestures/usePanDraw';

export default function DrawingArea({ children }: { children: JSX.Element }) {
	const { zoomHandler } = useZoomHandler();
	const { setImagePosition } = useSetImagePosition();
	const { dragMagnifierGlass } = useDragMagnifierGlass();
	const { panDraw } = usePanDraw();
	const mixGestures = Gesture.Simultaneous(zoomHandler, dragMagnifierGlass);

	return (
		<GestureHandlerRootView
			style={{
				flex: 1,
				width: `100%`,
				height: `100%`,
			}}>
			<GestureDetector gesture={panDraw}>{children}</GestureDetector>
		</GestureHandlerRootView>
	);
}
