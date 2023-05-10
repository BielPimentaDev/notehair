import { useIsFocused, useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
import { View } from 'moti';
import { ActivityIndicator, Image, Pressable, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import BiggerText from '../../../components/Texts/BiggerText';
import SmallText from '../../../components/Texts/SmallText';
import { db } from '../../../config/firebase';
import { windowWidth } from '../../../sizes';
import { propsStackSketch } from '../../../Routes/Models/SketchProps';
import { getWhere } from '../../../services/getWhere';
import { useAuth } from '../../../hook/useAuth';
import { colors } from '../../../colors';
import { useContext } from 'react';
import { SketchContext } from '../../../context/SketchContext';
import { IClient } from '../../Client/types/models';

export default function SelectClient() {
	const navigation = useNavigation<propsStackSketch>();

	const saveSketchBaseOnClient = async (
		clientId: string,
		sketchUrl: string
	) => {
		console.log(clientId);
		const colRef = collection(db, 'sketchs');
		try {
			await addDoc(colRef, {
				sketchUrl: sketchUrl,
				clientId: clientId,
			});
		} catch (error) {
			console.log(error);
		}
	};
	const { user } = useAuth();
	const getWhereProps = {
		databaseCollection: 'clients',
		databaseKey: 'userUid',
		equalTo: user?.uid,
	};
	const {
		returningList: clientsList,
		errors,
		loading,
	} = getWhere(getWhereProps);

	const { currentImageRef } = useContext(SketchContext);

	const imageRef = currentImageRef.current?.makeImageSnapshot();
	const base64 = imageRef?.encodeToBase64();

	const clientClickHandler = (uid: string) => {
		saveSketchBaseOnClient(uid, base64);
		navigation.goBack();
	};

	const Profile = ({ data }: { data: { data: IClient; id: string } }) => (
		<>
			<Pressable
				onPress={() => clientClickHandler(data.id)}
				style={{ flexDirection: 'row', marginVertical: 10 }}>
				<Image
					source={require('../../../../assets/profiles/profile-2.png')}
					style={{ width: windowWidth / 8, height: windowWidth / 8 }}
				/>
				<View style={{ marginLeft: 10 }}>
					<BiggerText>{data.data.name}</BiggerText>
					<SmallText>15</SmallText>
				</View>
			</Pressable>
		</>
	);

	return (
		<View>
			{loading ? (
				<ActivityIndicator color={colors.primary} style={{ marginTop: 50 }} />
			) : (
				<FlatList
					data={clientsList}
					renderItem={({ item }) => <Profile data={item} />}
				/>
			)}
		</View>
	);
}
