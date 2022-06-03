import { ReactComponent as ShoppingIcon } from "../../assets/shopping_icon.svg";
import './cart.icon.styles.scss';
import { useContext } from 'react'
import { CartUserContext } from "../../context.apis/cart_context/cart_context";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CartIcon = () => {
  const { toggler, cartCount } = useContext(CartUserContext)

  return (<div className="cart-icon-container">
    <FontAwesomeIcon className="shopping-icon" icon={faCartShopping} onClick={toggler} style={{ color: 'white' }} />
    {/* <ShoppingIcon className="shopping-icon" onClick={toggler} /> */}
    <span className="item-count">{cartCount}</span>
  </div>)

}

export default CartIcon