import { async } from "@firebase/util";
import { auth, signInwithGooglePopUp, createUserDocFromAuth } from "../../dependences/firebase/firebase"
const SignIn = () => {
  const loginWithGoogle = async () => {
    const responds = await signInwithGooglePopUp();
    const { user } = responds;
    console.log(user);
    const userDocRef = createUserDocFromAuth(user)
    console.log(userDocRef);
  }
  return (<div>
    <button onClick={loginWithGoogle}>Sign in with Google</button>
  </div>)
}

export default SignIn; 