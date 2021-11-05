import React from 'react'
import {connect} from 'react-redux';

import Layout from '../layout/Layout'

function Cart(props) {

  const {cartProducts} = props;
  console.log(cartProducts)
  return(
    <Layout>
      <div className="container-fluid container-min-max-width">
          {
            cartProducts.map((cartProduct) => {
              return(
                <div className="d-flex">
                  <p className="w-50">{ cartProduct.name }</p>
                  <p className="w-50">{ cartProduct.price}  { cartProduct.currency }</p>
                </div>
              )
            })
          }
      </div>
    </Layout>
  )
}

function mapStateToProps(state) {
  return {
    cartProducts: state.cart.products
  }
}

export default connect(mapStateToProps)(Cart);