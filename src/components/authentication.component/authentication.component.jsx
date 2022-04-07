import SignIn from "../../routes/signIn.component/signin.componet";
import SignUp from "../../routes/signup.component/signup.component";
import './auth.styles.scss'

const AuthenticatingUser = () => {
  // const loginWithGoogle = async () => {
  //   const responds = await signInwithGooglePopUp();
  //   const { user } = responds;
  //   console.log(user);
  //   const userDocRef = createUserDocFromAuth(user)
  //   console.log(userDocRef);
  // }
  return (
    <div className="authentication">
      {<SignUp />}
      {<SignIn />}
    </div>
  )
}

export default AuthenticatingUser; 