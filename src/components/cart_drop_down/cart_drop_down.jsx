import CustomButton from "../button.component/button.component"
import CartItems from "../cart_items/cart_items.component"
import React, { useContext } from "react"
import { CartUserContext } from "../../context.apis/cart_context/cart_context"
import './cart_drop_down.styles.scss'
import { Link } from "react-router-dom"


export const CartDropDown = () => {
  const { cartItems } = useContext(CartUserContext)
  console.log(cartItems)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ? cartItems.map((item) => {
          return (<CartItems key={item.id} catItems={item} />)
        }) : (<div>
          <div>No item in your cart</div>
        </div>)}
      </div>
      <Link to="check-out">
        <CustomButton buttonname={'check out'} label="CHECK OUT" />
      </Link>
    </div>)
}

export const MemoizedDropDown = React.memo(CartDropDown); 