import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

export interface ButtonProps {
	text: any;
	style?: StyleProp<ViewStyle>;
	onPress?: ((event: GestureResponderEvent) => void) | undefined;
	type?: 'filled' | 'outline';
	icon?: any;
	disable?: boolean;
	color?: any;
	plusIcon?: boolean;
}
