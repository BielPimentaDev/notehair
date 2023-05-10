import React, { useContext, useEffect, useRef, useState } from 'react';
import { Image as ReactNativeImage, StyleSheet, View } from 'react-native';
import {
	Canvas,
	Path,
	useImage,
	useTouchHandler,
	useValue,
	SkPath,
	Skia,
	SkiaView,
	useDrawCallback,
	SkCanvas,
	PaintStyle,
} from '@shopify/react-native-skia';
import { SketchContext } from '../../context/SketchContext';
import { GradeImage } from './styles';
import DrawingArea from './DrawingArea';
import { RouteProp, useRoute } from '@react-navigation/native';
import { propsNavigationStackSketch } from '../../Routes/Models/SketchProps';
import { windowHeight, windowWidth } from '../../sizes';
import { colors } from '../../colors';
import RegularButton from '../../components/Buttons/RegularButton';
import { FontAwesome } from '@expo/vector-icons';
import { DrawContainer } from './styles/drawStyles';
import Animated, {
	Easing,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from 'react-native-reanimated';
import MagnifierGlass from './components/MagnifierGlass';
import RenderCanvas from './components/RenderCanvas';
import RenderTempCanvas from './components/RenderTempCanvas';

const paint = () => {
	const paint = Skia.Paint();
	paint.setStyle(PaintStyle.Stroke);
	paint.setStrokeWidth(4);
	paint.setColor(Skia.Color(`black`));
	return paint;
};

export default function Draw() {
	const currentPath = useRef<SkPath | null>(null);
	const {
		currentImageRef,
		paths,
		zoomIsOn,
		setZoomIsOn,
		imageScale,
		offSetScale,
		offSetFocalX,
		offSetFocalY,
		setCurrentScale,
		currentScale,
		currentPointX,
		currentPointY,
	} = useContext(SketchContext);

	const { params } =
		useRoute<RouteProp<propsNavigationStackSketch, 'SaveSketchFlow'>>();

	const [skiaPaths, setSkiaPaths] = useState<SkPath[]>([]);
	const headImage = useImage(params?.pic);
	const canvasRef = useRef<SkCanvas | null>(null);

	return (
		<DrawingArea>
			<View style={{ flex: 1, width: `100%` }}>
				<RenderCanvas />
				<RenderTempCanvas />
			</View>
		</DrawingArea>
	);
}
