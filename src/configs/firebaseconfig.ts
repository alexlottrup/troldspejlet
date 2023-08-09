import { initializeApp } from 'firebase/app'

export const firebaseConfig = {
	apiKey: 'AIzaSyCuVlRWYCMtCWnkW_3pLDNBJx08drSEZFI',
	authDomain: 'troldspejlet-e2b95.firebaseapp.com',
	databaseURL:
		'https://troldspejlet-e2b95-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'troldspejlet-e2b95',
	storageBucket: 'troldspejlet-e2b95.appspot.com',
	messagingSenderId: '387971965812',
	appId: '1:387971965812:web:20d789ba88958db0d88221'
}

export const app = initializeApp(firebaseConfig)
