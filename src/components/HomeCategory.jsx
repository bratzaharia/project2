import React from 'react'
import { Link } from "react-router-dom";

function HomeCategory(props) {
  const { image, title, description, routeName } = props;
  console.log(routeName)
  return (
    <div className="col-sm-6 col-xs-6 border mb-2 p-3">
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
