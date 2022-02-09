import React from 'react'
import { useSelector } from "react-redux"
import {
    Card,
    CardActions,
    CardContent,
    Typography
} from "@material-ui/core"

const ResultCard = ({ card }) => {

    const { id, author, optionOne, optionTwo } = card

    const authorInfo = useSelector(state => state.users.find(u => u.id === author))
    const user = useSelector(state => state.auth.user)
    const cardResponses = useSelector(state => state.responses.filter(r => r.card === id))

    const choiceOneTotal = cardResponses.filter(r => r.choice === 1).length
    const choiceTwoTotal = cardResponses.filter(r => r.choice === 2).length

    return (
        <div style={{ width: '450px', display: 'block', margin: 'auto' }}>
            <Card>
                <CardContent>

                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {'Asked by ' + authorInfo.firstName + ' ' + authorInfo.lastName}
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        Results
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {optionOne}
                        <p>{choiceOneTotal} Choices</p>
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                        {optionTwo}
                        <p>{choiceTwoTotal} Choices</p>
                    </Typography>


                </CardContent>
                <CardActions />
            </Card>
        </div>
    )
}

export default ResultCard
