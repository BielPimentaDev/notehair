import { useState } from 'react';
import { useFonts } from 'expo-font';
import TabMenu from './src/Routes/TabMenu';
import LoginFlow from './src/Routes/LoginFlow';
import { NavigationContainer } from '@react-navigation/native';
import Splashscreen from './src/screens/SplashScreen';
import { useAuth } from './src/hook/useAuth';
import { SketchContextProvider } from './src/context/SketchContext';
import { ClientContextProvider } from './src/context/ClientContext';

export default function App() {
	const [fontsLoaded] = useFonts({
		'inter-bold': require('./assets/fonts/Inter-Bold.ttf'),
		'inter-semibold': require('./assets/fonts/Inter-SemiBold.ttf'),
		inter: require('./assets/fonts/Inter-Regular.ttf'),
		'inter-medium': require('./assets/fonts/Inter-Medium.ttf'),
	});
	return (
		<SketchContextProvider>
			<ClientContextProvider>
				<Navigation />
			</ClientContextProvider>
		</SketchContextProvider>
	);
}

export function Navigation() {
	const [splash, setSplash] = useState(true);
	setTimeout(() => {
		setSplash(false);
	}, 4000);
	const { user } = useAuth();
	return (
		<NavigationContainer>
			{splash ? (
				<Splashscreen />
			) : (
				<>
					{!user && <LoginFlow />}
					{user && <TabMenu />}
				</>
			)}
		</NavigationContainer>
	);
}
