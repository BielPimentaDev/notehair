import { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

export interface ButtonProps{
    text: string;
    style?: StyleProp<ViewStyle>;
    onPress?: ((event:GestureResponderEvent)=> void) | undefined
    type?: 'filled' | 'outline';
    icon?: any;
    disable?: boolean;
    color?: any

}