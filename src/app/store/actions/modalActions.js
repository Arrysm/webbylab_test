import Modal from "../../components/Modal/Modal";

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const closeModal = () => dispatch => dispatch({type: CLOSE_MODAL, payload: null});

export const openModal = () => dispatch => {
    dispatch({
        type: OPEN_MODAL,
        payload: <Modal close={() => dispatch(closeModal())} />
    })
}