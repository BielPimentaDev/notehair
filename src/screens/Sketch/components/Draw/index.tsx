import React from 'react';

import { Canvas } from '@shopify/react-native-skia';

import { useRecoilValue } from 'recoil';

import Actual from './components/Actual';
import Temp from './components/Temp';

import { pathsAtom1, tempPathsAtom1 } from '../../../../store';

const Draw: React.FC = () => {
	const path = useRecoilValue(pathsAtom1);
	const tempPaths = useRecoilValue(tempPathsAtom1);

	return (
		<Canvas style={{ flex: 8 }}>
			<Actual path={path} />
			<Temp path={tempPaths} />
		</Canvas>
	);
};

export default Draw;
