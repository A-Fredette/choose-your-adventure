import React from 'react'
import {useSelector} from "react-redux"
import {
    Card,
    CardActions,
    CardContent,
    Box,
    Typography
} from "@material-ui/core"
import {ScorecardStyle} from "./Styled"

const Scorecard = ({ firstName, lastName, id }) => {

    const answeredQuestions = useSelector(state => state.responses.filter(r => r.by === id).length)
    const created = useSelector(state => state.cards.filter(r => r.author === id).length)
    const authUser = useSelector(state => state.auth.user === id)

    return (
        <div style={{ width: '450px', display: 'block', margin: 'auto' }}>
            <ScorecardStyle authUser={authUser}>
                <Card>
                    <CardContent>

                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                            { firstName + ' ' + lastName }
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
            </ScorecardStyle>
        </div>

    )
}

export default Scorecard
