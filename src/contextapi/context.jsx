import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangeListener } from '../dependences/firebase/firebase'

export const Usercontext = createContext({
  currentUser: null,
  setCurrentUser: function () {
    return null
  }
})

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