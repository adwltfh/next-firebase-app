import firebase_app from "../config";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebase_app);
export default async function userSignOut() {
    let result = null,
        error = null;
  
    try {
      result = await signOut(auth);
    } catch (error) {
      error = error;
    }
  
    return { result, error };
  }