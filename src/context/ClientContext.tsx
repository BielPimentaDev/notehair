import { useCanvasRef } from '@shopify/react-native-skia';
import React, { createContext, ReactNode, useState, useEffect } from 'react';
import { IClient } from '../screens/Client/types/models';

export interface contextType {
	children: React.ReactNode;
}

interface valueInterface {
	sketchsList: string;
	setSketchsList: React.Dispatch<React.SetStateAction<string>>;
	clientId: string;
	setClientId: React.Dispatch<React.SetStateAction<string>>;
	clientInfos: Object;
	setclientInfos: any;
}

export const ClientContext = createContext<valueInterface>(
	{} as valueInterface
);

export function ClientContextProvider({ children }: contextType) {
	const [sketchsList, setSketchsList] = useState('');
	const [clientId, setClientId] = useState('');
	const [clientInfos, setclientInfos] = useState({});

	return (
		<ClientContext.Provider
			value={{
				sketchsList,
				setSketchsList,
				clientId,
				setClientId,
				clientInfos,
				setclientInfos,
			}}>
			{children}
		</ClientContext.Provider>
	);
}
