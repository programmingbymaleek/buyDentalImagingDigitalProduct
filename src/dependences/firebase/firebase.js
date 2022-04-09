// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import { Usercontext } from "../../contextapi/context";
import { useContext } from 'react'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLVc3ZMuZPU9JkLDrF2xvYxp4zrjO7QzA",
  authDomain: "buydentalpro.firebaseapp.com",
  projectId: "buydentalpro",
  storageBucket: "buydentalpro.appspot.com",
  messagingSenderId: "863481167325",
  appId: "1:863481167325:web:9d681333aba898b2d94a34"
};
//setting up out provider and its custom parameters.
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
})
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//allowing users to Sign in with google popup
export const signInwithGooglePopUp = () => {
  return signInWithPopup(auth, googleProvider)
}


//creating an account with email and password..
export const createNewUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    alert('Missing Fields Found')
    return;
  }
  const responds = await createUserWithEmailAndPassword(auth, email, password)
  return responds;
}

//signing with Email and password..
export const SignInUserWithEmailAndPassword = async (email, password) => {
  const { setCurrentUser } = useContext(Usercontext)
  if (!email || !password) {
    alert('Missing Credentials')
    return;
  }
  try {
    const responds = await signInWithEmailAndPassword(auth, email, password)
    setCurrentUser(responds)
  } catch (error) {
    if (error.code === 'auth/wrong-password') {
      alert('Wrong Credentials')
      return;
    }
    console.log(error)

  }

}


//creating records in datatbase..
export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth) => {
  const userDocumentRef = doc(db, 'users', userAuth.uid)
  console.log(userDocumentRef);

  //creating a snapshot to see if user already exist in db..
  const userSnapShot = await getDoc(userDocumentRef);
  console.log(userSnapShot);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      const settingDocument = await setDoc(userDocumentRef, { displayName, email, createdAt })
      console.log(displayName, email, createdAt)
    } catch (error) {
      alert('Error creating user', error.message)
    }
  }
  return userDocumentRef;
}

export const SignOut = async () => {
  await signOut(auth);
}

export const onAuthStateChangeListener = (callBackFunc) => {
  return onAuthStateChanged(auth, callBackFunc)
}






