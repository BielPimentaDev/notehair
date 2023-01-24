import React, { useContext, useState, useRef, useEffect } from 'react';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';
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
	SkiaView,
	useCanvasRef,
	Image,
	useImage,
} from '@shopify/react-native-skia';
import { SketchContext } from '../../context/SketchContext';
import { windowHeight, windowWidth } from '../../sizes';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtonsWraper, GradeImage, HeadImage } from './styles';
import { IPath } from './types';
import ImageViewer from 'react-native-image-zoom-viewer';

export default function Draw() {
	const { colorPicked, typePicked } = useContext(SketchContext);
	const route = useRoute();
	const [gestureStart, setGestureStart] = useState<string>('M 0 0');
	const [popped, setPopped] = useState<IPath[]>([]);
	const [paths, setPaths] = useState<IPath[]>([]);
	const [currentXPosition, setCurrentXPosition] = useState<number>();
	const [currentYPosition, setCurrentYPosition] = useState<number>();

	const headImage = useImage(require('../../../assets/sketchs/head1.png'));

	const unDoDraw = () => {
		const newPaths = [...paths];
		const poppedPath = newPaths.pop();
		if (!poppedPath) return;
		setPopped([...popped, poppedPath]);
		setPaths(newPaths);
	};

	const reDoDraw = () => {
		const newPopped = [...popped];
		const poppedPath = newPopped.pop();
		const newPaths = [...paths];
		if (!poppedPath) return;
		newPaths.push(poppedPath);
		setPopped(newPopped);
		setPaths(newPaths);
	};

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
			setCurrentXPosition(g.x);
			setCurrentYPosition(g.y);
		});

	const { currentImageRef } = useContext(SketchContext);
	currentImageRef;
	return (
		<GestureHandlerRootView
			style={{
				width: windowWidth,
				height: windowHeight * 0.75,
				justifyContent: 'center',
				zIndex: 10,
			}}>
			<GestureDetector gesture={pan}>
				<SafeAreaView style={{ flex: 1 }}>
					<ButtonsWraper>
						<MaterialIcons
							name='undo'
							size={24}
							color='black'
							style={{ marginRight: 5 }}
							onPress={unDoDraw}
						/>
						<MaterialIcons
							name='redo'
							size={24}
							color='black'
							style={{ marginLeft: 5 }}
							onPress={reDoDraw}
						/>
					</ButtonsWraper>
					<GradeImage
						source={require('../../../assets/grade.png')}
						resizeMode='stretch'
					/>
					{/* <HeadImage source={route.params?.pic} resizeMode='contain' /> */}
					<Canvas style={{ flex: 1 }} ref={currentImageRef}>
						{headImage && (
							<Image
								image={headImage}
								fit='contain'
								x={50}
								y={150}
								width={300}
								height={300}
							/>
						)}
						{paths.map((p, index) => {
							return (
								<Path
									key={index}
									path={p.segments}
									color={p.color}
									style={'stroke'}
									strokeWidth={4}>
									{p.type == 'dash' && (
										<DashPathEffect intervals={[10, 2]} phase={10} />
									)}
								</Path>
							);
						})}
					</Canvas>
				</SafeAreaView>
			</GestureDetector>
		</GestureHandlerRootView>
	);
}
