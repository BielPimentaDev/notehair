import {
	Canvas,
	Image,
	Rect,
	runSpring,
	useImage,
	useSpring,
} from '@shopify/react-native-skia';
import { useState } from 'react';
import { Button } from 'react-native';
import {
	Gesture,
	GestureDetector,
	GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { useValue } from 'react-native-reanimated';
import MainContainer from '../../components/Containers/MainContainer';
import WarnsList from '../../components/Lists/WarnsList';
import { windowHeight, windowWidth } from '../../sizes';

export default function Warns() {
	const headImage = useImage(require(`../../../assets/sketchs/head1.png`));
	const [scale, setScale] = useState(150);

	const pinch = Gesture.Pinch()
		.runOnJS(true)
		.onUpdate((ev) => {
			// console.log(ev.scale);
			setScale(150 * ev.scale);
		});
	const pan = Gesture.Pan().onUpdate(() => console.log(`oi`));

	const scaleAnimation = useSpring(scale);

	return (
		<MainContainer>
			<GestureHandlerRootView
				style={{
					width: windowWidth,
					height: windowHeight,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<GestureDetector gesture={pinch}>
					<Canvas style={{ flex: 1, backgroundColor: `red`, width: `100%` }}>
						{headImage && (
							<Image
								image={headImage}
								height={scaleAnimation}
								width={scaleAnimation}
								x={100}
								y={100}
							/>
						)}
					</Canvas>
				</GestureDetector>
			</GestureHandlerRootView>
		</MainContainer>
	);
}
// return (
// 		<MainContainer>
// 			<WarnsList />
// 		</MainContainer>
// 	);
// }
