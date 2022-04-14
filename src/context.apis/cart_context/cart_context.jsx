import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, addedMedicalProduct) => {

  //check to see if item is already in cart..
  const existingCartItem = cartItems.find((cartitem) => {
    return cartitem.id === addedMedicalProduct.id
  })
  //if already exist, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return (cartItem.id === addedMedicalProduct.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    })
  }

  //else.. Just add item to cart 
  return [...cartItems, { ...addedMedicalProduct, quantity: 1 }]
}



const removeCartItem = (cartItems, removedMedicalProduct) => {

  //check to see if item is already in cart..
  const existingCartItem = cartItems.find((cartitem) => {
    return cartitem.id === removedMedicalProduct.id
  })
  //if already exist, increment quantity
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => {
      console.log(`${cartItem.quantity}   =====   ${removedMedicalProduct.quantity}`)
      return (cartItem.id !== removedMedicalProduct.id)
    })
  }
  //else.. Just add item to cart

  return cartItems.map((cartItem) => {
    return (cartItem.id === removedMedicalProduct.id ?
      { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
  });

}






export const CartUserContext = createContext({
  isCartOpen: false,
  toggler: () => { },
  cartItems: [],
  addItemTocart: () => { },
  removeItemFromCart: () => { },
  cartCount: 0
})

export const CartUserProviderContext = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setcartCount] = useState(0);
  const toggler = () => {
    setIsCartOpen(!isCartOpen)
  }

  const addItemTocart = (addedMedicalProduct) => {
    setCartItems(addCartItem(cartItems, addedMedicalProduct))
  }

  const removeItemFromCart = (removedMedicalProduct) => {
    setCartItems(removeCartItem(cartItems, removedMedicalProduct))
  }



  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity, 0
    );
    setcartCount(newCartCount)
  }, [cartItems])

  const value = { isCartOpen, setIsCartOpen, toggler, addItemTocart, cartItems, cartCount, removeItemFromCart }

  return (<CartUserContext.Provider value={value}>{children}</CartUserContext.Provider>)
}

