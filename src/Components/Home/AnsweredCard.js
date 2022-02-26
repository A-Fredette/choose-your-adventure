import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import {
    Card,
    CardActions,
    CardContent
} from "@material-ui/core"
import { useNavigate } from "react-router-dom"
import { ResultCardStyles } from "./Styled"

const AnsweredCard = ({ card }) => {

    const { id, optionOne, optionTwo } = card

    const authUser = useSelector(state => state.auth.user.id)
    const authAnswers = useSelector(state => state.users.find(u => u.id === authUser).answers)
    const navigate = useNavigate()

    return (
        <ResultCardStyles>
            <Card>
                <CardContent>

                    <h2>
                        You Answered...Would You Rather?
                    </h2>

                    <h3>{optionOne.text}
                        {authAnswers[id] === 'optionOne' && <span> (your choice)}</span>}
                    </h3>

                    <h1> --- OR --- </h1>

                    <h3>{optionTwo.text}
                        {authAnswers[id] === 'optionTwo' && <span> (your choice)}</span>}
                    </h3>

                </CardContent>
                <CardActions />
                <p className="results-link" onClick={ () => navigate(`/questions/${id}`, { replace: true }) }>See Results</p>
            </Card>
        </ResultCardStyles>
    )
}

export default AnsweredCard
