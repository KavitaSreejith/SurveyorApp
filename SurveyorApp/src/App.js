import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { useFetch } from './hooks/useFetch'
import { configureStore } from './store'
import { initData } from './actions/surveyListAction'
import NoMatch from './components/Exception/NotFound'
import Loading from './components/Exception/Loading'
import Offline from './components/Exception/Offline'
import { MarginedContainer } from './components/layout'
import Nav from './components/Nav'
import Routes from './routes'
import './core.scss'

function App() {
    const survey_url = '/surveys'
    const { data, loading, error } = useFetch(survey_url)

    let body
    if (loading) body = <Loading />
    else if (error) body = <Offline />
    else if (!data) body = <NoMatch />

    const store = configureStore()
    store.dispatch(initData(data))

    return (
        <div data-testid="app-container">
            {body || (
                <Provider store={store}>
                    <Router>
                        <Nav />
                        <div className="container">
                            <MarginedContainer>
                                <Routes />
                            </MarginedContainer>
                        </div>
                    </Router>
                </Provider>
            )}
        </div>
    )
}

export default App
