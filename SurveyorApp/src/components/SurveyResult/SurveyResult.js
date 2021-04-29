import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import ThemesContainer from '../Theme/ThemesContainer'
import { floatToPercent } from '../../utils'
import NotFound from '../Exception/NotFound'
import Loading from '../Exception/Loading'
import { ResultWrapper } from './Style'
import PropTypes from 'prop-types'

function SurveryResult({ resultDetail, updateResult, match, prefetching }) {
    const resultEndpointPath = `/surveys/${match.params.id}`
    const { data, loading, error } = useFetch(resultEndpointPath)

    useEffect(() => {
        if (data) {
            updateResult(data)
        }
    }, [data, updateResult])

    let body
    switch (true) {
        case !resultDetail && prefetching:
            body = <Loading text="Prefetching" />
            break
        case !resultDetail && loading:
            body = <Loading />
            break
        case error:
            body = <NotFound />
            break
        default:
            body = null
    }

    if (body) return body

    const result = resultDetail || data?.survey_result_detail

    return (
        <ResultWrapper data-testid="result-component">
            <div>
                <h1>{result.name}</h1>
                <h4>
                    Response Rate: {floatToPercent(result.response_rate, 2)}
                </h4>
                <ThemesContainer data={result.themes} />
            </div>
        </ResultWrapper>
    )
}

SurveryResult.propTypes = {
    resultDetail: PropTypes.object,
    updateResult: PropTypes.func,
    match: PropTypes.object.isRequired,
}

export default SurveryResult
