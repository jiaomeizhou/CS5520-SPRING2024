import { collection, addDoc, deleteDoc, doc, getDocs} from "firebase/firestore";
import { database } from "./firebaseSetup";
import { auth } from "./firebaseSetup";

export async function writeToDB(goal, col, docId, subCol) {
    try {
        if (docId) {
            await addDoc(collection(database, col, docId, subCol), goal);
        }
        else {
            if (col === "goals") {
                goal = {...goal, owner: auth.currentUser.uid};
                await addDoc(collection(database, col), goal);
            }
        }
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

export async function getAllDocs(path) {
    try {
        const querySnapshot = await getDocs(collection(database, path));
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
        return data;
    } catch (e) {
        console.error("Error getting documents: ", e);
    }

}
