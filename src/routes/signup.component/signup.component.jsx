import InputFields from "../input.form.component/input.fields.component";
import { useState } from 'react';
import { createNewUserWithEmailAndPassword } from "../../dependences/firebase/firebase";
import { createUserDocFromAuth } from "../../dependences/firebase/firebase";
const SignUp = () => {
  const defaultFields = {
    displayname: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const [originalFields, setOriginalFields] = useState(defaultFields)

  const { displayname, email, password, confirmPassword } = originalFields;
  const onFieldChange = (event) => {
    const fieldValues = event.target;
    const { name, value } = fieldValues;
    setOriginalFields({ ...originalFields, [name]: value })


  }
  const formOnSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Password Missmatch');
      return;
    }
    try {
      const responds = await createNewUserWithEmailAndPassword(email, password);
      const { user } = responds
      user.displayName = displayname.toLocaleUpperCase();
      createUserDocFromAuth(user)
      clearFields();
    }
    catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use..')
        return;
      }
      alert('There was an error creating user', error.message)

    }
  }
  const clearFields = () => {
    setOriginalFields(defaultFields)
  }



  return (<div>
    <h2>Don't have an account?</h2>
    <span>Sign up with email and password</span>
    <form onSubmit={formOnSubmit}>
      <InputFields
        label='Display Name'
        name='displayname'
        value={displayname}
        type='text'
        onChange={onFieldChange} />
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
      <InputFields
        label='Confirm Password'
        name='confirmPassword'
        value={confirmPassword}
        type='password'
        onChange={onFieldChange} />
      <button type='submit'>Submit</button>
    </form>
  </div>)
}
export default SignUp; 