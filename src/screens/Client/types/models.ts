export interface ClientInterface {
	data: {
		clientId: string;
		sketchUrl?: string;
		imageUri?: string;
	};
}

export interface IClient {
	name: string;
	birthday: string;
	number: string;
	returningDate: string;
	birthdayMonth: string;
	returningFrequence: string;
	clientUid: string;
	instagram: string;
}
