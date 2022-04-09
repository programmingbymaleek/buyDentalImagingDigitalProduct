import InputFields from "../input.form.component/input.fields.component";
import { useState, useContext } from 'react';
import { SignInUserWithEmailAndPassword, signInwithGooglePopUp, createUserDocFromAuth } from "../../dependences/firebase/firebase";
import CustomButton from "../../components/button.component/button.component";
import '../signup.component/signup.styles.scss'
import { Usercontext } from "../../contextapi/context";

const loginWithGoogle = async () => {
  const responds = await signInwithGooglePopUp();
  const { user } = responds;
  console.log(user);
  const userDocRef = createUserDocFromAuth(user)
  console.log(userDocRef);
}


const SignIn = () => {
  const defaultFields = {
    email: '',
    password: '',
  }
  const [originalFields, setOriginalFields] = useState(defaultFields)
  const { email, password } = originalFields;
  const onFieldChange = (event) => {
    const fieldValues = event.target;
    const { name, value } = fieldValues;
    setOriginalFields({ ...originalFields, [name]: value })
  }

  const formOnSubmit = async (event) => {
    event.preventDefault();
    SignInUserWithEmailAndPassword(email, password)
  }

  return (<div className="sign-up-in-conatiner">
    <h2>Already a user?</h2>
    <span>Sign in with email and password</span>
    <form onSubmit={formOnSubmit}>
      <InputFields
        label='Email'
        name='email'
        value={email}
        type='email'
        onChange={onFieldChange} />
      <InputFields
        label='Password'
        name='password'
        value={password}
        type='password'
        onChange={onFieldChange} />
      <div className="custom-button-container">
        <CustomButton label='Sign In' type='submit' />
        <CustomButton label='Google SignIn' type='button'
          onClick={loginWithGoogle} buttonType='google' />
      </div>
    </form>
  </div>)

}
export default SignIn; 