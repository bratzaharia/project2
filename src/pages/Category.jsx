import React, { Component } from 'react'
import Layout from '../layout/Layout'
import ProductList from  './../components/ProductList'

import products from '../utils/products.json';


class Category extends Component {
  constructor(props) {
    super(props);
        this.state = {
            category: {},
            // Avem nevoie de itemii categoriei.
            items: []
     }
  }

    componentDidMount() {
        const { match } = this.props;
        console.log(match);
        const categoryName = match.params.categoryName;
        console.log(categoryName)
        // Actualizam atat informatiile despre categorie, cat si despre produse.
        this.setState({
            category: products[categoryName],
            items: products[categoryName].items
        });
    }

    render() {
        console.log(this.state.items)
        return (
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <h2 className="mb-5">{this.state.category.name}</h2>
                    {/* Pasam itemii mai departe catre ProductList */}
                    <ProductList products={this.state.items} />
                </div>
            </Layout>
        );
    }
}

export default Category;
