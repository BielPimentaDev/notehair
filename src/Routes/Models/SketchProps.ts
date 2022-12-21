import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStackSketch = {
	Home: undefined;
	Sketch: { pic: any };
	SaveSketchFlow?: { pic: any };
	SelectSketch: undefined;
};

export type propsStackSketch =
	NativeStackNavigationProp<propsNavigationStackSketch>;

export type propsNavigationStackSaveSketch = {
	Save: undefined;
	NewClient: undefined;
	SaveAs: undefined;
};

export type propsStackSaveSketch =
	NativeStackNavigationProp<propsNavigationStackSketch>;
