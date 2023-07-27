import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const loginWithGoogle = async() => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
};

export const registerWithEmailPassword = async({email, password, displayName}) => {
  try {

    const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password)

    await updateProfile(firebaseAuth.currentUser, {displayName})

    return {
      ok: true,
      displayName: resp.displayName,
      email: resp.email,
      photoURL: resp.photoURL,
      uid: resp.uid,
    };
    
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }
}

export const loginWithEmailPassword = async({email, password}) => {
  try {
    const resp = await signInWithEmailAndPassword(firebaseAuth, email, password)
    const { displayName, photoURL, uid } = resp.user;
    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    return {
      ok: false,
      error: error.message,
    };
  }

}

export const logoutFirebase = async() => {
  return await firebaseAuth.signOut();
}