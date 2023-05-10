import AsyncStorage from '@react-native-async-storage/async-storage';

export const storageAsync = async () => {
	const datas = { client: 'luke', id: 123 };
	try {
		const strDatas = JSON.stringify(datas);
		await AsyncStorage.setItem('@notehair:clients', strDatas);
	} catch (error) {
		console.log(error);
	}
};

export const readingStorage = async () => {
	try {
		const value = await AsyncStorage.getItem('@notehair:clients');
		value && console.log(value);
	} catch (err) {
		console.log(err);
	}
};
