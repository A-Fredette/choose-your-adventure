import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {
    Card,
    CardActions,
    CardContent,
    Typography,
    RadioGroup,
    Radio, FormControl, FormLabel, FormControlLabel, FormHelperText
} from "@material-ui/core"
import Button from "@material-ui/core/Button";

const QuestionCard = ({ card }) => {
    const { id, optionOne, optionTwo, author } = card

    const [choice, setChoice] = useState(0)

    const authorInfo = useSelector(state => state.users.find(u => u.id === author))
    const dispatch = useDispatch()

    const handleResponseSubmit = () => {
        dispatch({id, choice})

    }

    return (
        <div style={{ width: '450px', display: 'block', margin: 'auto' }}>
                <Card>
                    <CardContent>

                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                            {authorInfo.firstName + ' ' + authorInfo.lastName + ' asks:'}
                        </Typography>

                        <FormControl sx={{ m: 3 }} variant="standard">
                            <FormLabel id="demo-error-radios">Would You Rather...</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz"
                                // value={value}
                                // onChange={setChoice(value)}
                            >
                                <FormControlLabel value="best" control={<Radio />} label={optionOne} />
                                <FormControlLabel value="worst" control={<Radio />} label={optionTwo} />
                            </RadioGroup>
                            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                                Submit
                            </Button>
                        </FormControl>

                    </CardContent>
                    <CardActions />
                </Card>
        </div>
    )
}

export default QuestionCard

