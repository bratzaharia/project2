import React from 'react'
import { Link } from "react-router-dom";

function HomeCategory(props) {
  const { image, title, description, routeName } = props;
  console.log(routeName)
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 border p-3">
      <Link to={`/category/${routeName}`}>
      <img
        className="w-100"
        src={image}
        alt=""
        
        />
        <h2 className="mt-2">{title}</h2>
        <p>{description}</p>
        </Link>
    </div>
  )
}

export default HomeCategory
