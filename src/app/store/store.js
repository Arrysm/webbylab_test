import {applyMiddleware, createStore} from "redux";
import initialStore from "./initialStore";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

const store = createStore(rootReducer, initialStore, applyMiddleware(thunk));

export default store;