import { useContext } from 'react';
import { Gesture } from 'react-native-gesture-handler';
import { SketchContext } from '../../../../context/SketchContext';
import useZoomHandler from './usePinch';

export default function useSetImagePosition() {
	const { zoomHandler } = useZoomHandler();
	const { offSetFocalX, offSetFocalY } = useContext(SketchContext);
	const setImagePosition = Gesture.Pan()

		.runOnJS(true)
		.maxPointers(1)
		.onStart((g) => {
			console.log(` start`);
		})
		.onChange((event) => {
			offSetFocalX.value = -event.absoluteX;
			offSetFocalY.value = -event.absoluteY;
		})

		.minDistance(1);
	return { setImagePosition };
}
