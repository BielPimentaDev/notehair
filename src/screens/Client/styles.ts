import { windowWidth } from './../../sizes';
import styled from 'styled-components/native';
import { colors } from '../../colors';
import { ComponentsInterface } from './types/indexTypes';

interface IClientProps {
	buttonClicked: keyof ComponentsInterface;
	name: keyof ComponentsInterface;
}

export const ProfileWraper = styled.View`
	flex-direction: row;
	align-items: center;
	width: 100%;
	margin-top: 15px;
	margin-bottom: 30px;
`;

export const ClientSection = styled.View`
	width: 100%;
	margin-bottom: 15px;
`;

export const ClientsButtons = styled.View`
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
`;
export const ClientButton = styled.Pressable<IClientProps>`
	flex-direction: row;
	align-items: center;
	padding: 2%;
	border-radius: 30px;
	height: 50px;
	background-color: ${(props) =>
		props.buttonClicked == props.name
			? colors.primary_opacity_10
			: colors.white};
`;

export const ClientBiggerText = styled.Text<IClientProps>`
	font-size: 14px;
	font-weight: 600;
	font-family: 'inter-semibold';
	margin-left: 10px;
	color: ${(props) =>
		props.buttonClicked == props.name ? colors.primary : 'black'};
`;
export const TextProfile = styled.Text`
	margin-left: 16px;
	font-size: 20px;
	font-weight: 600;
	font-family: 'inter-semibold';
`;

export const ImageProfile = styled.Image`
	width: 70px;
	height: 70px;
`;

export const MapComponent = styled.View`
	width: ${windowWidth}px;
	flex: 1;
`;

export const ClientButtonIcon = styled.Image`
	width: ${windowWidth * 0.05}px;
	height: ${windowWidth * 0.05}px;
`;

export const SelectedMapComponent = styled.View`
	width: 100%;
	flex: 1;
	height: 100%;
`;

export const SelectedListWraper = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	padding: 0 20px;
`;

export const SelectedItem = styled.Image<{ index: number }>`
	width: 30%;
	height: 100px;
	border-radius: 8px;
	margin-right: ${(props) => (props.index + (1 % 3) == 0 ? '0' : '3%')};
`;
