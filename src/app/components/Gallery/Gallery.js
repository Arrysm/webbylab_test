import React, {useEffect, useRef} from 'react';
import Input from "../Input/Input";
import './Gallery.css'
import Button from "../Button/Button";
import {useSelector} from "react-redux";
import Item from "../Item/Item";

const Gallery = () => {
    const search = useRef(null);
    const movies = useSelector(store => store.movies)

    const handleSearch = () => {
        console.log(search.current.value);
    }

    const itemsToRender = movies.map(el => <Item key={el.id} {...el}/>)

    useEffect(() => {
        console.log(movies);
    }, [movies])

    return (
        <div className={'gallery__wrapper container'}>
            <div className="gallery__options">
                <Input
                    id={'search'}
                    type={'text'}
                    label={'Search by name or actor'}
                    innerRef={search}
                    onChange={handleSearch}
                />
                <div>
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
                {itemsToRender.length > 0 ? itemsToRender : <h3>No items found</h3>}
            </div>
        </div>
    );
};

export default Gallery;