import React from 'react'
import {useSelector} from "react-redux"
import QuestionCard from "./QuestionCard";

const Home = () => {

    const cards = useSelector(state => state.cards)

    return (
        <div>
            { cards.map(c =>
                <QuestionCard
                    card={c}
                />
            )}
        </div>
    )
}

export default Home
