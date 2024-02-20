import { collection, addDoc, deleteDoc, doc} from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function writeToDB(goal) {
    try {
        const docRef = await addDoc(collection(database, "goals"), goal);
        console.log("Document successfully written!");
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function deleteFromDB(id) {
    try {
        await deleteDoc(doc(database, "goals", id));
        console.log("Document successfully deleted!");
    } catch (e) {
        console.error("Error removing document: ", e);
    }
}
