import { createStore, combineReducers, applyMiddleware } from "redux";
import  ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

import cartReducer from "./reducers/cart";
import userReducer from "./reducers/user";


const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

const middlewares = [ReduxThunk, logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares) );
console.log(store)
export default store;