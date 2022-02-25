import React, { useState } from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import {createQuestion } from "../../Redux/actions"
import { _saveQuestion } from "../../_DATA"
import { useNavigate } from "react-router-dom"
import {CreateQuestionCardStyles} from "./styled";

const CreateQuestion = () => {
    const [newQuestion, setNewQuestion] = useState({ optionOne: '', optionTwo: '' })
    const [error, setError] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const author = useSelector(state => state.auth.user)

    const handleSubmitQuestion = () => {
        _saveQuestion({
            author: author.id,
            optionOneText: newQuestion.optionOne,
            optionTwoText: newQuestion.optionTwo
            })
            .then(res => {
                console.log('new questions', res)
                dispatch(createQuestion(res))
                setNewQuestion({ optionOne: '', optionTwo: '' })
                navigate("../", { replace: true })
            })
            .catch((error) => {
                    console.log(error)
                    setError(true)
                }
            )

    }

    return (
        <CreateQuestionCardStyles>
            <Card>
                <CardContent>
                    <h2>
                        Create New Question
                    </h2>
                    <h5>
                    </h5>
                    <h5>
                        Complete the question:
                    </h5>
                    <h5>
                        Would you rather...
                    </h5>
                        <TextField
                            id="option-one"
                            label="Option One..."
                            placeholder="Option One..."
                            variant="outlined"
                            required
                            onChange={(e) =>
                                setNewQuestion(
                                    state =>
                                        ({...state, optionOne: e.target.value })
                            )}
                        />

                        <h4>
                            ------ OR ------
                        </h4>

                        <TextField
                            id="option-two"
                            label="Option Two..."
                            placeholder="Option Two..."
                            variant="outlined"
                            required
                            onChange={(e) =>
                                setNewQuestion(
                                    state =>
                                        ({...state, optionTwo: e.target.value })
                            )}
                        />

                </CardContent>
                <CardActions>
                    <Button onClick={handleSubmitQuestion}>
                        Submit Question
                    </Button>
                </CardActions>
            </Card>
        </CreateQuestionCardStyles>
    )
}

export default CreateQuestion;
