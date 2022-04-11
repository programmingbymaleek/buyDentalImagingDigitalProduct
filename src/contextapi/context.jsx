import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangeListener } from '../dependences/firebase/firebase'

//creating a context to store actual user data.. 
export const Usercontext = createContext({
  currentUser: null,
  setCurrentUser: function () {
    return null
  }
})

// creating user provider to enable the app have access to currebt an also setting current user.. 
export const UserProvider = ({ children }) => {

  useEffect(() => {
    const listenningEvent = onAuthStateChangeListener((user) => {
      setCurrentUser(user)
    })
    return listenningEvent
  }, [])


  const [currentUser, setCurrentUser] = useState(null);
  const myvalue = { currentUser, setCurrentUser };
  return <Usercontext.Provider value={myvalue}>
    {children}
  </Usercontext.Provider>
}