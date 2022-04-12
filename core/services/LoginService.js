import { getApp } from "firebase/app";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

class LoginService {
  constructor(firebaseApp) {
    this.auth = getAuth(firebaseApp);
  }

  loginWithEmail(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then((userCred) => {
        return {
          user: userCred.user,
        };
      })
      .catch((error) => {
        return {
          error: error.message,
        };
      });
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((userCred) => {
        return {
          user: userCred.user,
        };
      })
      .catch((error) => {
        return {
          error: error.message,
        };
      });
  }

  loginWithGithub() {
    return signInWithPopup(this.auth, new GithubAuthProvider())
      .then((userCred) => {
        return { user: userCred.user };
      })
      .catch((error) => {
        return {
          error: error.message,
        };
      });
  }

  async logout() {
    await signOut(this.auth);
  }
}

export default new LoginService(getApp());
