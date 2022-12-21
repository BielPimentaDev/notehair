import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { TabInterface } from './tabTypes';
import Search from '../screens/Search';
import Warns from '../screens/Warns';
import Menu from '../screens/Menu';
import { colors } from '../colors';
import Home from '../screens/Home/Index';
import BiggerText from '../components/Texts/BiggerText';
import { Image, View } from 'react-native';
import MediumText from '../components/Texts/MediumText';
import SketchFlow from './SketchFlow';
import { windowHeight, windowWidth } from '../sizes';
import ClientsFlow from './ClientsFlow';

const Tab = createBottomTabNavigator();
const tabs: TabInterface[] = [
	{
		name: 'HomeStack',
		component: SketchFlow,
		icon: require('../../assets/mosaic.png'),
		active_icon: require('../../assets/active_mosaic.png'),
		title: 'Note Hair',
		label: 'Início',
	},
	{
		name: 'ClientsStack',
		component: ClientsFlow,
		icon: require('../../assets/search.png'),
		active_icon: require('../../assets/active_search.png'),
		title: 'Buscar',
		label: 'Busca',
	},
	{
		name: 'Avisos',
		component: Warns,
		icon: require('../../assets/notifications.png'),
		active_icon: require('../../assets/active_notification.png'),
		title: 'Avisos',
		label: 'Avisos',
	},
	{
		name: 'Menu',
		component: Menu,
		icon: require('../../assets/menu.png'),
		active_icon: require('../../assets/active_menu.png'),
		title: 'Menu',
		label: 'Menu',
	},
];

export default function TabMenu() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					height: windowWidth * 0.15,
					width: '100%',
					paddingHorizontal: 10,
					marginVertical: 5,
					elevation: 0,
					backgroundColor: 'white',
				},
			}}>
			{tabs.map((tab: TabInterface, index: number) => {
				return (
					<Tab.Screen
						key={index}
						name={tab.name}
						component={tab.component}
						options={{
							headerStyle: { backgroundColor: colors.white },
							headerTitle: () => {
								return <BiggerText>{tab.title}</BiggerText>;
							},
							tabBarIcon: ({ focused, color, size }) => {
								if (focused) {
									return (
										<View
											style={{
												alignItems: 'center',
												justifyContent: 'center',
											}}>
											<Image
												source={tab.active_icon}
												style={{ resizeMode: 'contain' }}
											/>
											<MediumText
												style={{
													fontFamily: 'inter-medium',
													color: colors.primary,
													fontSize: 14,
												}}>
												{tab.label}
											</MediumText>
										</View>
									);
								} else {
									return (
										<View
											style={{
												alignItems: 'center',
												justifyContent: 'center',
											}}>
											<Image
												source={tab.icon}
												style={{ resizeMode: 'contain' }}
											/>
											<MediumText
												style={{ fontFamily: 'inter-medium', fontSize: 14 }}>
												{tab.label}
											</MediumText>
										</View>
									);
								}
							},
							tabBarLabel: tab.label,
							tabBarActiveBackgroundColor: colors.primary_opacity_10,
							tabBarInactiveTintColor: 'black',
							tabBarHideOnKeyboard: true,
							tabBarItemStyle: {
								margin: 2,
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 31,
							},
							tabBarActiveTintColor: colors.primary,
						}}
					/>
				);
			})}
		</Tab.Navigator>
	);
}
