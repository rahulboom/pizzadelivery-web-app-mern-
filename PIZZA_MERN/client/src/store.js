import {combineReducers} from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// import { getAllPizzasReducer } from './reducers/pizzaReducers'

import { cartReducer } from './reducers/cartReducer'
// import { registerUserReducer , loginUserReducer } from './reducers/userReducer'
// import { placeOrderReducer , getUserOrdersReducer } from './reducers/orderReducer'

import { getAllPizzasReducer,addPizzaReducer,getPizzaByIdReducer,editPizzaReducer } from './reducers/pizzaReducers'
import { loginUserReducer, registerUserReducer, getAllUsersReducer } from './reducers/userReducer'
import { placeOrderReducer,getAllOrdersReducer, getUserOrdersReducer , trackOrdersReducer } from './reducers/orderReducer'


const finalReducer = combineReducers({
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,

    addPizzaReducer:addPizzaReducer,
    getPizzaByIdReducer:getPizzaByIdReducer,
    editPizzaReducer:editPizzaReducer,
    getAllOrdersReducer:getAllOrdersReducer,
    getAllUsersReducer:getAllUsersReducer,
    trackOrdersReducer: trackOrdersReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')): []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const trackUser = localStorage.getItem('trackUser') ? JSON.parse(localStorage.getItem('trackUser')) : null 

const initialState = {

    cartReducer : {
        cartItems : cartItems
    },

    loginUserReducer : {
        currentUser : currentUser
    },
    trackOrdersReducer : {
        trackUser : trackUser

    }
}

const composeEnhancers= composeWithDevTools({})
const store = createStore(finalReducer , initialState , composeEnhancers(applyMiddleware(thunk)))



export default store