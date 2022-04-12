import {getApps, getApp, initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth, connectAuthEmulator} from "firebase/auth";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore"
import {connectFunctionsEmulator, getFunctions} from "firebase/functions"
import {connectStorageEmulator, getStorage} from "firebase/storage"


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

if (!getApps.length) {
    initializeApp(firebaseConfig);
    if (typeof window !== "undefined") {
        if ("measurementId" in firebaseConfig) {
            getAnalytics();
        }
    }
}

const app_prod_mode = process.env.APP_RUNTIME_MODE === 'development';
const app = getApp();
const firestoreDB = getFirestore(app);
const storage = getStorage(app);
const firebaseAuth = getAuth(app);

if (app_prod_mode) {
    connectAuthEmulator(firebaseAuth, "http://localhost:9099");
    connectFirestoreEmulator(firestoreDB, "localhost", 8080)
    connectFunctionsEmulator(getFunctions(app), "localhost", 5001);
    connectStorageEmulator(storage, "localhost", 9199)
}

export {app_prod_mode,firebaseAuth,app,firestoreDB,storage}