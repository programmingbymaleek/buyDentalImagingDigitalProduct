import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import './navigation.styles.scss';
const Navbar = () => {
  return (<Fragment>
    <div className="navigation">
      <Link className="logo" to='/buyDentalImagingDigitalProduct'> <h2>WilMatech Enterprise</h2></Link>
      <div className="nav-links-container">
        <Link className="nav-link" to='sign-in'>SIGN-IN</Link>
        <Link className="nav-link" to='about'>
          ABOUT
        </Link>
      </div>
    </div>
    <Outlet />
  </Fragment>)
}
export default Navbar