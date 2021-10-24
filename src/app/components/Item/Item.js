import React, {useState} from 'react';
import './Item.css';
import Button from "../Button/Button";

const Item = (props) => {
    const {title, year, format, id, actors} = props;

    const [text, toggleText] = useState(false);

    const ppl = [];

    actors.forEach(el => ppl.push(el.name));

    return (
        <>
            <div className="collapsible-header item"
                 onClick={(e) => {
                     if (e.target === e.currentTarget) toggleText(!text)
                 } }>
                <p className={'item__title'}>{title}</p>
                <Button text={'Delete'}/>
            </div>
            {text &&
            <div className={'item__text'}>
                <p>{title}</p>
                <p>{year}</p>
                <p>{format}</p>
                <p>{ppl.join(', ')}</p>
            </div>}
        </>
    );
};

export default Item;