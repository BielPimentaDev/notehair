import { useEffect, useState } from 'react';
import { db } from './../config/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export const showClients = () => {
	const [clients, setClients] = useState([]);
	useEffect(() => {
		const clientsCollection = collection(db, 'clients');
		onSnapshot(clientsCollection, (snapshot) => {
			let clientsList: any = [];
			snapshot.docs.map((doc) => {
				clientsList.push({ ...doc.data(), id: doc.id });
			});
			setClients(clientsList);
		});
	}, []);

	return { clients };
};
