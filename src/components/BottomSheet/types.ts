export interface BottomSheetButtonInterface {
	text: string;
	icon: any;
	onPress: () => void;
}

export interface BottomSheetCompProps {
	buttons: BottomSheetButtonInterface[];
	bottomSheetRef: any;
	percentual: string;
	toggle: boolean;
	setIsToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
