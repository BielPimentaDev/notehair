import { StyleProp, TextInputProps, ViewStyle } from 'react-native';
import { ReactNode } from 'react';

export interface ExtraInputProps {
	placeholder: string;
	style?: StyleProp<ViewStyle>;
	icon?: any;
	label?: string;
}

export type InputProps = TextInputProps & ExtraInputProps;
