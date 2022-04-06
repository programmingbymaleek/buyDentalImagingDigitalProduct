import InputFields from "../input.form.component/input.fields.component";
import { useState } from 'react';
import { SignInUserWithEmailAndPassword } from "../../dependences/firebase/firebase";
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

  return (<div>
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
      <button type='submit'>Submit</button>
    </form>
  </div>)

}
export default SignIn; 