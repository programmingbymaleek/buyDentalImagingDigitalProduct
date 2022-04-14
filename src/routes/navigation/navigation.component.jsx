import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import { useContext } from 'react'
import { Usercontext } from "../../contextapi/context";
import './navigation.styles.scss';
import { SignOut } from "../../dependences/firebase/firebase";
import CartIcon from "../../components/cart_icon_component/cart_icon";
import { CartUserContext } from "../../context.apis/cart_context/cart_context";
import { MemoizedDropDown } from "../../components/cart_drop_down/cart_drop_down";


const Navbar = () => {
  const { isCartOpen } = useContext(CartUserContext)
  const { currentUser } = useContext(Usercontext)
  if (currentUser) {
    console.log(currentUser.uid)
  }
  return (<Fragment>
    <div className="navigation">
      <Link className="logo" to='/buyDentalImagingDigitalProduct'> <h2>WilMatech Enterprise</h2></Link>
      <div className="nav-links-container">
        <Link className="nav-link" to='shop'>
          SHOP
        </Link>
        {currentUser ? (<Link className="nav-link" to='sign-in' onClick={SignOut}>SIGN-OUT</Link>) : (<Link className="nav-link" to='sign-in'>SIGN-IN</Link>)}
        <CartIcon />
      </div>
      {isCartOpen && (<MemoizedDropDown />)}
    </div>
    <Outlet />
  </Fragment>)
}
export default Navbar