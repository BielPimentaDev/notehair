import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../colors';
import Sketch from '../screens/Sketch';
import NewClient from '../screens/Sketch/NewClient';
import SaveSketch from '../screens/Sketch/SaveSketch';

export default function SaveSketchFlow() {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: colors.white,
				},
			}}
			initialRouteName='Sketch'>
			<Stack.Screen
				options={{ headerShown: false }}
				name='Sketch'
				component={Sketch}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name='SaveStack'
				component={CreateClientStack}
			/>
			<Stack.Screen
				options={{ headerShown: false }}
				name='SaveAs'
				component={SaveSketch}
			/>
		</Stack.Navigator>
	);
}
export function CreateClientStack() {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: colors.white,
				},
			}}>
			<Stack.Screen
				options={{ headerShown: false }}
				name='Save'
				component={SaveSketch}
			/>
			<Stack.Screen
				options={{ headerShown: true, title: 'NOVO CLIENTE' }}
				name='NewClient'
				component={NewClient}
			/>
		</Stack.Navigator>
	);
}
