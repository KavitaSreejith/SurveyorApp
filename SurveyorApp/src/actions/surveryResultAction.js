export const loadResult = data => dispatch => {
    dispatch({
        type: 'LOAD_SURVEY',
        payload: data,
    })
}
export const resetResult = () => dispatch => {
    dispatch({
        type: 'RESET_RESULT',
    })
}

export const updateResult = data => dispatch => {
    dispatch({
        type: 'UPDATE_RESULT',
        payload: data,
    })
}

export const prefetchingStart = data => dispatch => {
    dispatch({
        type: 'PREFETCHING_START',
    })
}

export const prefetchingEnd = data => dispatch => {
    dispatch({
        type: 'PREFETCHING_END',
    })
}
