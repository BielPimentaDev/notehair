import React, { useContext, useState } from 'react';
import { ImageBackground, SafeAreaView, Text, Image } from 'react-native';
import {
	Gesture,
	GestureDetector,
	GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {
	Canvas,
	center,
	DashPathEffect,
	Path,
} from '@shopify/react-native-skia';
import { SketchContext } from '../../context/SketchContext';
import { windowHeight, windowWidth } from '../../sizes';
import { useRoute } from '@react-navigation/native';

interface IPath {
	segments: string;
	color?: string;
	type?: string;
}

export default function GestureDemo() {
	const { colorPicked, typePicked } = useContext(SketchContext);
	const route = useRoute();
	const [gestureStart, setGestureStart] = useState<string>('M 0 0');
	const [gestureUpdate, setGestureUpdate] = useState<string>('0 0');

	const [paths, setPaths] = useState<IPath[]>([]);
	const pan = Gesture.Pan()
		.runOnJS(true)
		.onStart((g) => {
			setGestureStart(`M ${Math.round(g.x)}  ${Math.round(g.y)}`);
			setPaths([
				...paths,
				{ segments: `${gestureStart}`, color: colorPicked, type: typePicked },
			]);
		})

		.onUpdate((g) => {
			const index = paths.length - 1;
			const newPaths = [...paths];
			newPaths[index] = {
				segments: `${gestureStart} L ${Math.round(g.x)}  ${Math.round(g.y)}`,
				color: colorPicked,
				type: typePicked,
			};
			setPaths(newPaths);
		});

	return (
		<GestureHandlerRootView
			style={{
				width: windowWidth,
				height: windowHeight * 0.8,
				justifyContent: 'center',
			}}>
			<GestureDetector gesture={pan}>
				<SafeAreaView style={{ flex: 1 }}>
					<Image
						source={require('../../../assets/grade.png')}
						style={{
							width: windowWidth,
							height: windowHeight,
							position: 'absolute',
							opacity: 0.3,
						}}
						resizeMode='stretch'
					/>
					<Image
						source={route.params?.pic}
						style={{
							zIndex: -99,
							width: windowWidth,
							position: 'absolute',
						}}
						resizeMode='contain'
					/>
					<Canvas style={{ flex: 1, zIndex: 10 }}>
						{paths.map((p, index) => {
							return (
								<Path
									key={index}
									path={p.segments}
									color={p.color}
									style={'stroke'}
									strokeWidth={5}>
									{p.type == 'dash' && <DashPathEffect intervals={[8, 8]} />}
								</Path>
							);
						})}
					</Canvas>
				</SafeAreaView>
			</GestureDetector>
		</GestureHandlerRootView>
	);
}
