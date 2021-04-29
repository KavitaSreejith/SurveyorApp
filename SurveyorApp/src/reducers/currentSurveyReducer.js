const INITIAL_STATE = {
    prefetching: false,
    resultDetail: null,
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_SURVEY':
            return {
                ...state,
                resultDetail: action.payload.survey_result_detail,
            }
        case 'RESET_RESULT':
            return {
                ...INITIAL_STATE,
            }
        case 'UPDATE_RESULT':
            return {
                ...state,
                resultDetail: action.payload.survey_result_detail,
            }
        case 'PREFETCHING_START':
            return {
                ...state,
                prefetching: true,
            }
        case 'PREFETCHING_END':
            return {
                ...state,
                prefetching: false,
            }
        default:
            return state
    }
}
