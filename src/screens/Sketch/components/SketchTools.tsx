import { View, Text, Image } from 'react-native';
import React, { useContext, useState } from 'react';
import { SketchContext } from '../../../context/SketchContext';
import { SketchButton, SketchWraper } from '../styles';
import { colors } from '../../../colors';
import { sketchIcons } from '../helpers/sketchIcons';

export default function SketchTools() {
	const [iconClicked, setIconChosed] = useState<number>(0);
	const { setTypePicked, setShowColorModal } = useContext(SketchContext);

	return (
		<SketchWraper horizontal showsHorizontalScrollIndicator={false}>
			{sketchIcons.map((item, index) => {
				const onChoose = () => {
					setIconChosed(index);
					setTypePicked(item.name);
				};
				return (
					<SketchButton
						onLongPress={() => {
							setShowColorModal(true);
						}}
						onPress={onChoose}
						key={index}
						style={{
							position: `relative`,
							elevation: 2,
							backgroundColor: index == iconClicked ? colors.primary : 'white',
						}}>
						<Image
							source={item.image}
							style={{
								tintColor: iconClicked == index ? 'white' : 'black',
							}}
						/>
					</SketchButton>
				);
			})}
		</SketchWraper>
	);
}
