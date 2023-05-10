import { Picker } from '@react-native-picker/picker';
import { useRef, useState } from 'react';

interface SelectDropdownProps {
	dataArray: SelectData[];
}

interface SelectData {
	label: string;
	value: string;
}

export const SelectDropdown = (props: SelectDropdownProps) => {
	const [selectedLanguage, setSelectedLanguage] = useState();
	const { dataArray } = props;

	return (
		<Picker
			selectedValue={selectedLanguage}
			onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
			{dataArray.map((data) => {
				return <Picker.Item label={data.label} value={data.value} />;
			})}
		</Picker>
	);
};
