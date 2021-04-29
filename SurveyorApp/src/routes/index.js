import { Switch, Route } from 'react-router-dom'
import SurveryListContainer from '../components/SurveyList/SurveryListContainer'
import SurveryResultContainer from '../components/SurveyResult/SurveryResultContainer'
import NoMatch from '../components/Exception/NotFound'

function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={SurveryListContainer} />
            <Route
                exact
                path="/surveys/:id"
                component={SurveryResultContainer}
            />
            <Route path="*" component={NoMatch} />
        </Switch>
    )
}

export default Routes
