import { async } from "@firebase/util";
import { auth, signInwithGooglePopUp, createUserDocFromAuth } from "../../dependences/firebase/firebase";
import SignIn from "../../routes/signIn.component/signin.componet";
import SignUp from "../../routes/signup.component/signup.component";

const AuthenticatingUser = () => {
  const loginWithGoogle = async () => {
    const responds = await signInwithGooglePopUp();
    const { user } = responds;
    console.log(user);
    const userDocRef = createUserDocFromAuth(user)
    console.log(userDocRef);
  }
  return (<div>
    <div>
      {<SignUp />}
      {<SignIn />}
    </div>
    <button onClick={loginWithGoogle}>Sign in with Google</button>
  </div>)
}

export default AuthenticatingUser; 