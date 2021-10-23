import initialStore from "../initialStore";
import {END_LOADING, START_LOADING} from "../actions/loaderActions";

export const loaderReducer = (store = initialStore, action) => {
    switch (action.type) {
        case START_LOADING:
            return action.payload;
        case END_LOADING:
            return action.payload;
        default:
            return store;
    }
}