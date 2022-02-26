import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import QuestionCard from "./QuestionCard"
import AnsweredCard from "./AnsweredCard"
import { getQuestions } from "../../Redux/actions"
import { Switch } from "@material-ui/core"

const Home = () => {
    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions)
    const user = useSelector(state => state.auth.user.id)
    const answers = useSelector(state => state.users.find(u => u.id === user).answers)
    const [questionView, setQuestionView] = useState(true)

    useEffect(() => {
        dispatch(getQuestions())
    },[dispatch])

    const answeredQuestions = Object.keys(answers)
    const handleViewChange = () => setQuestionView(!questionView)

    questions.sort((a,b) => b.timestamp - a.timestamp)

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <p>Unanswered</ p>
                <Switch onChange={ handleViewChange }/>
                <p>Answered</p>
            </div>

            { questions.map(q => {
                console.log(q.id)
                if (!questionView && answeredQuestions.includes(q.id)) {
                    return (
                        <AnsweredCard key={q.id} card={q} />
                    )

                } else if (questionView && !answeredQuestions.includes(q.id)) {
                    return (
                        <QuestionCard key={q.id} card={q} />
                    )
                }

                return <div key={q.id} />

            })}

        </div>
    )
}

export default Home
