import React from 'react';
import { Link } from 'react-router-dom'

import { addToCart } from '../redux/actions/cart'
import { connect } from 'react-redux'

function ProductItem(props) {
  const { id, name, price, currency, image } = props.product;
  // console.log(props)
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 border p-3">

      <div className="card">
        <Link to={ `/product/${id}` }>
          <img src={image} className="card-img-top" alt="..." />
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{price} {currency}</p>
        
        </Link>
        <div className="card-body">
          <a href="#" 
            className="btn btn-outline-dark"
            onClick={() => {
                props.addToCartInj({
                  product: {
                    id, name, price, currency, image
                  }
                })
              }
          }>Add to cart</a>
        </div>

      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    // injectam un prop:
    addToCartInj: (payload) => dispatch(addToCart(payload))
  }
}

export default connect(null, mapDispatchToProps)(ProductItem);
