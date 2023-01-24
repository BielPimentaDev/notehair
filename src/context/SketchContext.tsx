import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCanvasRef } from '@shopify/react-native-skia';
import React, { createContext, ReactNode, useState, useEffect } from 'react';
import App from '../../App';

export interface contextType {
	children: React.ReactNode;
}

interface IPath {
	segments: string;
	color?: string;
	type?: string;
}

interface valueInterface {
	colorPicked: string;

	setColorPicked: React.Dispatch<React.SetStateAction<string>>;
	typePicked: string;

	setTypePicked: React.Dispatch<React.SetStateAction<string>>;

	paths: IPath;
	setPaths: React.Dispatch<React.SetStateAction<IPath[]>>;

	poppeds: IPath;
	setPoppeds: React.Dispatch<React.SetStateAction<IPath[]>>;

	currentImageRef: any;
	setCurrentImageRef: React.Dispatch<React.SetStateAction<any>>;
}

export const SketchContext = createContext<valueInterface>(
	{} as valueInterface
);

export function SketchContextProvider({ children }: contextType) {
	const [typePicked, setTypePicked] = useState('normal');
	const [colorPicked, setColorPicked] = useState('black');
	const [popped, setPopped] = useState<IPath[]>([]);
	const [paths, setPaths] = useState<IPath[]>([]);

	const currentImageRef = useCanvasRef();

	return (
		<SketchContext.Provider
			value={{
				colorPicked,
				setColorPicked,
				typePicked,
				setTypePicked,
				setPaths,
				paths,
				popped,
				setPopped,
				currentImageRef,
			}}>
			{children}
		</SketchContext.Provider>
	);
}
