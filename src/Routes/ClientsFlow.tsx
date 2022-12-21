import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../colors';
import Client from '../screens/Client';
import EditClient from '../screens/Client/ClientsPages/EditClient';

import Home from '../screens/Home/Index';
import Search from '../screens/Search';
import Sketch from '../screens/Sketch';

const Stack = createNativeStackNavigator();

export default function ClientsFlow() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: colors.white,
				},
			}}>
			<Stack.Screen
				options={{ headerShown: false }}
				name='Search'
				component={Search}
			/>
			<Stack.Screen
				name='Client'
				component={Client}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='EditClient'
				component={EditClient}
				options={{ title: 'EDITAR CLIENTE' }}
			/>
		</Stack.Navigator>
	);
}
