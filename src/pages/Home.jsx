import React from 'react'

import Layout from './../layout/Layout'
import HomeCategory from '../components/HomeCategory'
import products from '../utils/products.json'

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      categoryNames: [],
    };
  }


  componentDidMount() {
    // nu avem fetch().then().then() in rest e la fel
    const categories = Object.values(products);
    const categoryNames = Object.keys(products);
    console.log(categories)
    this.setState({
      categories,
      categoryNames
    })
  }

  render() {
    console.log(this.props)
    const { signOut, user } = this.props;
    return (
      <Layout
        signOut={signOut}
        user={user}
      >
        <h1 className="h1 text-center text-primary w-50 py-5">
          Home
      </h1>

        <div className="container-fluid">
          <div className="row">
            {
              this.state.categories.map((category, index) => {
                return (
                  <HomeCategory
                    key={index}
                    image={category.image}
                    title={category.name}
                    description={category.description}
                    routeName={ this.state.categoryNames[index] }
                  />
                )
              })
            }

          </div>
        </div>
      </Layout>
    )
  }
}

export default Home;