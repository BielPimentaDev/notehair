import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../colors';
import Client from '../screens/Client';
import EditClient from '../screens/Client/ClientsPages/EditClient';
import TakePicture from '../screens/Client/TakePicture/TakePicture';
import Search from '../screens/Search';
import NewClient from '../screens/Sketch/NewClient';

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
				options={{ headerShown: true, title: 'NOVO CLIENTE' }}
				name='NewClient'
				component={NewClient}
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
			<Stack.Screen
				name='TakePicture'
				component={TakePicture}
				options={{ title: 'TIRAR FOTO' }}
			/>
		</Stack.Navigator>
	);
}
