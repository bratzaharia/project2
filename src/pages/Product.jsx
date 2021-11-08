import React from 'react'
import { connect } from 'react-redux'

import Layout from '../layout/Layout'
import products from '../utils/products.json';
import { addToCart } from '../redux/actions/cart'


class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      product: {}
    }
  }

  componentDidMount() {
    const productIdUrl = this.props.match.params.productId;
    console.log(productIdUrl)

    const categoryValues = Object.values(products);

    console.log(categoryValues);

    let currentProduct;

    categoryValues.forEach((category) => {
      const findResult = category.items.find((item) => {
        // console.log(productIdUrl, item.id)
        return Number(productIdUrl) === item.id;
      })

      if (findResult !== undefined) {
        currentProduct = findResult;
      }
    })

    this.setState({product: currentProduct});
    
  }

  render() {
    console.log(this.state.product);

    const {id, name, price, brand, image, description, currency} = this.state.product
    const { addToCartInj } = this.props
    return (
      <Layout>
      <div className="container-fluid container-min-max-width">
        <h1> {name} </h1>
        <h2>{brand}</h2>
        <h3>{price} / {currency}</h3>
        <img className="img-fluid" src={image} alt=""/>
        <p>{ description }</p>
        <button className="btn btn-dark"
          onClick={() => {
            addToCartInj({
              product: {
                id, name, price, currency, image
              }
            })
          }}
        >Adauga in cos</button>
      </div>
  </Layout>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    // injectam un prop:
    addToCartInj: (payload) => dispatch(addToCart(payload))
  }
}

export default connect(null, mapDispatchToProps)(Product);