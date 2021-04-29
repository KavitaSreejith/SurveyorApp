export const initData = data => dispatch => {
    dispatch({
        type: 'INIT_APP',
        payload: data,
    })
}
