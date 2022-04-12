import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getApp } from "firebase/app";

class SignUpService {
  constructor(firebaseApp) {
    this.auth = getAuth(firebaseApp);
  }

  createWithEmail(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password)
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
}

export default new SignUpService(getApp());
