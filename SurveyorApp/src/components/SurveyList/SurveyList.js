import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { StyledList, StyledListWrapper } from './Style'
import PropTypes from 'prop-types'

function SurveyList({
    allSurveys,
    loadResult,
    prefetchingStart,
    prefetchingEnd,
    resetResult,
}) {
    const shouldFetchRef = useRef(null)

    useEffect(() => {
        resetResult()
        return () => {
            clearTimeout(shouldFetchRef.current)
        }
    }, [resetResult])

    const onMouseEnterHandler = result => {
        shouldFetchRef.current = setTimeout(async () => {
            try {
                prefetchingStart()
                axios
                    .get(`${process.env.REACT_APP_ENDPOINT}/${result.url}`)
                    .then(res => {
                        loadResult(res.data)
                        prefetchingEnd()
                    })
                    .finally(() => {
                        prefetchingEnd()
                    })
            } catch (error) {
                throw new Error('prefetching went wrong')
            }
        }, process.env.REACT_APP_PREFETCH_TIMEOUT)
    }

    const onMouseLeaveHandler = () => {
        if (shouldFetchRef.current) {
            clearTimeout(shouldFetchRef.current)
        }
    }

    const list = allSurveys.map(sr => {
        return (
            <Link
                to={{
                    pathname: sr.url,
                    state: { result: sr },
                }}
                key={sr.url}
            >
                <StyledList
                    onMouseEnter={() => onMouseEnterHandler(sr)}
                    onMouseLeave={onMouseLeaveHandler}
                >
                    {sr.name}
                </StyledList>
            </Link>
        )
    })

    return <StyledListWrapper>{list}</StyledListWrapper>
}

SurveyList.propTypes = {
    allSurveys: PropTypes.array,
    loadResult: PropTypes.func.isRequired,
    prefetchingStart: PropTypes.func.isRequired,
    prefetchingEnd: PropTypes.func.isRequired,
    resetResult: PropTypes.func.isRequired,
}

export default SurveyList
