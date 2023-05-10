import { SketchContext } from './../../../context/SketchContext';
import { useContext } from 'react';
import { colors } from '../../../colors';
import { useNavigation } from '@react-navigation/native';
import { propsStackSaveSketch } from '../../../Routes/Models/SketchProps';

export const SketchHeaderButtons = () => {
	const { setIsPopUpModalOpen } = useContext(SketchContext);
	const navigation = useNavigation<propsStackSaveSketch>();

	const sketchButtons = [
		{
			action: () => {
				setIsPopUpModalOpen(false);
			},
			text: 'Deletar',
			color: colors.alert,
		},
		{
			action: () => {
				navigation.navigate('SaveSketch');
				setIsPopUpModalOpen(false);
			},
			text: 'Salvar ',
			color: colors.tint,
		},
		{
			action: () => {
				setIsPopUpModalOpen(false);
			},
			text: 'Salvar como',
			color: colors.tint,
		},
	];

	return { sketchButtons };
};
