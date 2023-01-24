// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAa8MEysQX6Q8ImZZBlgTnLIyaRv2tjeV0',
	authDomain: 'notehair-85d31.firebaseapp.com',
	projectId: 'notehair-85d31',
	storageBucket: 'notehair-85d31.appspot.com',
	messagingSenderId: '762228915817',
	appId: '1:762228915817:web:6af5a979fba0c2c8726cf8',
	measurementId: 'G-RMCEL6F125',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export default app;
