import React, { Component } from 'react'
import Layout from '../layout/Layout'
import ProductList from './../components/ProductList'
import ProductListSidebar from './../components/ProductListSidebar'

import products from '../utils/products.json';


class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            filteredItems: [],
            items: []
        }
    }

    filterProducts(lowerLimit, upperLimit) {
        const filteredItems = this.state.items.filter((product) => product.price >= lowerLimit && product.price < upperLimit);
        this.setState({ filteredItems });
    }

    componentDidMount() {
        const { match } = this.props;
        // console.log(match);
        const categoryName = match.params.categoryName;
        // console.log(categoryName)
        // Actualizam atat informatiile despre categorie, cat si despre produse.
        this.setState({
            category: products[categoryName],
            filteredItems: products[categoryName].items,
            items: products[categoryName].items
        });
    }

    render() {
        console.log(this.state.items)
        return (
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <div className="row">
                        <h2 className="mb-5">{this.state.category.name}</h2>
                        <div className="col-12 col-sm-2">
                            <ProductListSidebar  filterProducts={(low, high) => this.filterProducts(low, high)}/>
                        </div>

                        <div className="col-12 col-sm-10">
                            {/* Pasam itemii mai departe catre ProductList */}
                            <ProductList  products={this.state.filteredItems}  />
                        </div>




                    </div>
                </div>
            </Layout>
        );
    }
}

export default Category;
