import initialStore from "../initialStore";
import {CLOSE_MODAL, OPEN_CONFIRM_MODAL, OPEN_MODAL} from "../actions/modalActions";

export const modalReducer = (store = initialStore, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return action.payload;
        case OPEN_CONFIRM_MODAL:
            return action.payload;
        case CLOSE_MODAL:
            return action.payload;
        default:
            return store;
    }
}