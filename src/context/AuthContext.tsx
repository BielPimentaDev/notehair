import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useState, useEffect } from 'react';
import App from '../../App';

export interface contextType {
	children: React.ReactNode;
}

interface valueInterface {
	token: string;
	setToken: React.Dispatch<React.SetStateAction<string>>;
	isLoading: boolean;
	isAuth: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	login: () => void;
	logout: () => void;
}

export const AppContext = createContext<valueInterface>({} as valueInterface);

export function AppContextProvider({ children }: contextType) {
	const [token, setToken] = useState('');
	const [isAuth, setIsAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchToken = async function getAsyncStorage() {
			const asyncItem = await AsyncStorage.getItem('token');
			if (asyncItem) {
				setIsAuth(true);
			}
			console.log(token);
		};
		fetchToken();
	}, []);

	function login() {
		setToken('testando');
		setIsAuth(true);
		AsyncStorage.setItem('token', token);
		setIsLoading(false);
	}
	function logout() {
		setToken('');
		setIsAuth(false);
		AsyncStorage.setItem('token', token);
		setIsLoading(false);
	}

	return (
		<AppContext.Provider
			value={{
				token,
				setToken,
				isLoading,
				setIsLoading,
				login,
				logout,
				isAuth,
			}}>
			{children}
		</AppContext.Provider>
	);
}
