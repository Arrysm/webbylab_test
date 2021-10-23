const initialStore = {
    isLoading: false,
    // movies: [],
    movies: [
        {
            "id": 1,
            "title": "Blazing Saddles",
            "year": 1974,
            "format": "VHS",
            "createdAt": "2021-06-29T10:46:59.000Z",
            "updatedAt": "2021-06-29T10:46:59.000Z"
        },
        {
            "id": 5,
            "title": "Casablanca",
            "year": 1942,
            "format": "DVD",
            "createdAt": "2021-06-29T10:56:31.000Z",
            "updatedAt": "2021-06-29T10:56:31.000Z"
        }
    ],
    token: ''
}

export default initialStore
