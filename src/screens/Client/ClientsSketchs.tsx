import { View, Text } from 'react-native';
import React from 'react';
import { colors } from '../../colors';
import { Skeleton, SkeletonContainer } from 'react-native-skeleton-component';

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
			<SkeletonContainer>
				{sketchs.map((item) => {
					return (
						<Skeleton
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
			</SkeletonContainer>
		</View>
	);
}
