import React from 'react'
import { getAvarageRate } from '../../utils'
import { ThemeWrapper } from './Style'
import PropTypes from 'prop-types'

function Themes({ allThemes }) {
    const themes = allThemes.map(at => (
        <ThemeWrapper key={at.name} className="container">
            <table className="table">
                <thead className="thead-light">
                    <tr className="row">
                        <th className="col-9">{at.name}</th>
                        <th className="col-3 text-right">Average Rate</th>
                    </tr>
                </thead>
                <Questions questions={at.questions} />
            </table>
        </ThemeWrapper>
    ))
    return <div>{themes}</div>
}

Themes.propTypes = {
    allThemes: PropTypes.array.isRequired,
}

const Questions = ({ questions }) => {
    const list = questions.map(q => (
        <tr key={q.description} className="row">
            <td className="col-9">{q.description}</td>
            <td className="col-3 text-right">
                {getAvarageRate(q.survey_responses, 'response_content').toFixed(
                    2
                )}
            </td>
        </tr>
    ))

    return <tbody>{list}</tbody>
}

Questions.propTypes = {
    questions: PropTypes.array,
}

export default Themes
