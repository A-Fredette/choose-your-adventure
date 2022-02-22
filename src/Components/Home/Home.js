import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import QuestionCard from "./QuestionCard"
import ResultCard from "./ResultCard"
import { _getQuestions } from "../../_DATA"
import { setQuestions } from "../../Redux/actions"
import { Switch } from "@material-ui/core"
import { formatData } from "./QuestionCard"
import { Link } from "react-router-dom"

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

    const handleViewChange = () =>
        setQuestionView(!questionView)

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <p>Unanswered</p>
                <Switch onChange={handleViewChange}/>
                <p>Answered</p>
            </div>
            { questions.map(q => {
                if (!questionView && answeredQuestions.includes(q.id)) {
                    return (
                        <Link to={{ pathname: `/question/${q.id}` }}>
                            <ResultCard card={q} />
                        </Link>
                    )
                } else if (questionView && !answeredQuestions.includes(q.id)) {
                    return (
                        <Link to={{ pathname: `/question/${q.id}` }}>
                            <QuestionCard card={q} />
                        </Link>
                    )
                }
                return <div />
            })}
        </div>
    )
}

export default Home
