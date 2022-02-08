import React from 'react'
import {useSelector} from "react-redux"
import Scorecard from "./Scorecard";

const Leaderboard = () => {
    const users = useSelector(state => state.users)

    return (
        <div>

            { users.map(u =>
                <Scorecard
                    firstName={u.firstName}
                    lastName={u.lastName}
                    id={u.id}
                />
            )}

        </div>
    )
}

export default Leaderboard
