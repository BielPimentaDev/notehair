import { View, Text } from 'react-native';
import React, { useState } from 'react';
import MainContainer from '../../../components/Containers/MainContainer';
import RegularButton from '../../../components/Buttons/RegularButton';
import BiggerText from '../../../components/Texts/BiggerText';
import FlexContainer from '../../../components/Containers/FlexContainer';
import StyledTextInput from '../../../components/Inputs/StyledTextInput';
import SearchList from '../../../components/Lists/SearchList';
import { colors } from '../../../colors';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { propsStackSaveSketch } from '../../../Routes/Models/SketchProps';
import SelectClient from '../components/SelectClient';

export default function SaveSketch() {
	const navigation = useNavigation<propsStackSaveSketch>();

	return (
		<MainContainer>
			<RegularButton
				onPress={() => navigation.navigate('NewClient')}
				text={` Criar novo cliente`}
				style={{ marginTop: 16 }}
				icon={<AntDesign name='plus' size={50} color='black' />}
			/>
			<BiggerText style={{ marginVertical: 16, color: colors.gray_1 }}>
				OU
			</BiggerText>
			<StyledTextInput
				placeholder='Buscar cliente...'
				style={{ marginBottom: 16 }}
				icon={<Ionicons name='search-sharp' size={24} color='black' />}
			/>
			<FlexContainer>
				<SelectClient />
			</FlexContainer>
		</MainContainer>
	);
}
