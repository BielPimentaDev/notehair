import MainContainer from './src/components/Containers/MainContainer';
import { useContext, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import TabMenu from './src/Routes/TabMenu';
import { AppContext, AppContextProvider } from './src/context/AuthContext';
import LoginFlow from './src/Routes/LoginFlow';
import { ActivityIndicator, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Splashscreen from './src/screens/SplashScreen';
import Draw from './src/screens/Sketch/Draw';
import { SketchContextProvider } from './src/context/SketchContext';
import { Test } from './Test';

export default function App() {
	const [fontsLoaded] = useFonts({
		'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
		'inter-semibold': require('./assets/fonts/Inter-SemiBold.ttf'),
		inter: require('./assets/fonts/Inter-Regular.ttf'),
		'inter-medium': require('./assets/fonts/Inter-Medium.ttf'),
	});

	return (
		<AppContextProvider>
			<Navigation />
		</AppContextProvider>
	);
}

export function Navigation() {
	// const [splash, setSplash] = useState(true);
	// setTimeout(() => {
	// 	console.log('fim splash');
	// 	setSplash(false);
	// }, 10000);

	const { isAuth } = useContext(AppContext);
	return (
		// <NavigationContainer>
		// 	{splash ? (
		// 		<Splashscreen />
		// 	) : (
		// 		<>
		// 			{!isAuth && <LoginFlow />}
		// 			{isAuth && <TabMenu />}
		// 		</>
		// 	)}
		// </NavigationContainer>
		// <Draw></Draw>
		<NavigationContainer>
			<SketchContextProvider>
				<TabMenu />
			</SketchContextProvider>
		</NavigationContainer>
	);
}
