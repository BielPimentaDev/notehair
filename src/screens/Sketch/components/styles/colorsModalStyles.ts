import styled from 'styled-components/native';
import { colors } from '../../../../colors';

interface PressableStrokeProps {
	size: number;
	name?: string;
}

interface PressableColorProps {
	color: string;
	colorPicked: string;
}

export const StyledWraper = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const PressableStroke = styled.Pressable<PressableStrokeProps>`
	width: ${(props) => props.size * 2}px;
	height: ${(props) => props.size * 2}px;
	background-color: black;
	border-radius: ${(props) => props.size * 2}px;
	margin: 10px;
`;

export const PressableColor = styled.Pressable<PressableColorProps>`
	background-color: ${(props) => props.color};
	width: 35px;
	height: 35px;
	border-radius: 20px;
	margin: 5px;
	border-width: 1px;
	z-index: 99;
	border-color: ${(props) =>
		props.color == props.colorPicked ? colors.primary : 'white'};
`;
