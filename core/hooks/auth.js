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
        setUser(getAuth(firebaseApp).currentUser)

        onAuthStateChanged(getAuth(firebaseApp), (currentUser) => {
            if (!currentUser) {
                setUser(null);

            } else {
                setUser(currentUser)
            }
        })

        onIdTokenChanged(getAuth(firebaseApp), async (currentUser) => {
            if (!currentUser) {
                nookies.set(undefined, 'LandVerifier.AuthUserTokens', '', { path: '/', sameSite: 'lax' });
            } else {
                const token = await currentUser.getIdToken();
                nookies.set(undefined, 'LandVerifier.AuthUserTokens', token, { path: '/', sameSite: 'lax' });
            }
        })

    })

    return <authContext.Provider value={{ app, user }} {...props} />;
}