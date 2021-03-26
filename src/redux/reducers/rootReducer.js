import {combineReducers} from "redux";
import {PostReducer} from "./postRecucer";
import {AppReducer} from "./appReducer";


export const rootReducer = combineReducers({
posts:PostReducer , app: AppReducer
})