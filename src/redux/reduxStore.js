import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from "redux-form";
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    form : formReducer,
    products : productsReducer,
    auth : authReducer
});

const store = createStore(reducers);

window.store = store;

export default store;