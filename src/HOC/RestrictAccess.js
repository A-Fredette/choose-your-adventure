import React from 'react'
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

export function restrictAccess(WrappedComponent) {

    const Access = ({authedUser}) => {
        if (authedUser) {
            return (
                <>
                    <WrappedComponent />
                </>
            )
        } else {
            return (
                <Navigate to="/signin" />
            )

        }
    }

    const mapStateToProps = state => ({
        authedUser: state.auth.user
    })

    return connect(mapStateToProps)(Access)
}
