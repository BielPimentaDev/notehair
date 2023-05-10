import { db } from '../../../config/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useAuth } from '../../../hook/useAuth';

export interface INewClient {
	name: string;
	number: string;
	birthday: string;
	birthdayMonth: string;
	returningDate: string;
	returningFrequence: string;
	instagram: string;
}

export const useCreateClient = (
	birthdayMonth: string,
	returningFrequence: string
) => {
	const [clientForm, setClientForm] = useState<INewClient>({
		name: '',
		number: '',
		birthday: '',
		birthdayMonth: '',
		returningDate: '',
		returningFrequence: '',
		instagram: '',
	});
	const { user } = useAuth();

	const createNewClient = async () => {
		const sketchsDb = collection(db, 'clients');
		console.log({
			...clientForm,
			birthdayMonth: birthdayMonth,
			returningFrequence: returningFrequence,
		});
		try {
			addDoc(sketchsDb, {
				...clientForm,
				userUid: user?.uid,
				returningFrequence: returningFrequence,
				birthdayMonth: birthdayMonth,
			});
		} catch (err) {
			console.log(err);
		}

		setClientForm({
			name: '',
			number: '',
			birthday: '',
			birthdayMonth: '',
			returningDate: '',
			returningFrequence: '',
			instagram: '',
		});
	};

	return { clientForm, createNewClient, setClientForm };
};
