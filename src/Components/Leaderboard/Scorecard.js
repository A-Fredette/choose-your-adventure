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

const Scorecard = ({ name, id }) => {

    const answers = useSelector(state => state.users.find(u => u.id === id).answers)
    const created = useSelector(state => state.users.find(u => u.id === id).questions)
    const authUser = useSelector(state => state.auth.user.id === id)

    const getScores = scoreObject =>
        Object.keys(scoreObject).length

    return (
        <div style={{ width: '450px', display: 'block', margin: 'auto' }}>
            <ScorecardStyle authUser={authUser}>
                <Card>
                    <CardContent>

                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                            { name }
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Answered Questions: { getScores(answers) }
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Created Questions: { getScores(created) }
                        </Typography>

                        <Box>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Total Score
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                { getScores(answers) + getScores(created) }
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
