import styled from 'styled-components/native';
import { colors } from '../../../colors';

export const StyledProfileImage = styled.View`
	position: relative;
	margin-bottom: 27px;
`;
export const StyledPenIcon = styled.View`
	width: 35px;
	height: 35px;
	border-radius: 25px;
	background-color: ${colors.primary};
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 0;
	right: 0;
`;

export const InputsWraper = styled.View`
	width: 100%;
	margin-bottom: 16px;
`;
export const SelectWraper = styled.View`
	flex-direction: row;
	justify-content: flex-start;
	justify-content: space-between;
`;

export const CheckWraper = styled.View`
	flex-direction: row;
	align-items: center;
	width: 100%;
	justify-content: flex-start;
`;
