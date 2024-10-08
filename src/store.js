import { applyMiddleware, legacy_createStore } from "redux";
import todoReducer from "./reducer";
import { thunk } from "redux-thunk";

const store=legacy_createStore(
    todoReducer,applyMiddleware(thunk)); //use applyMiddleware and thunk (npm i redux-thunk)
export default store