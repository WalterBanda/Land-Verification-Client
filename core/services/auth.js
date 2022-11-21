import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
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

            if (!credential.user.photoURL) {
                updateProfile(credential.user, { photoURL: `https://avatars.dicebear.com/api/big-smile/${credential.user.uid}.svg`, displayName: email.split(/^([\w-\.]+)@([\w-]+\.)+[\w-]{2,4}$/)[1] }).then(() => {
                    router.replace('/dashboard')
                    toast.success(`${credential.user?.displayName} Welcome to Land Verifier`)
                })
            } else {
                router.replace('/dashboard')
                toast.success(`Welcome to Land Verifier`)
            }
        }).catch((error) => {
            toast.error(`Unable to login, ErrorCode: ${error?.code}`)
        })
    }

    login({ email, password, router }) {
        signInWithEmailAndPassword(getAuth(), email, password).then((credential) => {
            if (!credential.user.photoURL && !credential.user.displayName) {
                updateProfile(credential.user, { photoURL: `https://avatars.dicebear.com/api/big-smile/${credential.user.uid}.svg`, displayName: email.split(/^([\w-\.]+)@([\w-]+\.)+[\w-]{2,4}$/)[1] }).then(() => {
                    router.replace('/dashboard')
                    toast.success(`${credential.user?.displayName} Welcome to Land Verifier`)
                })
            } else {
                router.replace('/dashboard')
                toast.success(`Welcome to Land Verifier`)
            }
        }).catch((error) => {
            toast.error(`Unable to login, ErrorCode: ${error?.code}`)
        })
    }
}

export default new AuthService()