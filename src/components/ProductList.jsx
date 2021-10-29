import React from 'react'

import ProductItem from './ProductItem'

function ProductList(props) {
  const { products } = props;
  console.log(products)
  return (
    <div className="container">
      <div className="row">
        {
          products && products.map((product) => {
            return (

              <ProductItem
                key={product.id}
                product={product}
              />

            )
          })
        }
      </div>
    </div>
  )
}

export default ProductList
