import React, {useState} from 'react';
import './Item.css';
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import axios from "axios";
import {openConfirmModal} from "../../store/actions/modalActions";

const Item = (props) => {
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
                    onClick={() => dispatch(openConfirmModal(title, id))}
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