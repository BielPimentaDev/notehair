import { StyleProp, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export interface ContainerProps {
	children: ReactNode;
	style?: StyleProp<ViewStyle>;
	closeModal?: any;
}
