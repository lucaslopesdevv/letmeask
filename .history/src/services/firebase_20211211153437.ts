import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_API_KEY,
    authDomain: process.env.react_app_auth_domain,
    databaseURL: "https://letmeask-198f2-default-rtdb.firebaseio.com",
    projectId: "letmeask-198f2",
    storageBucket: "letmeask-198f2.appspot.com",
    messagingSenderId: "975153486044",
    appId: "1:975153486044:web:6af7979df3ec3106733c19"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const database = firebase.database();