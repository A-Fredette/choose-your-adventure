import React from 'react'
import {useLocation} from "react-router-dom"
import {useSelector} from "react-redux"

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
            <div>Would you rather??</div>
            <img alt={`avatar of ${user.name}`} src={ `../${user.avatarURL}` } style={{ width: '40px' }}/>
            <div>
                <p>{ question.optionOne.text }</p>
                <p>Votes: { question.optionOne.votes.length }</p>
                <p>Votes: { calcPercents().optionOne }</p>
            </div>
            <div>
                <p>{ question.optionTwo.text }</p>
                <p>Votes: { question.optionTwo.votes.length }</p>
                <p>Votes: { calcPercents().optionTwo }</p>
                { question.optionTwo.votes.includes(user.id) &&
                    <p>You voted for this!</p>
                }
            </div>
        </>
    )
}

export default QuestionResults
