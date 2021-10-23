export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';

export const startLoading = () => dispatch => dispatch({type: START_LOADING, payload: true});

export const sendLoading = () => dispatch => dispatch({type: END_LOADING, payload: false});