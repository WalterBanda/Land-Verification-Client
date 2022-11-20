import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectStorageEmulator, getStorage } from "firebase/storage";
import { app_prod_mode, firebaseConfig } from "./firebase.config";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getAnalytics } from "firebase/analytics"


//? Manual Initialization
if (!getApps.length) {
    initializeApp(firebaseConfig);
    if (typeof window !== "undefined") {
        if ("measurementId" in firebaseConfig) {
            getAnalytics();
        }
    }
}

const app = getApp();
const firestoreDB = getFirestore(app);
const storage = getStorage(app);
const firebaseAuth = getAuth(app);

//? Init Emulators
if (app_prod_mode) {
    connectAuthEmulator(firebaseAuth, "http://localhost:9099");
    connectFirestoreEmulator(firestoreDB, "localhost", 8080);
    connectFunctionsEmulator(getFunctions(app), "localhost", 5001);
    connectStorageEmulator(storage, "localhost", 9199);
}


export {
    firebaseAuth,
    app,
    firestoreDB,
    storage,
}