import { addDoc, collection } from 'firebase/firestore';
import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { db } from '../config/firebase';

export interface useAddDocProps {
	collectionName: string;
	doc: any;
}

export const useAddDoc = () => {
	const [error, setError] = useState<any>();
	const [loading, setLoading] = useState(true);

	const addNewDoc = async (props: useAddDocProps) => {
		const { collectionName, doc } = props;
		const collectionDb = collection(db, collectionName);
		try {
			await addDoc(collectionDb, doc);
			console.log('ok');
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};

	return { addNewDoc, error, loading };
};
