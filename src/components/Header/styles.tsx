import styled from 'styled-components/native';
import { windowWidth } from '../../sizes';

export const HeaderWraper = styled.View`
	width: ${windowWidth - 32}px;
	height: 55px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	z-index: 10;
`;

export const IconsWraper = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;
