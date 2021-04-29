import Themes from './Themes'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
    allThemes: ownProps.data,
})

export default connect(mapStateToProps)(Themes)
