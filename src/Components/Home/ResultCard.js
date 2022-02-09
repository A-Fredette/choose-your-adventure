import React from 'react'
import {useSelector} from "react-redux"
import {
    Card,
    CardActions,
    CardContent,
    Box,
    Typography
} from "@material-ui/core"

const ResultCard = () => {

    const answeredQuestions = useSelector(state => state.responses.filter(r => r.by === id).length)
    const created = useSelector(state => state.cards.filter(r => r.author === id).length)
    const authUser = useSelector(state => state.auth.user === id)

    return (
        <div style={{ width: '450px', display: 'block', margin: 'auto' }}>
            <Card>
                <CardContent>

                    <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Answered Questions: { answeredQuestions }
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Created Questions: {created}
                    </Typography>

                    <Box>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Total Score
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            { answeredQuestions + created }
                        </Typography>

                    </Box>

                </CardContent>
                <CardActions />
            </Card>
        </div>
    )
}

export default ResultCard

