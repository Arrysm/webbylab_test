import React, {useEffect, useRef, useState} from 'react';
import Input from "../Input/Input";
import './Gallery.css'
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import Item from "../Item/Item";
import {openModal} from "../../store/actions/modalActions";
import {
    getAllMovies,
    getSearchedMovies,
    getSortedMovies, setSortedMovies,
    uploadMovies
} from "../../store/actions/moviesActions";

const Gallery = () => {
    const search = useRef(null);
    const movies = useSelector(store => store.movies);
    const dispatch = useDispatch();

    const inputFile = useRef(null);
    const [sorted, setSorted] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        let value = (search.current.value.trim()).toLowerCase();
        setSearchValue(value);
        if (value === '') {
            dispatch(getAllMovies(token));
        } else {
            dispatch(getSearchedMovies(value, token));
            setSorted(false);
        }
    }

    const handleSort = () => {
        if (sorted) {
            if (searchValue === '') {
                dispatch(getAllMovies(token))
                setSorted(!sorted);
            } else {
                dispatch(getSearchedMovies(searchValue, token));
                setSorted(!sorted);
            }
        } else {
            if (searchValue === '') {
                dispatch(getSortedMovies(token));
                setSorted(!sorted);
            } else {
                dispatch(setSortedMovies(movies));
                setSorted(!sorted);
            }
        }
    }

    const items = movies.map(el => <Item key={el.id} {...el}/>);
    const token = useSelector(store => store.token);

    useEffect(() => {
        dispatch(getAllMovies(token));
    }, [dispatch, token])

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
                        dispatch(uploadMovies(data, movies, token, e.target.files[0].name));
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