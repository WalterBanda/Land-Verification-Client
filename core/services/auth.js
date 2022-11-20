import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, getAuth } from "firebase/auth"

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
}

export default new AuthService()