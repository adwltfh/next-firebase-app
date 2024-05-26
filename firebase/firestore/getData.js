import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
const getDocument = async (collection, id, data) => {
    let docRef = doc(db, collection, id);
    let result = null, error = null;

    try {
        result = await getDoc(docRef);
    } catch (error) {
        error = e;
    }

    return {result, error};
}

export default getDocument;