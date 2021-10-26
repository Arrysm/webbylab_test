import axios from "axios";

export const GET_ALL_MOVIES = 'GET_ALL_MOVIES';
export const GET_SORTED_MOVIES = 'GET_SORTED_MOVIES';
export const SET_SORTED_MOVIES = 'SET_SORTED_MOVIES';
export const GET_SEARCHED_MOVIES = 'GET_SEARCHED_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const UPLOAD_MOVIES = 'UPLOAD_MOVIES'

export const getAllMovies = (token) => dispatch => {
    axios.get('/movies', {headers: {'Authorization': token}})
        .then(resp => {
            const {status, data} = resp.data;
            if (status && data.length > 0) {
                dispatch({type: GET_ALL_MOVIES, payload: data});
            } else {
                window.M.toast({html: 'No movies found', classes: 'light-blue lighten-1'});
            }
        })
}

export const getSortedMovies = (token) => dispatch => {
    axios.get('/movies?sort=title&order=ASC&limit=20&offset=0',
        {headers: {'Authorization': token}})
        .then(resp => {
            const {status, data} = resp.data;
            if (status && data.length > 0) {
                window.M.toast({html: 'Movies were sorted from A to Z', classes: 'light-blue lighten-1'});
                dispatch({type: GET_ALL_MOVIES, payload: data});
            }
        })
}

export const setSortedMovies = (movies) => dispatch => {
    const newMovies = movies.concat([]).sort((a,b) => {
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        return 0
    });
    window.M.toast({html: 'Movies were sorted from A to Z', classes: 'light-blue lighten-1'});
    dispatch({type: SET_SORTED_MOVIES, payload: newMovies});
}

export const getSearchedMovies = (data, token) => dispatch => {
    axios.get(`/movies?search=${data}&sort=id&order=ASC&limit=20&offset=0`,
        {headers: {'Authorization': token}})
        .then(resp => {
            const {status, data} = resp.data;
            if (status && data.length > 0) {
                dispatch({type: GET_ALL_MOVIES, payload: data});
            }
        })
}

export const addMovie = (values, movies, token) => dispatch => {
    const {title, year, format, actors} = values;
    const data = {
        title,
        year: +year,
        format,
        actors: actors.replace(/(\r\n|\n|\r)/gm, ',').split(',')
    }

    axios.post('/movies', data, {headers: {'Authorization': token}})
        .then(resp => {
            const {data, status, error} = resp.data;
            if (status) {
                const newMovies = movies.concat(data)
                window.M.toast({html: `${data.title} was added!`, classes: 'light-blue lighten-1'});
                dispatch({type: ADD_MOVIE, payload: newMovies})
            } else {
                window.M.toast({html:
                        Object.keys(error.fields)[0]+
                        ':' +
                        error.fields[Object.keys(error.fields)[0]], classes: 'light-blue lighten-1'});
            }
        })
}

export const deleteMovie = (id, movies, token, title) => dispatch => {
    axios.delete(`/movies/${id}`, {headers: {'Authorization': token}})
        .then(resp => {
            const {status, error} = resp.data
            if (status) {
                window.M.toast({html: `${title} deleted`, classes: 'light-blue lighten-1'});
                const newMovies = movies.filter(el => el.id !== id);
                dispatch({type: DELETE_MOVIE, payload: newMovies})
            } else {
                window.M.toast({html: error.code, classes: 'light-blue lighten-1'});
            }
        })
}

export const uploadMovies = (data, movies, token, fileName) => dispatch => {
    axios.post('/movies/import', data, {headers: {'Authorization': token}})
        .then(resp => {
            const {status, data, error} = resp.data;
            if (status) {
                window.M.toast({html: `${fileName} was uploaded`, classes: 'light-blue lighten-1'});

                const newMovies = [...movies, ...data];
                for (let i =0; i < newMovies.length; i++) {
                    for (let j = i+1; j<newMovies.length; ++j) {
                        if (newMovies[i].title === newMovies[j].title) newMovies.splice(j--, 1);
                    }
                }
                dispatch({type: UPLOAD_MOVIES, payload: newMovies})
            } else {
                window.M.toast({html:
                        Object.keys(error.fields)[0]+
                        ':' +
                        error.fields[Object.keys(error.fields)[0]], classes: 'light-blue lighten-1'});
            }
        })
}
