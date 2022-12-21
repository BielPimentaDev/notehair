import MainContainer from '../../components/Containers/MainContainer';
import styled from 'styled-components/native';
import BiggerText from '../../components/Texts/BiggerText';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../../colors';
import { View } from 'react-native';
import SearchList from '../../components/Lists/SearchList';

export default function Search() {
	return (
		<MainContainer>
			<StyledTextInput
				style={{ paddingBottom: 0 }}
				placeholder='Buscar por cliente, sketch...'
				icon={
					<FontAwesome5
						name='search'
						size={18}
						color={colors.paragraph_light}
					/>
				}
			/>
			<View style={{ paddingTop: 15, marginTop: 15, flex: 1, width: '100%' }}>
				<SearchList />
			</View>
		</MainContainer>
	);
}
