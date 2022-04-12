import CustomButton from "../button.component/button.component"
import './cart_drop_down.styles.scss'

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      {/* <div className="cart-items">

    </div> */}
      <CustomButton buttonname={'check out'} label="CHECK OUT" />
    </div>)
}

export default CartDropDown; 