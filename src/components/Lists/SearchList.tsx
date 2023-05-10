import {
	View,
	Text,
	FlatList,
	Image,
	Pressable,
	ActivityIndicator,
} from 'react-native';
import React from 'react';
import BiggerText from '../Texts/BiggerText';
import SmallText from '../Texts/SmallText';
import { windowWidth } from '../../sizes';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { propsStackClients } from '../../Routes/Models/ClientsProps';

import { colors } from '../../colors';
import { getWhere } from '../../services/getWhere';
import { useAuth } from '../../hook/useAuth';
import { IClient } from '../../screens/Client/types/models';

export interface ProfileProps {
	data: IClient;
	id: string;
}

function Profile({ data }: { data: ProfileProps }) {
	const navigation = useNavigation<propsStackClients>();
	return (
		<Pressable
			onPress={() =>
				navigation.navigate('Client', {
					name: data.data.name,
					pic: '',
					clientUid: data.id,
					clientInfo: data,
				})
			}
			style={{ flexDirection: 'row', marginVertical: 10 }}>
			<Image
				source={require('../../../assets/profiles/genericProfile.png')}
				style={{ width: windowWidth / 8, height: windowWidth / 8 }}
			/>
			<View style={{ marginLeft: 10 }}>
				<BiggerText style={{ fontSize: 16 }}>{data.data.name}</BiggerText>
				<SmallText>{15}</SmallText>
			</View>
		</Pressable>
	);
}

interface SearchListProps {
	dataProps: ProfileProps[];
}

export default function SearchList({ dataProps }: SearchListProps) {
	return (
		<FlatList
			data={dataProps}
			renderItem={({ item }) => <Profile data={item} />}
		/>
	);
}
