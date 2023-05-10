import { useFocusEffect } from '@react-navigation/native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState, useCallback } from 'react';
import { db } from '../config/firebase';
import { useAuth } from '../hook/useAuth';

interface getProps {
	databaseCollection: string;
	databaseKey: string;
	equalTo: string | undefined;
}

export const getWhere = (props: getProps) => {
	const { databaseCollection, databaseKey, equalTo } = props;
	const { user } = useAuth();
	const [returningList, setReturningList] = useState([]);
	const [errors, setErrors] = useState('');
	const [loading, setLoading] = useState(false);

	useFocusEffect(
		useCallback(() => {
			setLoading(true);
			const getData = async () => {
				const q = query(
					collection(db, databaseCollection),
					where(databaseKey, '==', equalTo)
				);
				try {
					let temporaryReturningList: any = [];
					const querySnapshot = await getDocs(q);
					querySnapshot.forEach((doc) => {
						temporaryReturningList.push({ data: doc.data(), id: doc.id });
					});
					setReturningList(temporaryReturningList);
				} catch (err) {
					console.log(err);
					setErrors('err');
				}

				setLoading(false);
			};
			user && getData();
		}, [user])
	);
	return { returningList, loading, errors };
};
