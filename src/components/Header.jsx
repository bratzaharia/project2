import { Link } from "react-router-dom";
import Logo from './../assets/images/logo.png'
import { ReactComponent as ShoppingCart } from './../assets/icons/shopping-cart.svg'

import './Header.css'

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Link to="/">
        <img src={Logo} className="eshop-logo" alt="logo"/>
      </Link>
      <div>
        <Link to="/login">
          <button type="button" className="btn btn-outline-primary">Login</button>
        </Link>
        <Link to='/shoppingcart'>
          <ShoppingCart/>
        </Link>
      </div>
    </div>
  )
}

export default Header;