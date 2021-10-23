import initialStore from "../initialStore";
import {CLEAR_TOKEN, SET_TOKEN} from "../actions/tokenActions";

export const tokenReducer = (store = initialStore, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return action.payload;
        case CLEAR_TOKEN:
            return action.payload;
        default:
            return store;
    }
}