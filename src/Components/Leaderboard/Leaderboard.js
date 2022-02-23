import React from 'react'
import { useSelector } from "react-redux"
import Scorecard from "./Scorecard"

const Leaderboard = () => {
    let scores = []
    const users = useSelector(state => state.users)

    const getScores = scoreObject => Object.keys(scoreObject).length

    users.forEach(user => {
        const score = {
            answers: getScores(users.find(u => u.id === user.id).answers),
            created: getScores(users.find(u => u.id === user.id).questions),
            get totalScore() {
                return this.answers + this.created
            },
            name: user.name,
            id: user.id
        }
        scores.push(score)
    })

    scores.sort((a, b) => {
        return b.totalScore - a.totalScore
    })

    return (
        <>

            { scores.map(s =>
                <Scorecard
                    key={s.id}
                    score={s}
                />
            )}

        </>
    )
}

export default Leaderboard
