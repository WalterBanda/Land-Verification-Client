import {createContext, useContext, useState} from "react";
import LoginService from "../services/login";
import SignUpService from "../services/signUp";
import {useRouter} from "next/router";

const authContext = createContext();

export function useAuth() {
    return useContext(authContext);
}

export function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const router = useRouter();

    const loginWithGoogle = async () => {
        const {error, user} = await LoginService.loginWithGoogle();
        setUser(user ?? null);
        setError(error ?? "");
        if (user !== null || undefined) {
            console.log(user)
            await router.replace("/home")
        }
        console.log(error)
    };

    const loginWithGithub = async () => {
        const {error, user} = await LoginService.loginWithGithub();

        setUser(user ?? null);
        setError(error ?? "");

        if (user !== null || undefined) {
            await router.replace("/home")
        }

    };

    const signUpWithEmail = async (email, password) => {
        const {error, user} = await SignUpService.createWithEmail(
            email,
            password
        );
        setUser(user ?? null);
        setError(error ?? "");

        //    TODO User SignUp Continuation
    };

    const loginWithEmail = async (email, password) => {
        const {error, user} = await LoginService.loginWithEmail(email, password);
        setUser(user ?? null);
        setError(error ?? "");
    };

    const logout = async () => {
        await LoginService.logout();
        setUser(null);
    };
    const value = {
        user,
        error,
        loginWithGoogle,
        loginWithGithub,
        signUpWithEmail,
        loginWithEmail,
        logout,
        setUser,
    };

    return <authContext.Provider value={value} {...props} />;
}
