import styled from 'styled-components/native';

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
export const ClientButton = styled.Pressable`
	flex-direction: row;
	align-items: center;
	padding: 3%;
	border-radius: 30px;
	height: 50px;
`;
