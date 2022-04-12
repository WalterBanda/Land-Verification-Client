import { createUserWithEmailAndPassword } from "firebase/auth";
import { getApp } from "firebase/app";
import {firebaseAuth} from "../config/firebase.config";

class SignUp {
  constructor(firebaseApp) {
    this.auth = firebaseAuth;
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

export default new SignUp(getApp());
