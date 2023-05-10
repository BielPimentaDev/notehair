import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, SafeAreaView, Animated } from 'react-native';

import { useSharedValue } from 'react-native-reanimated';
import {
	PanGestureHandlerEventPayload,
	PinchGestureHandlerEventPayload,
} from 'react-native-gesture-handler';

import { useRecoilState } from 'recoil';
import { pathsAtom, tempPathsAtom } from '../../store';

import GestureHandler from './components/GestureHandler';
import { SketchContext } from '../../context/SketchContext';

const DrawingArea: React.FC = () => {
	const [pathsState, setPathsState] = useRecoilState<any>(pathsAtom);
	const { colorPicked } = useContext(SketchContext);
	const [tempPathsState, setTempPathsState] =
		useRecoilState<any>(tempPathsAtom);

	// const scale = useSharedValue(1);
	const scale = new Animated.Value(1);
	const [savedScale, setSavedValue] = useState(1);

	const [enablePan, setEnablePan] = useState(true);

	const [erase, setErase] = useState(false);

	const onStartPinch = () => {
		setEnablePan(false);
	};

	const onUpdatePinch = useCallback(
		(e: PinchGestureHandlerEventPayload) => {
			Animated.timing(scale, {
				duration: 1,
				toValue: savedScale * e.scale,
				useNativeDriver: true,
			}).start();
		},
		[savedScale]
	);

	const onEndPinch = (e: PinchGestureHandlerEventPayload) => {
		setSavedValue(e.scale);
		setEnablePan(true);
	};

	const onStartPan = useCallback(
		(e: PanGestureHandlerEventPayload) => {
			setTempPathsState((prevState: any) => {
				return [
					...prevState,
					{
						segments: [`M ${e.x} ${e.y}`],
						color: colorPicked,
						date: new Date(),
						blend: erase ? 'clear' : undefined,
					},
				];
			});
		},
		[erase]
	);

	const onUpdatePan = useCallback(
		(e: PanGestureHandlerEventPayload) => {
			if (!enablePan) {
				setTempPathsState([]);

				return;
			}

			setTempPathsState((prevState: any) => {
				const index = prevState.length - 1;

				const newState = JSON.parse(JSON.stringify(prevState));

				if (newState?.[index]?.segments) {
					newState[index].segments.push(`L ${e.x} ${e.y}`);
					return [...newState];
				}

				return [...newState];
			});
		},
		[enablePan]
	);

	const onEndPan = useCallback(() => {
		setPathsState((prevState: any) => {
			return [...prevState, ...tempPathsState];
		});

		setTempPathsState([]);
	}, [tempPathsState]);

	const handleErase = () => {
		setErase((prevState) => !prevState);
	};

	return (
		<SafeAreaView style={{ backgroundColor: '#e8e8e8' }}>
			<GestureHandler
				scale={scale}
				onStartPinch={onStartPinch}
				onUpdatePinch={onUpdatePinch}
				onEndPinch={onEndPinch}
				enablePan={enablePan}
				onStartPan={onStartPan}
				onUpdatePan={onUpdatePan}
				onEndPan={onEndPan}
			/>

			<Button title='Eraser' onPress={handleErase} />
		</SafeAreaView>
	);
};

export default DrawingArea;
