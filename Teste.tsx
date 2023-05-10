import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import BiggerText from './src/components/Texts/BiggerText';
import MainContainer from './src/components/Containers/MainContainer';
import StyledTextInput from './src/components/Inputs/StyledTextInput';
import { searchData } from './dataMock';
import SmallText from './src/components/Texts/SmallText';

type testInterface = {
	nome: string;
	idade: string;
	instagram: string;
};

const test = [
	{ nome: 'gabriel', idade: '12', instagram: '@gbrl.pimenta' },
	{ nome: 'guilherme', idade: '15', instagram: '@guiialves' },
	{ nome: 'lucs', idade: '18', instagram: '@luks' },
];

type testKeys = {
	key: keyof testInterface;
};

export default function Teste() {
	const [searchText, setSearchText] = useState('');

	const testKeys: testKeys[] = [
		{ key: 'nome' },
		{ key: 'idade' },
		{ key: 'instagram' },
	];

	const filtredTest = test.filter((item) => {
		return testKeys.some((key) =>
			item[key.key].toLowerCase().includes(searchText)
		);
	});

	return (
		<MainContainer>
			<StyledTextInput placeholder='Buscar...' onChangeText={setSearchText} />
			<BiggerText>Teste</BiggerText>
			<View>
				{filtredTest.map((item) => {
					return (
						<View style={{ alignItems: 'center' }}>
							<BiggerText>{item.nome}</BiggerText>
							<SmallText>{item.idade}</SmallText>
						</View>
					);
				})}
			</View>
		</MainContainer>
	);
}
