import firebase_app from "../config";
import {
  signInWithEmailAndPassword,
  getAuth,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email, password, remember) {
  let result = null,
    error = null;

  try {
    const persistence = remember
      ? browserLocalPersistence
      : browserSessionPersistence;
    console.log(remember);
    await setPersistence(auth, persistence);
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    error = error;
  }

  return { result, error };
}
