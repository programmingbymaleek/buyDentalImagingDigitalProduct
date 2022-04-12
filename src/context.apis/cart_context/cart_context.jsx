import { createContext, useState } from "react";

export const CartUserContext = createContext({
  isCartOpen: false,
  toggler: () => { }
})

export const CartUserProviderContext = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const toggler = () => {
    setIsCartOpen(!isCartOpen)
  }

  const value = { isCartOpen, setIsCartOpen, toggler }






  return (<CartUserContext.Provider value={value}>{children}</CartUserContext.Provider>)
}

