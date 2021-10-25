import React, {useState} from 'react';
import Input from "../Input/Input";
import './Modal.css'
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addMovie} from "../../store/actions/moviesActions";

const Modal = (props) => {
    const {close} = props;
    const movies = useSelector(store => store.movies);
    const token = useSelector(store => store.token);

    const dispatch = useDispatch();

    const [value, setValue] = useState({
        title: '', year: '', format: '', actors: ''
    });

    const changeHandler = (event) => setValue({...value, [event.target.id]: event.target.value})

    return (
        <div
            onClick={e => {
                if (e.target === e.currentTarget) close()
            }}
             className={'modal__wrapper'}>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch(addMovie(value, movies, token));
                close();
            }} className={'modal__form'}>
                <Input
                    id={'title'}
                    type={'text'}
                    label={'Title'}
                    onChange={e => changeHandler(e)}
                />
                <Input
                    id={'year'}
                    type={'text'}
                    label={'Year'}
                    onChange={e => changeHandler(e)}
                />
                <Input
                    id={'format'}
                    type={'text'}
                    label={'Format'}
                    onChange={e => changeHandler(e)}
                />
                <Input
                    id={'actors'}
                    type={'text'}
                    label={'Actors'}
                    onChange={e => changeHandler(e)}
                    textArea={true}
                />
                <Button text={'Submit'}/>
            </form>
        </div>
    );
};

export default Modal;