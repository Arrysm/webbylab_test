import axios from "axios";

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
export const GET_SORTED_MOVIES = 'GET_SORTED_MOVIES';
export const GET_SEARCHED_MOVIES = 'GET_SEARCHED_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const UPLOAD_MOVIES = 'UPLOAD_MOVIES'

const headers = {headers: {'Authorization': sessionStorage.getItem('webbyUser')}};

export const getAllMovies = () => dispatch => {
    axios.get('/movies', headers)
        .then(resp => {
            const {status, data} = resp.data;
            if (status && data.length > 0) {
                dispatch({type: GET_ALL_MOVIES, payload: data});
            }
        })
}

export const getSortedMovies = () => dispatch => {
    axios.get('/movies?sort=title&order=ASC&limit=20&offset=0', headers)
        .then(resp => {
            const {status, data} = resp.data;
            if (status && data.length > 0) {
                dispatch({type: GET_ALL_MOVIES, payload: data});
            }
        })
}

export const getSearchedMovies = (data) => dispatch => {
    axios.get(`/movies?search=${data}&sort=id&order=ASC&limit=20&offset=0`, headers)
        .then(resp => {
            const {status, data} = resp.data;
            if (status && data.length > 0) {
                dispatch({type: GET_ALL_MOVIES, payload: data});
            }
        })
}

export const addMovie = (values, movies) => dispatch => {
    const {title, year, format, actors} = values;
    const data = {
        title,
        year: +year,
        format: format.toUpperCase(),
        actors: actors.replace(/(\r\n|\n|\r)/gm, ',').split(',')
    }

    axios.post('/movies', data, headers)
        .then(resp => {
            const {data, status} = resp.data;
            if (status) {
                const newMovies = movies.concat(data)
                window.M.toast({html: `${data.title} was added!`, classes: 'light-blue lighten-1'});
                dispatch({type: ADD_MOVIE, payload: newMovies})
            }
        })
}

export const deleteMovie = (id, movies) => dispatch => {
    axios.delete(`/movies/${id}`, headers)
        .then(resp => {
            const {status} = resp.data
            if (status) {
                window.M.toast({html: `${id} deleted`, classes: 'light-blue lighten-1'});
                const newMovies = movies.filter(el => el.id !== id);
                dispatch({type: DELETE_MOVIE, payload: newMovies})
            }
        })
}

export const uploadMovies = (data, movies) => dispatch => {
    axios.post('/movies/import', data, headers)
        .then(resp => {
            const {status, data} = resp.data;
            if (status) {
                const newMovies = movies.concat(data)
                dispatch({type: UPLOAD_MOVIES, payload: newMovies})
            }
        })
}
