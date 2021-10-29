import React from 'react';

function ProductItem(props) {
  const { id, name, price, currency, image } = props.product;
  console.log(props)
  return (
    <div className="col-xs-6 col-sm-4">

      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price} {currency}</p>
          <a href="#" className="btn btn-primary">Details</a>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
