import {
    Routes,
    Route
} from "react-router-dom"
import React from 'react'
import SignIn from "../Components/SignIn/SignIn"
import QuestionResults from "../Components/QuestionResults/QuestionResults"
import Home from "../Components/Home/Home"
import { restrictAccess } from "../HOC/RestrictAccess"
import CreateQuestion from "../Components/CreateQuestion/CreateQuestion"
import Leaderboard from "../Components/Leaderboard/Leaderboard"

const AuthorizedHome = restrictAccess(Home)
const AuthorizedCreate = restrictAccess(CreateQuestion)
const AuthorizedResults = restrictAccess(QuestionResults)
const AuthorizedLeaderboard = restrictAccess(Leaderboard)

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                exact
                path='/'
                element={ <AuthorizedHome /> }
            />
            <Route
                path='/question/:questionId'
                element={ <AuthorizedResults /> }
            >
            </Route>
            <Route
                path='/add'
                element={ <AuthorizedCreate /> }
            >
            </Route>
            <Route
                path='/leaderboard'
                element={ <AuthorizedLeaderboard /> }
            >
            </Route>
            <Route path='/signin'
                element={ <SignIn /> }
            >
            </Route>
        </Routes>
    )
}

export default AppRoutes
