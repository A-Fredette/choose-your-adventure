import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { QuestionCardStyles } from "./Styled"
import {
    Card,
    CardActions,
    CardContent,
    Typography,
    RadioGroup,
    Radio,
    FormControl,
    FormLabel,
    FormControlLabel
} from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { createResponse } from "../../Redux/actions"
import { _saveQuestionAnswer } from "../../_DATA"
import { useNavigate } from "react-router-dom";

export const formatData = objToFormat => {
    let formattedData = []
    Object.entries(objToFormat).map(u => formattedData.push(u[1]))

    return formattedData
}

const QuestionCard = ({ card }) => {
    const { id, optionOne, optionTwo, author } = card

    const [choice, setChoice] = useState('')
    const [error, setError] = useState(false)
    const user = useSelector(state => state.auth.user.id)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleResponseSubmit = () => {
        _saveQuestionAnswer({ authedUser: user, qid: id, answer: choice })
            .then(res => {
                const questions = formatData(res.questions)
                const users = formatData(res.users)
                dispatch(createResponse({ questions, users }))
                navigate(`/question/${id}`, { replace: true })
            })
            .catch((error) => {
                console.log(error)
                setError(true)
                }
            )
    }

    return (
        <QuestionCardStyles>
                <Card className="elevation7">
                    <CardContent>
                        { error
                            ? (
                                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                                    There was an error saving your response, please try again.
                                </Typography>
                            ) : (
                                <>
                                    <h3>
                                        {author + ' asks:'}
                                    </h3>

                                    <FormControl sx={{ m: 3 }} variant="standard">
                                        <FormLabel id="demo-error-radios">Would You Rather...</FormLabel>
                                        <RadioGroup aria-labelledby="demo-error-radios" name="would-you-rather">
                                            <FormControlLabel value="1"
                                                onChange={() => setChoice('optionOne') } control={<Radio />} label={optionOne.text} />
                                            <FormControlLabel value="2"
                                                onChange={() => setChoice('optionTwo') } control={<Radio />} label={optionTwo.text} />
                                        </RadioGroup>
                                        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined"
                                            onClick={ handleResponseSubmit }
                                        >
                                            Submit
                                        </Button>
                                    </FormControl>
                                </>
                            )
                        }
                    </CardContent>
                    <CardActions />
                    <p className="results-link" onClick={ () => navigate(`/question/${id}`, { replace: true }) }>See Results</p>
                </Card>
        </QuestionCardStyles>
    )
}

export default QuestionCard
