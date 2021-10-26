import { Route, Switch } from 'react-router-dom';


import Home from './pages/Home'
import Login from './pages/Login'
import Page404 from './pages/Page404'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
