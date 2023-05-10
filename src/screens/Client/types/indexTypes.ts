export interface ComponentsInterface {
	Sketchs: JSX.Element;
	Galeria: JSX.Element;
	Detalhes: JSX.Element;
}

export interface buttonsProps {
	name: keyof ComponentsInterface;
	icon: any;
}
