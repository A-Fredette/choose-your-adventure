import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import QuestionCard from "./QuestionCard"
import ResultCard from "./ResultCard"
import { _getQuestions } from "../../_DATA"
import { setQuestions } from "../../Redux/actions"

const Home = () => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const userResponses = useSelector(state => state.responses.filter(r => r.by === user))
    const questions = useSelector(state => state.questions)

    useEffect(() => {
        _getQuestions()
            .then(questions => {
                const arr = Object.entries(questions)
                let processedQuestions = []
                arr.map(u => processedQuestions.push(u[1]))
                console.log('process questions', processedQuestions)

                dispatch(setQuestions(processedQuestions))
            })
            .catch(error => console.log(error))
    },[])


    return (
        <div>
            { questions.map(c => {
                // if (userResponses.some(r => r.card === c.id)) {
                //     return (
                //         <ResultCard
                //             card={c}
                //         />
                //     )
                // } else {
                    return (
                        <QuestionCard
                            card={c}
                        />
                    )
                }
            )}
        </div>
    )
}

export default Home
