import { View, Text, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { ColorsModalStyled } from './styles';
import { colors } from '../../colors';
import { SketchContext } from '../../context/SketchContext';
import { windowHeight, windowWidth } from '../../sizes';

interface ColorsModalProps {
	setShowColorModal: any;
	showColorModal: any;
}
const colorsToBeSelected = [
	{ black: 'rgba(29, 29, 29, 1)' },
	{ white: '#e59b9b' },
	{ red: colors.alert },
	{ blue: colors.primary },
	{ gray: colors.gray_3 },
	{ green: '#8BC34A' },
	{ yellow: '#FFC107' },
	{ brown: 'rgba(121, 85, 72, 1)' },
	{ black: '#79bdf5' },
	{ white: '#e455d1' },
];

export default function ColorsModal(props: ColorsModalProps) {
	const { setColorPicked, colorPicked } = useContext(SketchContext);
	return (
		<ColorsModalStyled style={{ elevation: 2 }}>
			{colorsToBeSelected.map((item, index) => {
				const colorCode = Object.values(item)[0];
				const clickOnColor = () => {
					setColorPicked && setColorPicked(colorCode);
					props.setShowColorModal(false);
				};
				return (
					<Pressable
						onPress={clickOnColor}
						key={index}
						style={{
							backgroundColor: Object.values(item)[0],
							width: 30,
							height: 30,
							borderRadius: 20,
							marginVertical: 10,
							marginHorizontal: 10,
							borderWidth: 1,
							zIndex: 99,
							borderColor: colorCode == colorPicked ? colors.primary : 'white',
						}}
					/>
				);
			})}
		</ColorsModalStyled>
	);
}
