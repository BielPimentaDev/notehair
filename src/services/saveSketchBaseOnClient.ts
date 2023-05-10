import { db } from './../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

export const saveSketchBaseOnClient = async (clientId: string) => {
	const colRef = collection(db, 'sketchs');
	try {
		await addDoc(colRef, {
			teste: '123456',
			clientId: clientId,
		});
		console.log('saved');
	} catch (error) {
		console.log(error);
	}
};
