import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
const addData = async (collection, id, data) => {
    let result = null, error = null;

    try {
        result = await setDoc(doc(db, collection, id), data, {
            merge: true,
        });
    } catch (error) {
        error = error;
    }

    return {result, error};
}

export default addData;