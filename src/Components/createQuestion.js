import React, { useState } from 'react'
import {
    Button,
    Card,
    CardActions,
    CardContent,
    FormControl,
    TextField,
    Typography,
} from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { createQuestion } from "../Redux/actions";

const CreateQuestion = () => {
    const [newQuestion, setNewQuestion] = useState({ optionOne: '', optionTwo: '' })
    const dispatch = useDispatch()
    const author = useSelector(state => state.auth.user)

    const handleSubmitQuestion = () =>
        dispatch(createQuestion({...newQuestion, author, id: crypto.randomUUID() }))

    console.log(newQuestion)

    return (
        <div style={{ width: '450px', display: 'block', margin: 'auto' }}>
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Create New Question
                    </Typography>
                    <Typography variant="h5" component="div">
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Complete the question:
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Would you rather...
                    </Typography>

                        <FormControl required>
                            <TextField
                                labelId="option-one"
                                id="option-one"
                                label="Option One..."
                                placeholder="Option One..."
                                fullWidth
                                variant="outlined"
                                required
                                onChange={(e) =>
                                    setNewQuestion( state => ({...state, optionOne: e.target.value })
                                )}
                            />

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                ------ OR ------
                            </Typography>

                            <TextField
                                labelId="option-two"
                                id="option-two"
                                label="Option Two..."
                                placeholder="Option Two..."
                                fullWidth
                                variant="outlined"
                                required
                                onChange={(e) =>
                                    setNewQuestion( state => ({...state, optionTwo: e.target.value })
                                )}
                            />

                        </FormControl>

                </CardContent>
                <CardActions>
                    <Button onClick={handleSubmitQuestion}>
                        Submit Question
                    </Button>
                </CardActions>
            </Card>
        </div>

    );
}

export default CreateQuestion;
