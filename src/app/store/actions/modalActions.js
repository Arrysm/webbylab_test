import Modal from "../../components/Modal/Modal";
import ConfirmModal from "../../components/Modal/ConfirmModal";

export const OPEN_MODAL = 'OPEN_MODAL';
export const OPEN_CONFIRM_MODAL = 'OPEN_CONFIRM_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const closeModal = () => dispatch => dispatch({type: CLOSE_MODAL, payload: null});

export const openModal = () => dispatch => {
    dispatch({
        type: OPEN_MODAL,
        payload: <Modal close={() => dispatch(closeModal())} />
    })
}

export const openConfirmModal = (title, id) => dispatch => {
    dispatch({
        type: OPEN_CONFIRM_MODAL,
        payload: <ConfirmModal
            close={() => dispatch(closeModal())}
            title={title}
            id={id}
        />
    })
}