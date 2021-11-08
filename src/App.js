import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Page404 from './pages/Page404'
import Category from './pages/Category'
import Product from './pages/Product'
import Cart from './pages/Cart'
import './App.css';


class App extends React.Component {
  render(){
    const {
      user,
      signOut,
    } = this.props;

    return (
      <div className="App">

        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <Home { ...props } signOut={signOut} user={user}/>
            )}
          />

          <Route path="/login" component={Login}/>
          <Route path="/category/:categoryName" component={Category}/>
          <Route path="/product/:productId" component={Product}/>

          <Route path="/cart" component={Cart}/>
          <Route path="*" component={Page404}/>
        </Switch>
      </div>
    );
  }
}

export default App;
