import React, {useEffect, useRef, useState} from 'react';
import Input from "../Input/Input";
import './Gallery.css'
import Button from "../Button/Button";
import {useSelector} from "react-redux";
import Item from "../Item/Item";

const Gallery = () => {
    const search = useRef(null);
    const movies = useSelector(store => store.movies)

    const [items, setItems] = useState(movies.map(el => <Item key={el.id} {...el}/>));

    const [sorted, setSorted] = useState(false);

    const handleSearch = () => {
        let value = (search.current.value.trim()).toLowerCase();
        if (value === '') {
            setSorted(false);
            setItems(movies.map(el => <Item key={el.id} {...el}/>))
        } else {
            setSorted(false);
            let result = movies.filter(el => {
                return el.title.toLowerCase().includes(value) || el.actors.filter(actor => (actor.name.toLowerCase()).includes(value)).length > 0
            });
            setItems(result.map(el => <Item key={el.id} {...el}/>))
        }
    }

    const handleSort = () => {
        setSorted(true);
        let result = items.sort((a, b) => {
            if(a.props.title < b.props.title) { return -1; }
            if(a.props.title > b.props.title) { return 1; }
            return 0;
        });
        setItems(result)
    }

    useEffect(() => {
        console.log(movies);
    }, [movies])

    return (
        <div className={'gallery__wrapper container'}>
            <div className="gallery__options" style={{userSelect: 'none'}}>
                <Input
                    id={'search'}
                    type={'text'}
                    label={'Search by title or actor'}
                    innerRef={search}
                    onChange={handleSearch}
                />
                <Button
                    text={'Sort A-Z'}
                    className={sorted && 'disabled'}
                    onClick={handleSort}
                />
                <div >
                    <Button
                        text={'Add single'}
                        style={{marginRight: 10}}
                    /> or <Button
                    text={'Upload file'}
                    style={{marginLeft: 10}}
                />
                </div>
            </div>
            <div className="gallery">
                {items.length > 0 ?
                    items :
                    <h3>No items found</h3>}
            </div>
        </div>
    );
};

export default Gallery;