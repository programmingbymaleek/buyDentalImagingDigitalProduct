import { createContext, useState } from 'react'

export const Usercontext = createContext({
  currentUser: null,
  setCurrentUser: function () {
    return null
  }
})

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const myvalue = { currentUser, setCurrentUser };
  return <Usercontext.Provider value={myvalue}>
    {children}
  </Usercontext.Provider>
}