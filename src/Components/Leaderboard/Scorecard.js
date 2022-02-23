import React from 'react'
import { useSelector } from "react-redux"
import {
    Card,
    CardActions,
    CardContent,
    Box
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

                        <h4>
                            { name }
                        </h4>

                        <h4>
                            Answered Questions: { answers }
                        </h4>

                        <h4>
                            Created Questions: { created }
                        </h4>

                        <Box>

                            <h3>
                                Total Score
                            </h3>

                            <h2>
                                { totalScore }
                            </h2>

                        </Box>

                    </CardContent>
                    <CardActions />
                </Card>
            </ScorecardStyle>
        </div>

    )
}

export default Scorecard
