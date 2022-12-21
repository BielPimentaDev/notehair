import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ReactNode } from 'react';


export interface TextProps{
    children: ReactNode;
    style?: StyleProp<TextStyle>
}