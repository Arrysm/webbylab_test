export const SET_TOKEN = 'SET_TOKEN';
export const CLEAR_TOKEN = 'CLEAR_TOKEN';

export const setToken = (token) => dispatch => dispatch({type: SET_TOKEN, payload: token});
export const clearToken = () => dispatch => dispatch({type: CLEAR_TOKEN, payload: ''});