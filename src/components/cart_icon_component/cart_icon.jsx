import { ReactComponent as ShoppingIcon } from "../../assets/shopping_icon.svg";
import './cart.icon.styles.scss';
import { useContext } from 'react'
import { CartUserContext } from "../../context.apis/cart_context/cart_context";


const CartIcon = () => {
  const { toggler } = useContext(CartUserContext)

  return (<div className="cart-icon-container">
    <ShoppingIcon className="shopping-icon" onClick={toggler} />
    <span className="item-count">0</span>
  </div>)

}

export default CartIcon