import React from 'react';
import './Modal.css'
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteMovie} from "../../store/actions/moviesActions";

const ConfirmModal = (props) => {
    const {close, title, id} = props;
    const movies = useSelector(store => store.movies);
    const token = useSelector(store => store.token);

    const dispatch = useDispatch();

    return (
        <div
            onClick={e => {
                if (e.target === e.currentTarget) close()
            }}
            className={'modal__wrapper'}>

            <div className={'confirm-content'}>
                <p> Are you sure, you want to delete: <span style={{display: 'block'}}>
                    "{title}"?
                </span></p>

                <div className={'confirm-btn-wrapper'}>
                    <Button
                        text={'Yes'}
                        onClick={() => {
                            dispatch(deleteMovie(id, movies, token, title));
                            close();
                        }}
                    />
                    <Button
                        text={'Cancel'}
                        onClick={close}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;