import firebase from 'firebase/app';

import 'firebase/compat/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBoh5EZE6Kcj-SxpyZwcIi6-mbrwfVO_xs",
    authDomain: "letmeask-198f2.firebaseapp.com",
    databaseURL: "https://letmeask-198f2-default-rtdb.firebaseio.com",
    projectId: "letmeask-198f2",
    storageBucket: "letmeask-198f2.appspot.com",
    messagingSenderId: "975153486044",
    appId: "1:975153486044:web:6af7979df3ec3106733c19"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const database = firebase.database();