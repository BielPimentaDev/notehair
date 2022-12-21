export interface SketchHeaderProps {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isOpen: boolean;
	buttons: PopUpButtonsInterface[];
}

export interface PopUpButtonsInterface {
	text: string;
	action: () => void;
	color: string;
}

export interface PopUpMenuProps {
	buttons: PopUpButtonsInterface[];
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	isOpen: boolean;
}
