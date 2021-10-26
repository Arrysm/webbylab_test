export const validateYear = (value, setError, error) => {
    if (value === '') setError({...error, year: null})
    else if (!/(^[0-9]+$)/.test(value) || +value < 1850 || +value > 2021) {
        setError({...error, year: 'Should be <= 2021 and >= 1850'})
    } else {
        setError({...error, year: null})
    }
}

export const validateActors = (value, setError, error) => {
    if (value === '') setError({...error, actors: null})
    else if (!/(^[a-zA-Z,-]+$)/.test(value)) {
        setError({...error, actors: 'Only letters and - ,'})
    } else {
        setError({...error, actors: null})
    }
}

export const validateTitle = (value, setError, error) => {
    if (value === '') setError({...error, title: 'Should not be empty'})
    else {
        setError({...error, title: null})
    }
}