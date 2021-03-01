import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyA4cwOxPnC_dGQo7HAniWHTQk5vTUi58SY',
	authDomain: 'react-journal-app-abc91.firebaseapp.com',
	projectId: 'react-journal-app-abc91',
	storageBucket: 'react-journal-app-abc91.appspot.com',
	messagingSenderId: '1008449017896',
	appId: '1:1008449017896:web:af42bb6686bc5605a63d1d',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { db, googleAuthProvider, firebase }
