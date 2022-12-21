import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import MainContainer from '../../components/Containers/MainContainer';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import { Feather } from '@expo/vector-icons';
import RegularButton from '../../components/Buttons/RegularButton';
import LinkButton from '../../components/Buttons/LinkButton';
import FloatButton from '../../components/Buttons/FloatButton';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native-gesture-handler';
import FlexContainer from '../../components/Containers/FlexContainer';

const backImage = styled.ImageBackground``;

export default function Splashscreen() {
	return (
		<MainContainer>
			<Image source={require('../../../assets/note_splash.png')} />
		</MainContainer>
	);
}
