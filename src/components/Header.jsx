import { Link } from "react-router-dom";
import { connect } from 'react-redux'

import Logo from './../assets/images/logo.png'
import { ReactComponent as ShoppingCart } from './../assets/icons/shopping-cart.svg'

import './Header.css'

function Header(props) {
  const { signOut, user, productsNumberCart } = props;
  console.log(productsNumberCart)
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Link to="/">
        <img src={Logo} className="eshop-logo" alt="logo"/>
      </Link>
      <div>
  
        {
          user 
            ? <>
                <p>{user.displayName}</p>
                <button onClick={signOut} className="btn btn-outline-primary">Sign out</button>
              </>
            : <Link to="/login">
                <button type="button" className="btn btn-outline-primary">Login</button>
              </Link>
        }

        <Link to='/cart'>
          <ShoppingCart className="ml-2"/>{ productsNumberCart }
        </Link>
      </div>
      
    </div>
  )
}

function mapStateToProps(state) {
  return {
    productsNumberCart: state.products.length
  }
}

export default connect(mapStateToProps)(Header);