import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'YOUR_APIKEY',
  authDomain: 'YOUR_AUTHDOMAIN',
  databaseURL: 'YOUR_DATABASEURL',
  projectId: 'YOUR_PROJECTID',
  storageBucket: 'YOUR_STORAGEBUCKET',
  messagingSenderId: 'YOUR_MESSAGINGSENDERID',
  appId: 'YOUR_APPID',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
