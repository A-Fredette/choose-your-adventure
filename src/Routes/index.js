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
import NotFound from "../Components/Notfound";

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
            />
            <Route
                path='/add'
                element={ <AuthorizedCreate /> }
            />
            <Route
                path='/leaderboard'
                element={ <AuthorizedLeaderboard /> }
            />
            <Route path='/signin'
                element={ <SignIn /> }
            />
            <Route path='*'
                   element={ <NotFound /> }
            />
        </Routes>
    )
}

export default AppRoutes
