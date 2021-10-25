import React, {useState} from 'react';
import './Item.css';
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteMovie} from "../../store/actions/moviesActions";
import axios from "axios";

const Item = (props) => {
    const movies = useSelector(store => store.movies);
    const token = useSelector(store => store.token);
    const dispatch = useDispatch();
    const {title, year, format, id} = props;

    const [actors, setActors] = useState([]);

    const [text, toggleText] = useState(false);

    const getDetails = async (id) => {
        if (!text) {
            const result = await axios.get(`/movies/${id}`, {headers: {'Authorization': sessionStorage.getItem('webbyUser')}});
            const {actors} = result.data.data;
            if (actors.length > 0) {
                const ppl = actors.map(el => el.name)
                setActors(ppl);
            }
        }
    }

    return (
        <>
            <div className="collapsible-header item"
                 onClick={ (e) => {
                      // getDetails(id, e);
                     if (e.target === e.currentTarget) {
                         getDetails(id, e);
                         toggleText(!text);
                     }
                 }}>
                <p className={'item__title'}>{title}</p>
                <Button
                    text={'Delete'}
                    onClick={() => dispatch(deleteMovie(id, movies, token))}
                />
            </div>
            {text &&
            <div className={'item__text'}>
                <p>{title}</p>
                <p>{year}</p>
                <p>{format}</p>
                {actors && <p>{actors.join(', ')}</p>}
            </div>}
        </>
    );
};

export default Item;