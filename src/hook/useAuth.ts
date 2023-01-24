import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import app from '../config/firebase';

const auth = getAuth(app);

export function useAuth() {
	const [user, setUser] = useState<User>();

	useEffect(() => {
		const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(undefined);
			}
		});

		return unsubscribeFromAuthStateChanged;
	}, []);

	return { user };
}
