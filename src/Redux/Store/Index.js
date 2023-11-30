import {  createStore } from "redux";
import ProductsReducer from "../Reducers/ProductsReducer/Index";
import CartReducer from "../Reducers/CartReducer/Index";
import LoginStatus from "../Reducers/LoginSatus/LoginStatus";
import Address from '../Reducers/AddressReducer/Address'
import { combineReducers } from "redux";
const rootreducer=combineReducers(
    {
        products:ProductsReducer,
        cartAllProducts:CartReducer,
        LoginStatus:LoginStatus,
        Address:Address
    }
)
const Index =createStore(rootreducer);
export default Index