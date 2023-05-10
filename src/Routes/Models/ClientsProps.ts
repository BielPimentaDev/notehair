import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStackClients = {
	Search: undefined;
	EditClient: undefined;
	TakePicture: undefined;
	Client: {
		name: string;
		pic: any;
		clientUid: string;
		clientInfo?: Object;
	};
	NewClient: undefined;
};

export type propsStackClients =
	NativeStackNavigationProp<propsNavigationStackClients>;
