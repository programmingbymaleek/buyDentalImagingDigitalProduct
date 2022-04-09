import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import { useContext } from 'react'
import { Usercontext } from "../../contextapi/context";
import './navigation.styles.scss';
import { SignOut } from "../../dependences/firebase/firebase";

const Navbar = () => {
  const { currentUser } = useContext(Usercontext)
  return (<Fragment>
    <div className="navigation">
      <Link className="logo" to='/buyDentalImagingDigitalProduct'> <h2>WilMatech Enterprise</h2></Link>
      <div className="nav-links-container">
        {currentUser ? (<Link className="nav-link" to='sign-in' onClick={SignOut}>SIGN-OUT</Link>) : (<Link className="nav-link" to='sign-in'>SIGN-IN</Link>)}
        <Link className="nav-link" to='about'>
          ABOUT
        </Link>
      </div>
    </div>
    <Outlet />
  </Fragment>)
}
export default Navbar