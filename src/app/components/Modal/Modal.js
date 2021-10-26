import React, {useState} from 'react';
import Input from "../Input/Input";
import './Modal.css'
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addMovie} from "../../store/actions/moviesActions";
import {validateActors, validateTitle, validateYear} from "../Input/utils";
import Select from "../Select/Select";

const Modal = (props) => {
    const {close} = props;
    const movies = useSelector(store => store.movies);
    const token = useSelector(store => store.token);

    const dispatch = useDispatch();

    const [value, setValue] = useState({
        title: '', year: '', format: 'VHS', actors: ''
    });

    const [error, setError] = useState({
        title: null, year: null, actors: null
    });

    const changeHandler = (event) => setValue({...value, [event.target.id]: event.target.value.trim()})

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
                    onChange={e => {
                        changeHandler(e);
                        validateTitle(e.target.value.trim(), setError, error)
                    }}
                    required={true}
                    error={error.title}
                />
                <Input
                    id={'year'}
                    type={'text'}
                    label={'Year'}
                    onChange={e => {
                        changeHandler(e)
                        validateYear(e.target.value, setError, error)
                    }}
                    error={error.year}
                />
                <Select
                    id={'format'}
                    label={'Format'}
                    onChange={e => changeHandler(e)}
                    options={['VHS', 'DVD', 'Blu-Ray']}
                />
                <Input
                    id={'actors'}
                    type={'text'}
                    label={'Actors'}
                    onChange={e => {
                        changeHandler(e)
                        validateActors(e.target.value, setError, error)
                    }}
                    textArea={true}
                    error={error.actors}
                />
                <Button
                    text={'Submit'}
                    className={Object.values(error).filter(el => el !== null).length > 0 && 'disabled'}
                />
            </form>
        </div>
    );
};

export default Modal;