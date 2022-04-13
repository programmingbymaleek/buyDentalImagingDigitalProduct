import CustomButton from "../button.component/button.component"
import CartItems from "../cart_items/cart_items.component"
import { useContext } from "react"
import { CartUserContext } from "../../context.apis/cart_context/cart_context"
import './cart_drop_down.styles.scss'


const CartDropDown = () => {
  const { cartItems } = useContext(CartUserContext)
  console.log(cartItems)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return (<CartItems key={item.id} catItems={item} />)
        })}
      </div>

      <CustomButton buttonname={'check out'} label="CHECK OUT" />
    </div>)
}

export default CartDropDown; 