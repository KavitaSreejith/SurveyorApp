import SurveyResult from './SurveyResult'
import { connect } from 'react-redux'
import { updateResult } from '../../actions/surveryResultAction'

const mapStateToProps = state => ({
    resultDetail: state.currentResult.resultDetail,
    prefetching: state.currentResult.prefetching,
})

const mapDispatchToprops = dispatch => ({
    updateResult: data => dispatch(updateResult(data)),
})

export default connect(mapStateToProps, mapDispatchToprops)(SurveyResult)
