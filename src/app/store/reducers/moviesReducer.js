import {
    GET_ALL_MOVIES,
    ADD_MOVIE,
    DELETE_MOVIE,
    UPLOAD_MOVIES,
    GET_SEARCHED_MOVIES,
    GET_SORTED_MOVIES
} from "../actions/moviesActions";

export const moviesReducer = (movies=[], action) => {
    switch (action.type) {
        case GET_ALL_MOVIES:
            return action.payload;
        case GET_SORTED_MOVIES:
            return action.payload;
        case GET_SEARCHED_MOVIES:
            return action.payload;
        case ADD_MOVIE:
            return action.payload;
        case DELETE_MOVIE:
            return action.payload;
        case UPLOAD_MOVIES:
            return action.payload;
        default:
            return movies;
    }
}