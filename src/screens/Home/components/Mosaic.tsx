import React from 'react';
import { StyleSheet, View, Image, FlatList, Text } from 'react-native';
import styled from 'styled-components/native';
import BiggerText from '../../../components/Texts/BiggerText';
import SmallText from '../../../components/Texts/SmallText';
import { windowHeight, windowWidth } from '../../../sizes';

interface MosaicItemProps {
	data: { data: { imageUri: string } };
	index: number;
}

interface MosaicRow {
	reverse?: boolean;
}

const BigSquare = styled.Image`
	width: ${windowWidth * 0.5}px;
	height: ${windowWidth * 0.5}px;
	margin: 2px;
	border-radiu: 8px;
`;

const RegularSquare = styled.Image`
	width: ${windowWidth * 0.24}px;
	height: ${windowWidth * 0.24}px;
	margin: 2px;
	border-radius: 8px;
`;

const MosaicRow = styled.View`
	justify-content: space-between;
`;

const Mosaic = ({ picturesFromClients }: any) => {
	const MosaicItem = (props: MosaicItemProps) => {
		const { data, index } = props;
		if (index % 6 === 0) {
			return <BigSquare source={{ uri: data.data.imageUri }} />;
		}
		if (index % 6 === 2) {
			return (
				<MosaicRow>
					<RegularSquare source={{ uri: data.data.imageUri }} />
					<RegularSquare
						source={{ uri: picturesFromClients[index - 1].data.imageUri }}
					/>
				</MosaicRow>
			);
		}
		if (index % 6 === 4) {
			return (
				<MosaicRow>
					<RegularSquare source={{ uri: data.data.imageUri }} />
					<RegularSquare
						source={{ uri: picturesFromClients[index - 1].data.imageUri }}
					/>
				</MosaicRow>
			);
		}
		if (index % 6 === 5) {
			return <BigSquare source={{ uri: data.data.imageUri }} />;
		} else {
			return <></>;
		}
	};

	return (
		<View style={{ justifyContent: 'center', alignItems: `center` }}>
			{picturesFromClients.length >= 1 ? (
				<FlatList
					style={{ width: windowWidth, flex: 1 }}
					contentContainerStyle={{
						marginLeft: `auto`,
						marginRight: `auto`,
						marginTop: 8,
					}}
					data={picturesFromClients}
					numColumns={3}
					renderItem={({ item, index }) => (
						<MosaicItem data={item} index={index} />
					)}
					showsHorizontalScrollIndicator={false}
				/>
			) : (
				<>
					<Image source={require('../../../../assets/note_splash.png')} />
					<BiggerText style={{ textAlign: 'center', marginTop: 25 }}>
						Você ainda não possui fotos salvas!
					</BiggerText>
					<SmallText style={{ textAlign: 'center', marginTop: 2 }}>
						Aqui aparecerão suas principais fotos.
					</SmallText>
				</>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	regularPicture: {
		width: windowWidth * 0.8,
		height: 200,
	},
	square: {
		width: windowWidth * 0.24,
		height: windowWidth * 0.24,
	},
	bigSquare: {
		width: windowWidth * 0.5,
		height: windowWidth * 0.5,
		borderWidth: 1,
		borderColor: 'red',
		padding: 1,
	},
});

export default Mosaic;
