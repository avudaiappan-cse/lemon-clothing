import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxV2JT_K6CRQvSwWD1tNgROuRdxK48iYQ",
  authDomain: "lemon-db.firebaseapp.com",
  projectId: "lemon-db",
  storageBucket: "lemon-db.appspot.com",
  messagingSenderId: "457474648121",
  appId: "1:457474648121:web:3ad4cc2df30c69ed6fc5e8",
  measurementId: "G-20LW0DDXQ1",
};

const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);

const google_provider = new GoogleAuthProvider();
google_provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, google_provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, google_provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionInformation,
      });
    } catch (error) {
      console.log("Error creating user!");
      console.log(error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
