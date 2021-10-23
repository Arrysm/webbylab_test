import {combineReducers} from "redux";
import {tokenReducer} from "./tokenReducer";
import {moviesReducer} from "./moviesReducer";
import {loaderReducer} from "./loaderReducer";

const rootReducer = combineReducers({
    token: tokenReducer,
    movies: moviesReducer,
    isLoading: loaderReducer
});

export default rootReducer;