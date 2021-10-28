import React, { Component } from 'react'
import Layout from '../layout/Layout'

class Category extends Component {
  render() {
    console.log(this.props)

    const routeParam = this.props.match.params.categoryName;

    console.log(routeParam)
    return (
      <div>
        <Layout>
          <h1>{routeParam}</h1>
        </Layout>
      </div>
    )
  }
}

export default Category
