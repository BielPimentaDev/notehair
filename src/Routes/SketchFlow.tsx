import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../colors';

import Home from '../screens/Home/Index';
import Sketch from '../screens/Sketch';
import SelectSketch from '../screens/Sketch/SelectSketch';
import SaveSketchFlow from './SaveSketchFlow';

const Stack = createNativeStackNavigator();

export default function SketchFlow() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: colors.white,
				},
			}}>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name='Home'
				component={Home}
			/>
			<Stack.Screen
				name='SelectSketch'
				component={SelectSketch}
				options={{ title: 'Selecione' }}
			/>
			<Stack.Screen
				name='SaveSketchFlow'
				component={SaveSketchFlow}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
