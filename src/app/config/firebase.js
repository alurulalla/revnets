import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDBX1_1YVpDzH54xTOhnKUHol9Y8RPSTho',
  authDomain: 'revents-81caf.firebaseapp.com',
  databaseURL: 'https://revents-81caf.firebaseio.com',
  projectId: 'revents-81caf',
  storageBucket: 'revents-81caf.appspot.com',
  messagingSenderId: '564199910234',
  appId: '1:564199910234:web:7e0b800c1e28cea4c36163',
  measurementId: 'G-HZ8NHZGSJB',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
