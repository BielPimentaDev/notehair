import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useState, useEffect } from 'react';
import App from '../../App';

export interface contextType {
	children: React.ReactNode;
}

interface valueInterface {
	colorPicked: string;
	setColorPicked: React.Dispatch<React.SetStateAction<string>>;
	typePicked: string;
	setTypePicked: React.Dispatch<React.SetStateAction<string>>;
}

export const SketchContext = createContext<valueInterface>(
	{} as valueInterface
);

export function SketchContextProvider({ children }: contextType) {
	const [typePicked, setTypePicked] = useState('black');
	const [colorPicked, setColorPicked] = useState('normal');

	return (
		<SketchContext.Provider
			value={{
				colorPicked,
				setColorPicked,
				typePicked,
				setTypePicked,
			}}>
			{children}
		</SketchContext.Provider>
	);
}
