import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import QuestionCard from "./QuestionCard"
import ResultCard from "./ResultCard"
import { _getQuestions } from "../../_DATA"
import { setQuestions } from "../../Redux/actions"
import { Switch } from "@material-ui/core"
import { formatData } from "./QuestionCard"

const Home = () => {
    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions)
    const user = useSelector(state => state.auth.user.id)
    const answers = useSelector(state => state.users.find(u => u.id === user).answers)
    const [questionView, setQuestionView] = useState(true)

    useEffect(() => {
        _getQuestions()
            .then(questions => {
                const formattedQuestion = formatData(questions)
                dispatch(setQuestions(formattedQuestion))
            })
            .catch(error => console.log(error))
    },[dispatch])

    const answeredQuestions = Object.keys(answers)

    const handleViewChange = () => setQuestionView(!questionView)

    questions.sort((a,b) => b.timestamp - a.times)

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <p>Unanswered</ p>
                <Switch onChange={ handleViewChange }/>
                <p>Answered</p>
            </div>

            { questions.map(q => {
                if (!questionView && answeredQuestions.includes(q.id)) {
                    return (
                        <ResultCard key={q.id} card={q} />
                    )

                } else if (questionView && !answeredQuestions.includes(q.id)) {
                    return (
                        <QuestionCard key={q.id} card={q} />
                    )
                }

                return <div />

            })}

        </div>
    )
}

export default Home
