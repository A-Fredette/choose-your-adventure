import React from 'react'
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { QuestionResultsStyle } from "./Styled"
import Notfound from "../Notfound"

const QuestionResults = () => {

    const questionId = useLocation().pathname.split('/')[2] // get question ID from URL
    const question = useSelector(state => state.questions.filter(q => q.id === questionId)[0])
    const user = useSelector(state => state.auth.user)

    const calcPercents = () => {
        const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length
        return {
            optionOne: (question.optionOne.votes.length/totalVotes) * 100 + '%',
            optionTwo: (question.optionTwo.votes.length/totalVotes) * 100 + '%',
        }

    }

    return (
        <>
            {!question
                ? <Notfound />
                : <QuestionResultsStyle>
                    <h1>Would you rather??</h1>
                    <img alt={`avatar of ${user.name}`} src={ `../${user.avatarURL}` } style={{ width: '40px' }}/>
                    <p>{user.name} Asks...</p>
                    <div>
                        <h2>{ question.optionOne.text }</h2>
                        <h3>Votes: { question.optionOne.votes.length } -- ({ calcPercents().optionOne })</h3>
                        { question.optionOne.votes.includes(user.id) && <span> (your choice)</span> }
                    </div>
                    <h4> --- OR --- </h4>
                    <div>
                        <h2>{ question.optionTwo.text }</h2>
                        <h3>Votes: { question.optionTwo.votes.length } -- ({ calcPercents().optionTwo })</h3>
                        { question.optionTwo.votes.includes(user.id) && <span> (your choice)</span> }
                    </div>
                </QuestionResultsStyle>
            }
        </>

    )
}

export default QuestionResults
