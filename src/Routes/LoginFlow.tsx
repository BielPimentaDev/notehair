import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login/Index';

import Register from '../screens/Register';
import IntroSlider from '../screens/Slider/IntroSlider';

const Stack = createNativeStackNavigator();

export default function LoginFlow() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={{ headerShown: false }}
				name='Slider'
				component={IntroSlider}
			/>
			<Stack.Screen name='Entrar' component={Login} />
			<Stack.Screen name='Registrar' component={Register} />
		</Stack.Navigator>
	);
}
