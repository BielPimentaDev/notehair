import React, { useContext, useEffect, useState } from 'react';
import MainContainer from '../../components/Containers/MainContainer';
import { colors } from '../../colors';
import {
	ClientBiggerText,
	ClientButton,
	ClientButtonIcon,
	ClientsButtons,
	ClientSection,
	ImageProfile,
	MapComponent,
	ProfileWraper,
	TextProfile,
} from './styles';
import ClientsSketchs from './ClientSketchs/ClientsSketchs';
import Galeries from './Galeries/Galeries';
import Details from './Details';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import PopUpHeader from '../../components/Header/PopUpHeader';
import { useRemoveTabBar } from '../../hook/useRemoveTabBar';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {
	propsNavigationStackClients,
	propsStackClients,
} from '../../Routes/Models/ClientsProps';
import { buttonsProps, ComponentsInterface } from './types/indexTypes';
import { buttons } from './helpers/indexHelpers';
import {
	ClientContext,
	ClientContextProvider,
} from '../../context/ClientContext';
import { getWhere } from '../../services/getWhere';

const selectedButtons: ComponentsInterface = {
	Sketchs: <ClientsSketchs />,
	Galeria: <Galeries />,
	Detalhes: <Details />,
};

function Client() {
	useRemoveTabBar();
	const navigation = useNavigation<propsStackClients>();
	const route = useRoute<RouteProp<propsNavigationStackClients, 'Client'>>();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [buttonClicked, setButtonClicked] =
		useState<keyof ComponentsInterface>('Sketchs');

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

	const { setclientInfos, setClientId } = useContext(ClientContext);

	useEffect(() => {
		setClientId(route.params.clientUid);

		setclientInfos(route.params.clientInfo);
	}, []);

	return (
		<MainContainer>
			<PopUpHeader
				isOpen={isModalOpen}
				setIsOpen={setIsModalOpen}
				buttons={popUpButtons}
			/>
			<ProfileWraper>
				<ImageProfile
					source={require('../../../assets/profiles/genericProfile.png')}
				/>
				<TextProfile>{route.params?.name}</TextProfile>
			</ProfileWraper>
			<ClientSection>
				<ClientsButtons>
					{buttons.map((item: buttonsProps, index: number) => {
						return (
							<ClientButton
								onPress={() => setButtonClicked(item.name)}
								key={index}
								buttonClicked={buttonClicked}
								name={item.name}>
								<ClientButtonIcon
									source={item.icon}
									style={{
										tintColor:
											item.name == buttonClicked ? colors.primary : 'black',
									}}
								/>
								<ClientBiggerText
									allowFontScaling={true}
									maxFontSizeMultiplier={1.2}
									buttonClicked={buttonClicked}
									name={item.name}>
									{item.name}
								</ClientBiggerText>
							</ClientButton>
						);
					})}
				</ClientsButtons>
			</ClientSection>
			<MapComponent>{selectedButtons[buttonClicked]}</MapComponent>
		</MainContainer>
	);
}
export default gestureHandlerRootHOC(Client);
