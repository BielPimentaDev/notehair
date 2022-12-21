import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStackClients = {
	Search: undefined;
	ClientEdit: undefined;
	Client: {
		name: string;
		pic: any;
	};
};

export type propsStackClients =
	NativeStackNavigationProp<propsNavigationStackClients>;
