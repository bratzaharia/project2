import React from 'react';

import { addToCart } from '../redux/actions/cart'
import { connect } from 'react-redux'

function ProductItem(props) {
  const { id, name, price, currency, image, addToCartInj } = props.product;
  console.log(props)
  return (
    <div className="col-xs-6 col-sm-4">

      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price} {currency}</p>
          <a href="#" 
            className="btn btn-outline-dark"
            onClick={() => {
                props.addToCartInj({
                  product: {
                    name, price, currency, image
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
