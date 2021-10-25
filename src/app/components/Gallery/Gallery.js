import React, {useEffect, useRef, useState} from 'react';
import Input from "../Input/Input";
import './Gallery.css'
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import Item from "../Item/Item";
import {openModal} from "../../store/actions/modalActions";
import {getAllMovies, getSearchedMovies, getSortedMovies, uploadMovies} from "../../store/actions/moviesActions";

const Gallery = () => {
    const search = useRef(null);
    const movies = useSelector(store => store.movies);
    const dispatch = useDispatch();

    const inputFile = useRef(null);
    const [sorted, setSorted] = useState(false);

    const handleSearch = () => {
        let value = (search.current.value.trim()).toLowerCase();
        if (value === '') {
            dispatch(getAllMovies(token));
        } else {
            dispatch(getSearchedMovies(value, token));
        }
    }

    const handleSort = () => {
        if (sorted) {
            dispatch(getAllMovies(token))
            setSorted(!sorted);
            return
        }
        dispatch(getSortedMovies(token));
        setSorted(!sorted);
    }

    const items = movies.map(el => <Item key={el.id} {...el}/>);
    const token = useSelector(store => store.token);

    useEffect(() => {
        dispatch(getAllMovies(token));
    }, [dispatch])

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
                    text={sorted ? 'Shuffle' : 'Sort A-Z'}
                    onClick={handleSort}
                    className={items.length < 2 && 'disabled'}
                />
                <div>
                    <Button
                        text={'Add single'}
                        style={{marginRight: 10}}
                        onClick={() => dispatch(openModal())}
                    /> or <Button
                    text={'Upload file'}
                    style={{marginLeft: 10}}
                    onClick={() => inputFile.current.click()}
                />
                </div>
            </div>
            <div className="gallery">
                <input
                    type="file"
                    id={'input_file'}
                    accept={'text/plain'}
                    ref={inputFile}
                    style={{display: 'none', position: 'absolute', left: 0, top: 0, opacity: 0}}
                    onChange={e => {
                        let data = new FormData();
                        data.append('movies', e.target.files[0], e.target.files[0].name);
                        dispatch(uploadMovies(data, movies, token));
                    }}
                />
                {items.length > 0 ?
                    items :
                    <h3>No items found</h3>}
            </div>
        </div>
    );
};

export default Gallery;