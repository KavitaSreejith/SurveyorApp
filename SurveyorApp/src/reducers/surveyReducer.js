const INITIAL_STATE = {
    allSurveys: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INIT_APP':
            return {
                ...state,
                allSurveys: action.payload?.survey_results,
            }
        default:
            return state
    }
}
