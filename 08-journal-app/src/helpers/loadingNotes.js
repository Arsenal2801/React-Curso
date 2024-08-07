import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../firebase/config";

export const loadingNotes = async (uid = "") => {
  if (!uid) throw new Error("UID not found");

  const collectionRef = collection(firebaseDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);

  const notes = [];

  docs.forEach((doc) => {
    notes.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return notes;
};
