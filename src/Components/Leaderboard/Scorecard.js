import React from 'react'
import { useSelector } from "react-redux"
import {
    Card,
    CardActions,
    CardContent,
    Box,
    Typography
} from "@material-ui/core"
import { ScorecardStyle } from "./Styled"

const Scorecard = (
{ score: {
    answers, created, totalScore, name, id }
}) => {

    const authUser = useSelector(state => state.auth.user.id === id)

    return (
        <div style={{ width: '450px', display: 'block', margin: 'auto' }}>
            <ScorecardStyle authUser={authUser}>
                <Card>
                    <CardContent>

                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                            { name }
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Answered Questions: { answers }
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Created Questions: { created }
                        </Typography>

                        <Box>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Total Score
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                { totalScore }
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
