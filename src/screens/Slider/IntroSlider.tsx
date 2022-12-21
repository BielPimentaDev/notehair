import AppIntroSlider from 'react-native-app-intro-slider';
import MainContainer from '../../components/Containers/MainContainer';
import { View, Image, FlatList } from 'react-native';
import { colors } from '../../colors';
import BiggerText from '../../components/Texts/BiggerText';
import SmallText from '../../components/Texts/SmallText';
import MediumText from '../../components/Texts/MediumText';
import { windowHeight, windowWidth } from '../../sizes';
import RegularButton from '../../components/Buttons/RegularButton';
import styled from 'styled-components/native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { propsStackLogin } from '../../Routes/Models/LoginProps';
import { slides, SlidesInterface } from './helpers';

const WraperButton = styled.View`
	width: ${windowWidth * 0.9}px;
	margin-bottom: 20px;
`;

export default function IntroSlider() {
	const navigation = useNavigation<propsStackLogin>();

	const RenderSlide = ({ data }: { data: SlidesInterface }) => {
		return (
			<MainContainer style={{ position: 'relative', justifyContent: 'center' }}>
				<Image source={data.image} />
				<MediumText
					style={{ marginTop: 30, marginHorizontal: 5, fontSize: 16 }}>
					{data.text}
				</MediumText>
			</MainContainer>
		);
	};
	return (
		<AppIntroSlider
			renderItem={({ item }) => <RenderSlide data={item} />}
			data={slides}
			activeDotStyle={{ backgroundColor: colors.primary }}
			renderNextButton={() => (
				<RegularButton style={{ marginBottom: 50 }} text='Próximo' />
			)}
			showDoneButton={true}
			bottomButton
			renderDoneButton={() => (
				<WraperButton>
					<RegularButton
						text='Quero me cadastrar'
						onPress={() => navigation.navigate('Registrar')}
					/>
					<RegularButton
						text='Já sou cadastrado'
						type='outline'
						style={{ marginTop: 10 }}
						onPress={() => navigation.navigate('Entrar')}
					/>
				</WraperButton>
			)}
		/>
	);
}
