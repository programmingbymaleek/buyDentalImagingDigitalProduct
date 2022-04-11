import SignIn from "../../routes/signIn.component/signin.componet";
import SignUp from "../../routes/signup.component/signup.component";
import './auth.styles.scss'

const AuthenticatingUser = () => {
  return (
    <div className="authentication">
      {<SignUp />}
      {<SignIn />}
    </div>
  )
}

export default AuthenticatingUser; 