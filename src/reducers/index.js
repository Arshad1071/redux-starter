import counterReducer from "./counter";
import logedReducer from "./isLoged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterReducer,
    logedReducer
})

export default allReducers;