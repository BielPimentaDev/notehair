import MainContainer from '../../components/Containers/MainContainer';
import BiggerText from '../../components/Texts/BiggerText';
import RegularButton from '../../components/Buttons/RegularButton';
import { colors } from '../../colors';
import { Image, Text, View } from 'react-native';
import SmallText from '../../components/Texts/SmallText';
import { ActionItem, ActionsList, ProfileSection, TextWraper } from './styles';
import { useAuth } from '../../hook/useAuth';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../config/firebase';

const actionItens = [
	{
		title: 'Minha conta',
		subtitle: 'Editar imagem de perfil e informações pessoais',
		icon: require('../../../assets/icons/person_outline.png'),
		key: '1',
	},
	{
		title: 'Política de Privacidade',
		subtitle: 'Nossa Política de Privacidade atualizada',
		icon: require('../../../assets/icons/feed.png'),
		key: '2',
	},
];

export default function Menu() {
	const { user } = useAuth();
	const auth = getAuth(app);

	async function logout() {
		await signOut(auth);
	}
	return (
		<MainContainer>
			<ProfileSection>
				<Image
					source={require('../../../assets/profiles/genericProfile.png')}
				/>
				<TextWraper>
					<BiggerText style={{ fontSize: 16 }}>{user?.displayName}</BiggerText>
					<SmallText style={{ fontSize: 16 }}>{user?.email}</SmallText>
				</TextWraper>
			</ProfileSection>

			<ActionsList>
				{actionItens.map((item, index) => {
					return (
						<ActionItem
							key={index}
							style={{
								borderBottomWidth: 1,
								borderBottomColor: colors.gray_3,
								paddingBottom: 10,
								marginBottom: 15,
							}}>
							<Image source={item.icon} style={{ width: 24, height: 24 }} />
							<View style={{ marginLeft: 20 }}>
								<BiggerText style={{ fontSize: 16 }}>{item.title}</BiggerText>
								<Text
									numberOfLines={1}
									allowFontScaling={false}
									style={{
										color: colors.paragraph_light,
										paddingRight: 5,
										fontSize: 16,
										fontFamily: 'inter',
									}}>
									{item.subtitle}
								</Text>
							</View>
						</ActionItem>
					);
				})}
			</ActionsList>
			<RegularButton
				text='Sair da conta'
				type='outline'
				style={{ marginTop: 'auto' }}
				color={colors.alert}
				onPress={logout}
			/>
		</MainContainer>
	);
}
