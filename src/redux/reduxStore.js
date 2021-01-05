import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from "redux-form";
import productsReducer from "./productsReducer";

const reducers = combineReducers({
    form : formReducer,
    products : productsReducer
});

const store = createStore(reducers);

window.store = store;

export default store;