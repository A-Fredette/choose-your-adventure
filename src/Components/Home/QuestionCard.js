import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
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
import {createResponse} from "../../Redux/actions"

const QuestionCard = ({ card }) => {
    const { id, optionOne, optionTwo, author } = card

    const [choice, setChoice] = useState(0)
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const handleResponseSubmit = () => {
        dispatch(createResponse({by: user, card: id, choice}))
    }

    return (
        <div style={{ width: '450px', display: 'block', margin: 'auto' }}>
                <Card>
                    <CardContent>

                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                            {author + ' asks:'}
                        </Typography>

                        <FormControl sx={{ m: 3 }} variant="standard">
                            <FormLabel id="demo-error-radios">Would You Rather...</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="would-you-rather"
                            >
                                <FormControlLabel value="1" onChange={() => setChoice(1) } control={<Radio />} label={optionOne} />
                                <FormControlLabel value="2" onChange={() => setChoice(2) } control={<Radio />} label={optionTwo} />
                            </RadioGroup>
                            <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined"  onClick={handleResponseSubmit}>
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

