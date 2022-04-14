
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