import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import {
    Card,
    CardActions,
    CardContent,
    Typography
} from "@material-ui/core"
import { useNavigate } from "react-router-dom";
import {QuestionCardStyles, ResultCardStyles} from "./Styled";

const ResultCard = ({ card }) => {

    const { id, author, optionOne, optionTwo } = card

    const users = useSelector(state => state.users)
    const authUser = useSelector(state => state.auth.user.id)
    const authAnswers = useSelector(state => state.users.find(u => u.id === authUser).answers)
    const [answers, setAnswers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const ans = users.map(u => u.answers[id]).filter(Boolean)
        setAnswers(ans)

    },[id, users])

    const getAnswerCounts = answers => {
        return {
            'optionOne': answers.filter(a => a === 'optionOne').length,
            'optionTwo': answers.filter(a => a === 'optionTwo').length
        }
    }

    return (
        <ResultCardStyles>
            <Card>
                <CardContent
                    onClick={ () => navigate(`/question/${id}`, { replace: true }) }
                >

                    <h1>
                        Results
                    </h1>

                    <h3 className="author">
                        {'Asked by ' + author}
                    </h3>

                    <h3>
                        <>
                            <span>A --></span> {optionOne.text}
                            <p>{getAnswerCounts(answers).optionOne} Choices {authAnswers[id] === 'optionOne'
                                && <span>(your choice)</span>}
                            </p>
                        </>

                    </h3>

                    <h3>
                        <span>B --></span> {optionTwo.text}
                        <p>{getAnswerCounts(answers).optionTwo} Choices {authAnswers[id] === 'optionTwo'
                            && <span>(your choice)</span>}
                        </p>

                    </h3>

                </CardContent>
                <CardActions />
            </Card>
        </ResultCardStyles>
    )
}

export default ResultCard
