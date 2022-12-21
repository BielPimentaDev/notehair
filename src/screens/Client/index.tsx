import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import MainContainer from '../../components/Containers/MainContainer';
import BiggerText from '../../components/Texts/BiggerText';
import { colors } from '../../colors';
import { windowHeight, windowWidth } from '../../sizes';
import {
	ClientButton,
	ClientsButtons,
	ClientSection,
	ProfileWraper,
} from './styles';
import ClientsSketchs from './ClientsSketchs';
import Galeries from './Galeries';
import Details from './Details';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import PopUpHeader from '../../components/Header/PopUpHeader';

const buttons = [
	{
		name: 'Sketchs',
		icon: require('../../../assets/mosaic.png'),
	},
	{
		name: 'Galeria',
		icon: require('../../../assets/icons/collections.png'),
	},
	{
		name: 'Detalhes',
		icon: require('../../../assets/icons/info.png'),
	},
];

interface ComponentsInterface {
	Sketchs: JSX.Element;
	Galeria: JSX.Element;
	Detalhes: JSX.Element;
}

const selectedButtons: ComponentsInterface = {
	Sketchs: <ClientsSketchs />,
	Galeria: <Galeries />,
	Detalhes: <Details />,
};

function Client({ route, navigation }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [buttonClicked, setButtonClicked] = useState('Sketchs');
	const popUpButtons = [
		{
			text: 'Editar',
			action: () => {
				navigation.navigate('EditClient');
				setIsModalOpen(false);
			},
			color: colors.tint,
		},
		{
			text: 'Excluir',
			action: () => {
				navigation.navigate('EditClient');
				setIsModalOpen(false);
			},
			color: colors.alert,
		},
	];

	useEffect(() => {
		navigation
			.getParent()
			.setOptions({ tabBarStyle: { display: 'none' }, headerShown: false });
		return () => {
			navigation.getParent().setOptions({
				tabBarStyle: {
					height: windowWidth * 0.15,
					width: '100%',
					paddingHorizontal: 10,
					marginVertical: 5,
					elevation: 0,
					backgroundColor: 'white',
					display: 'flex',
					heigh: 45,
				},
				headerShown: true,
			});
		};
	}, []);

	return (
		<MainContainer>
			<PopUpHeader
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
				buttons={popUpButtons}
			/>
			<ProfileWraper>
				<Image source={route.params.pic} style={{ width: 70, height: 70 }} />
				<BiggerText style={{ marginLeft: 16, fontSize: 20 }}>
					{route.params.name}
				</BiggerText>
			</ProfileWraper>
			<ClientSection>
				<ClientsButtons>
					{buttons.map((item, index) => {
						return (
							<ClientButton
								onPress={() => setButtonClicked(item.name)}
								key={index}
								style={{
									backgroundColor:
										buttonClicked == item.name
											? colors.primary_opacity_10
											: colors.white,
								}}>
								<Image
									source={item.icon}
									style={{
										tintColor:
											item.name == buttonClicked ? colors.primary : 'black',
										width: windowWidth * 0.05,
										height: windowWidth * 0.05,
									}}
								/>
								<BiggerText
									style={{
										fontSize: 16,
										marginLeft: 10,

										color:
											item.name == buttonClicked ? colors.primary : 'black',
									}}>
									{item.name}
								</BiggerText>
							</ClientButton>
						);
					})}
				</ClientsButtons>
			</ClientSection>
			<View
				style={{
					width: windowWidth,
					flex: 1,
				}}>
				{selectedButtons[buttonClicked]}
			</View>
		</MainContainer>
	);
}
export default gestureHandlerRootHOC(Client);
