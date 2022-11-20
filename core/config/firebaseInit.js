import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectStorageEmulator, getStorage } from "firebase/storage";
import { app_prod_mode, firebaseConfig } from "./firebase.config";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getAnalytics } from "firebase/analytics"

export default function initAuth() {
    let app;
    if (typeof window !== "undefined") {
        //? Manual Initialization
        if (!getApps.length) {
            app = initializeApp(firebaseConfig);
            if ("measurementId" in firebaseConfig) {
                getAnalytics();
            }


            //? Init Emulators
            if (app_prod_mode) {
                connectAuthEmulator(getAuth(app), "http://localhost:9099");
                connectFirestoreEmulator(getFirestore(app), "localhost", 8080);
                connectFunctionsEmulator(getFunctions(app), "localhost", 5001);
                connectStorageEmulator(getStorage(app), "localhost", 9199);
            }
        }
    }

    return app ?? getApp()
}