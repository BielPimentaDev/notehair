import { ActivityIndicator } from 'react-native';
import React from 'react';
import { colors } from '../../../colors';
import { RouteProp, useRoute } from '@react-navigation/native';
import { propsNavigationStackClients } from '../../../Routes/Models/ClientsProps';
import {
	SelectedItem,
	SelectedListWraper,
	SelectedMapComponent,
} from '../styles';
import { ClientInterface } from '../types/models';
import { getWhere } from '../../../services/getWhere';

export default function ClientsSketchs() {
	const route = useRoute<RouteProp<propsNavigationStackClients, 'Client'>>();
	const { loading, returningList: sketchsList } = getWhere({
		databaseCollection: 'sketchs',
		databaseKey: 'clientId',
		equalTo: route.params.clientUid,
	});
	return (
		<SelectedMapComponent>
			{loading ? (
				<ActivityIndicator
					size={24}
					color={colors.primary}
					style={{ marginTop: 100 }}
				/>
			) : (
				<SelectedListWraper>
					{sketchsList.map((item: ClientInterface, index) => {
						const base64 = item.data.sketchUrl;
						return (
							<SelectedItem
								index={index}
								source={{ uri: `data:image/png;base64,${base64}` }}
								key={index}
							/>
						);
					})}
				</SelectedListWraper>
			)}
		</SelectedMapComponent>
	);
}
