import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../../colors';

const sketchs = [0, 1, 2, 3, 4, 5, 6];

export default function ClientsSketchs() {
	return (
		<View
			style={{
				width: '100%',
				flexDirection: 'row',
				flexWrap: 'wrap',
				margin: 'auto',
				marginHorizontal: 8,
			}}>
			{sketchs.map((item) => {
				return (
					<View
						key={item}
						style={{
							width: '28%',
							height: 100,
							borderRadius: 8,
							backgroundColor: colors.gray_3,
							margin: 8,
						}}
					/>
				);
			})}
		</View>
	);
}
