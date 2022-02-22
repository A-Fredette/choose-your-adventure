import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import {
    Card,
    CardActions,
    CardContent,
    Typography
} from "@material-ui/core"

const ResultCard = ({ card }) => {

    const { id, author, optionOne, optionTwo } = card
    const users = useSelector(state => state.users)
    const [answers, setAnswers] = useState([])

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
        <div style={{ width: '450px', display: 'block', margin: 'auto' }}>
            <Card>
                <CardContent>

                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {'Asked by ' + author}
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        Results
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {optionOne.text}
                        <p>{getAnswerCounts(answers).optionOne} Choices</p>
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {optionTwo.text}
                        <p>{getAnswerCounts(answers).optionTwo} Choices</p>
                    </Typography>


                </CardContent>
                <CardActions />
            </Card>
        </div>
    )
}

export default ResultCard
