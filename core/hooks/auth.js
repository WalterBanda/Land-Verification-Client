import { createContext, useContext, useState } from "react";
import LoginService from "../services/LoginService";
import SignUpService from "../services/SignUpService";

const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const loginWithGoogle = async () => {
    const { error, user } = await LoginService.loginWithGoogle();
    setUser(user ?? null);
    setError(error ?? "");
  };

  const signUpWithEmail = async (email, password) => {
    const { error, user } = await SignUpService.createWithEmail(
      email,
      password
    );
    setUser(user ?? null);
    setError(error ?? "");

    //    TODO User SignUp Continuation
  };

  const loginWithEmail = async (email, password) => {
    const { error, user } = await LoginService.loginWithEmail(email, password);
    setUser(user ?? null);
    setError(error ?? "");
  };

  const loginWithGithub = async () => {
    const { error, user } = await LoginService.loginWithGithub();

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
