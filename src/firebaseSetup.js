// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

    projectId: 'acmpesuecc-website',

    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

    appId: process.env.REACT_APP_FIREBASE_APP_ID,

    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
