import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

class AuthService {

    #googleProvider = new GoogleAuthProvider()
    #githubProvider = new GithubAuthProvider()

    googleLogin({ router }) {
        signInWithPopup(getAuth(), this.#googleProvider).then(() => {
            router.replace('/dashboard')
        }).catch(() => { })
    }
    githubLogin({ router }) {
        signInWithPopup(getAuth(), this.#githubProvider).then(() => {
            router.replace('/dashboard')
        }).catch(() => { })
    }

    createAccount({ email, password, router }) {
        createUserWithEmailAndPassword(getAuth(), email, password).then(() => {
            router.replace('/dashboard')
        }).catch(() => { })
    }

    login({ email, password, router }) {
        signInWithEmailAndPassword(getAuth(), email, password).then(() => {
            router.replace('/dashboard')
        }).catch(() => { })
    }
}

export default new AuthService()