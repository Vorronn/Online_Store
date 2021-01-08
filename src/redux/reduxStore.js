import {combineReducers, createStore} from "redux";
import { reducer as formReducer } from "redux-form";
import productsReducer from "./productsReducer";
import authReducer from "./authReducer";
import basketReducer from "./basketReducer";
import favoriteReducer from "./favoriteReducer";

const reducers = combineReducers({
    form : formReducer,
    products : productsReducer,
    auth : authReducer,
    basket : basketReducer,
    favorite : favoriteReducer

});

const store = createStore(reducers);

window.store = store;

export default store;