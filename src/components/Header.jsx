import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { logoutUser } from '../redux/actions/user'

import Logo from './../assets/images/logo.png'
import { ReactComponent as ShoppingCart } from './../assets/icons/shopping-cart.svg'

import './Header.css';


function Header(props) {
  const { productsNumberCart, user, logout } = props;
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
                <button onClick={logout} className="btn btn-outline-primary">Sign out</button>
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
    productsNumberCart: state.cart.products.length,
    user: state.user.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logoutUser())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);