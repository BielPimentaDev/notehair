import styled from 'styled-components/native';
import { windowWidth } from '../../sizes';

export const SketchButton = styled.Pressable`
	width: ${windowWidth * 0.12}px;
	height: ${windowWidth * 0.12}px;
	border-radius: ${windowWidth * 0.2}px;
	justify-content: center;
	align-items: center;
	margin-left: 14px;
	margin-top: auto;
	margin-bottom: 10px;
`;
export const SketchWraper = styled.ScrollView`
	margin-bottom: 10px;
	position: relative;
`;

export const ColorsModalStyled = styled.View`
	width: 90%;
	height: 100px;
	background-color: red;
	position: absolute;
	bottom: ${windowWidth * 0.22}px;
	left: 16px;
	background-color: white;
	border-radius: 8px;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	z-index: 100;
`;
