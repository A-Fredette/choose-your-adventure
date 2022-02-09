import React from 'react'
import {useSelector} from "react-redux"
import QuestionCard from "./QuestionCard"
import ResultCard from "./ResultCard"

const Home = () => {

    const cards = useSelector(state => state.cards)
    const user = useSelector(state => state.auth.user)
    const userResponses = useSelector(state => state.responses.filter(r => r.by === user))

    return (
        <div>
            { cards.map(c => {
                if (userResponses.some(r => r.card === c.id)) {
                    return (
                        <ResultCard
                            card={c}
                        />
                    )
                } else {
                    return (
                        <QuestionCard
                            card={c}
                        />
                    )
                }
            })}
        </div>
    )
}

export default Home
