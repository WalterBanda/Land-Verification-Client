import initAuth from "@core/config/firebaseInit";
import { getAuth, onAuthStateChanged, onIdTokenChanged } from "firebase/auth";
import { useEffect, useState, createContext, useContext } from "react";
import nookies from 'nookies';

const authContext = createContext();

export function useAuth() {
    return useContext(authContext);
}

export function AuthProvider(props) {

    const [app, setApp] = useState()
    const [user, setUser] = useState()

    useEffect(() => {

        const firebaseApp = initAuth()
        setApp(firebaseApp)

        onAuthStateChanged(getAuth(firebaseApp), (currentUser) => {
            if (!user) {
                setUser(null);

            } else {
                setUser(currentUser)
            }
        })

        onIdTokenChanged(getAuth(firebaseApp), async (user) => {
            if (!user) {
                nookies.set(undefined, 'LandVerifier.AuthUserTokens', '', { path: '/', });
            } else {
                const token = await user.getIdToken();
                nookies.set(undefined, 'LandVerifier.AuthUserTokens', token, { path: '/' });
            }
        })

    })

    return <authContext.Provider value={{ app, user }} {...props} />;
}