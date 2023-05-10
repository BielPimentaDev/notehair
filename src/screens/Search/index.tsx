import MainContainer from '../../components/Containers/MainContainer';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../colors';
import { ActivityIndicator, View } from 'react-native';
import { useEffect, useState } from 'react';
import FloatButton from '../../components/Buttons/FloatButton';
import { useNavigation } from '@react-navigation/native';
import { propsStackClients } from '../../Routes/Models/ClientsProps';
import { useAuth } from '../../hook/useAuth';
import { getWhere } from '../../services/getWhere';
import SearchList, { ProfileProps } from '../../components/Lists/SearchList';
import { IClient } from '../Client/types/models';
import { Ionicons } from '@expo/vector-icons';

type keysToSearchForInterface = {
	key: keyof IClient;
};

export default function Search() {
	const navigation = useNavigation<propsStackClients>();
	const [searchText, setSearchText] = useState('');
	const { user } = useAuth();

	const { loading, returningList: clientsList } = getWhere({
		databaseCollection: 'clients',
		databaseKey: 'userUid',
		equalTo: user?.uid,
	});

	const keysToSearchFor: keysToSearchForInterface[] = [
		{ key: 'instagram' },
		{ key: 'name' },
		{ key: 'number' },
	];

	const filtredClientsList = clientsList.filter((client: ProfileProps) => {
		return keysToSearchFor.some(
			({ key }) =>
				client.data[key] &&
				client.data[key].toLocaleLowerCase().includes(searchText.toLowerCase())
		);
	});

	return (
		<MainContainer>
			<StyledTextInput
				onChangeText={setSearchText}
				placeholder='Buscar por cliente, sketch...'
				icon={
					<FontAwesome5
						name='search'
						size={18}
						color={colors.paragraph_light}
					/>
				}
			/>
			<View style={{ paddingTop: 15, marginTop: 15, flex: 1, width: '100%' }}>
				{loading ? (
					<ActivityIndicator />
				) : (
					<SearchList dataProps={filtredClientsList} />
				)}
			</View>

			<FloatButton
				plusIcon={false}
				text={<Ionicons name='person-add' size={24} color='white' />}
				onPress={() => navigation.navigate('NewClient')}
			/>
		</MainContainer>
	);
}
