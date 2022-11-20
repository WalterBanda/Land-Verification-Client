import { init } from "next-firebase-auth";
import {
    app_prod_mode,
    firebase_admin_config,
    firebaseConfig,
} from "./firebase.config";

const initAuth = () => {
    init({
        debug: app_prod_mode,

        authPageURL: "/auth",
        appPageURL: "/dashboard",
        loginAPIEndpoint: "/api/auth/login", // required
        logoutAPIEndpoint: "/api/auth/logout", // required

        firebaseAdminInitConfig: {
            credential: firebase_admin_config,
        },

        firebaseClientInitConfig: firebaseConfig,
        firebaseAuthEmulatorHost: process.env.FIREBASE_AUTH_EMULATOR_HOST,

        cookies: {
            name: "LandVerifier", // required
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS,
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: "/",
            sameSite: "lax",
            secure: process.env.NEXT_PUBLIC_COOKIE_SECURE, // set this to false in local (non-HTTPS) development
            signed: true,
        },
    });
};

export default initAuth;
