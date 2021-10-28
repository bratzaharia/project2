import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Page404 from './pages/Page404'
import Category from './pages/Category'
import './App.css';

// firebase
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './configs/firebase';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


class App extends React.Component {

  render(){
    console.log(this.props)
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/category/:categoryName" component={Category}/>
          <Route path="*" component={Page404}/>
        </Switch>
      </div>
    );
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
