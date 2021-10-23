import initialStore from "../initialStore";
import {ADD_MOVIE, DELETE_MOVIE, GET_ALL_MOVIES, GET_MOVIE} from "../actions/moviesActions";

export const moviesReducer = (store = initialStore, action) => {
    switch (action.type) {
        case GET_ALL_MOVIES:
            return action.payload;
        case GET_MOVIE:
            return action.payload;
        case ADD_MOVIE:
            return action.payload;
        case DELETE_MOVIE:
            return action.payload;
        default:
            return store;
    }
}