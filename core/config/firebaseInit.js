import {connectFirestoreEmulator, getFirestore} from "firebase/firestore";
import {getApp,getApps,initializeApp} from "firebase/app";
import {connectFunctionsEmulator, getFunctions} from "firebase/functions";
import {connectStorageEmulator, getStorage} from "firebase/storage";
import {app_prod_mode, firebaseConfig} from "./firebase.config";
import {getAuth} from "firebase/auth";
import {getAnalytics} from "firebase/analytics"


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
    // connectAuthEmulator(firebaseAuth, "http://localhost:9099");
    connectFirestoreEmulator(firestoreDB, "localhost", 8080);
    connectFunctionsEmulator(getFunctions(app), "localhost", 5001);
    connectStorageEmulator(storage, "localhost", 9199);
}


function initEmulators() {

    if (app_prod_mode) {
        connectFirestoreEmulator(getFirestore(getApp()), "localhost", 8080);
        connectFunctionsEmulator(getFunctions(getApp()), "localhost", 5001);
        connectStorageEmulator(getStorage(getApp()), "localhost", 9199);
    }
}

export {
    initEmulators,
    firebaseAuth,
    app,
    firestoreDB,
    storage,
}