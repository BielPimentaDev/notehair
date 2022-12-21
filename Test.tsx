import React, { useCallback, useRef } from 'react';
import { Image } from 'react-native';
import Pinchable from 'react-native-pinchable';
import MainContainer from './src/components/Containers/MainContainer';

export const Test = () => {
	return (
		<MainContainer>
			<Pinchable>
				<Image source={require('./assets/sketchs/heads.jpeg')} />
			</Pinchable>
		</MainContainer>
	);
};
