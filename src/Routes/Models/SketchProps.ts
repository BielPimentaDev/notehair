import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';

export type propsNavigationStackSelectSketch = {
	Home: undefined;
	SelectSketch: undefined;
	SaveSketchFlow: NavigatorScreenParams<propsNavigationStackSketch>;
};
export type propsStackSelectSketch =
	NativeStackNavigationProp<propsNavigationStackSelectSketch>;

export type propsNavigationStackSketch = {
	Sketch: { pic: any };
	SaveSketch: undefined;
	SaveAs: undefined;
	SaveSketchFlow?: { pic: any };
};
export type propsStackSketch =
	NativeStackNavigationProp<propsNavigationStackSketch>;

export type propsNavigationStackSaveSketch = {
	Save: undefined;
	NewClient: undefined;
	SaveAs: undefined;
};
export type propsStackSaveSketch =
	NativeStackNavigationProp<propsNavigationStackSaveSketch>;
