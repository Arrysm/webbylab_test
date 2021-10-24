import {combineReducers} from "redux";
import {tokenReducer} from "./tokenReducer";
import {moviesReducer} from "./moviesReducer";
import {modalReducer} from "./modalReducer";

const rootReducer = combineReducers({
    token: tokenReducer,
    movies: moviesReducer,
    modal: modalReducer,
});

export default rootReducer;