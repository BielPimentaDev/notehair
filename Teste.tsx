import { useEffect } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Canvas, useCanvasRef, Circle } from '@shopify/react-native-skia';
import ImageViewer from 'react-native-image-zoom-viewer';
import MainContainer from './src/components/Containers/MainContainer';
import { MotiView } from 'moti';
import { windowWidth } from './src/sizes';
import { SkeletonContainer, Skeleton } from 'react-native-skeleton-component';

export default function Teste() {
	const ref = useCanvasRef();
	const imageRef = ref.current?.makeImageSnapshot();
	const base64 = imageRef?.encodeToBase64();

	const images = [
		{
			url: '',
			props: {
				source: require('./assets/sketchs/zoom.jpg'),
			},
		},
	];
	return (
		<MainContainer>
			<SkeletonContainer>
				<Skeleton style={{ width: 100, height: 100 }} />
			</SkeletonContainer>
		</MainContainer>
	);
}

const styles = StyleSheet.create({
	container: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
	avatar: { height: 40, width: 40, borderRadius: 0 },
	textContainer: { flex: 1, marginLeft: 16 },
	title: { width: '90%', height: 14, borderRadius: 7, marginBottom: 5 },
	subtitle: { width: '70%', height: 14, borderRadius: 7 },
	icon: { height: 16, width: 16, borderRadius: 4 },
});
