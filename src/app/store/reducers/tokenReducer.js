import initialStore from "../initialStore";
import {CLEAR_TOKEN, GET_TOKEN} from "../actions/tokenActions";

export const tokenReducer = (store = initialStore, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return action.payload;
        case CLEAR_TOKEN:
            return action.payload;
        default:
            return store;
    }
}