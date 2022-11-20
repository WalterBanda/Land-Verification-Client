import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import toast from "react-hot-toast"

class AuthService {

    #googleProvider = new GoogleAuthProvider()
    #githubProvider = new GithubAuthProvider()

    googleLogin({ router }) {
        signInWithPopup(getAuth(), this.#googleProvider).then((credential) => {
            router.replace('/dashboard')
            toast.success(`${credential?.user?.displayName} Welcome to Land Verifier`)
        }).catch((error) => {
            toast.error(`Unable to login, ErrorCode: ${error?.code}`)
        })
    }
    githubLogin({ router }) {
        signInWithPopup(getAuth(), this.#githubProvider).then((credential) => {
            router.replace('/dashboard')
            toast.success(`${credential?.user?.displayName} Welcome to Land Verifier`)
        }).catch((error) => {
            toast.error(`Unable to login, ErrorCode: ${error?.code}`)
        })
    }

    createAccount({ email, password, router }) {
        createUserWithEmailAndPassword(getAuth(), email, password).then((credential) => {
            router.replace('/dashboard')
            toast.success(`${credential?.user?.displayName ?? ''} Welcome to Land Verifier`)
        }).catch((error) => {
            toast.error(`Unable to login, ErrorCode: ${error?.code}`)
        })
    }

    login({ email, password, router }) {
        signInWithEmailAndPassword(getAuth(), email, password).then((credential) => {
            router.replace('/dashboard')
            toast.success(`${credential?.user?.displayName ?? ''} Welcome to Land Verifier`)
        }).catch((error) => {
            toast.error(`Unable to login, ErrorCode: ${error?.code}`)
        })
    }
}

export default new AuthService()