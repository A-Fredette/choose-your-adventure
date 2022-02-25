import React from 'react'
import { connect } from "react-redux"
import { useLocation } from "react-router-dom"
import SignIn from "../Components/SignIn/SignIn"

export function restrictAccess(WrappedComponent) {

    const Access = ({authedUser}) => {

        const { pathname } = useLocation()

        if (authedUser) {
            return (
                <WrappedComponent />
            )
        } else {
            return (
                <SignIn path={ pathname } />
            )

        }
    }

    const mapStateToProps = state => ({
        authedUser: state.auth.user
    })

    return connect(mapStateToProps)(Access)
}
