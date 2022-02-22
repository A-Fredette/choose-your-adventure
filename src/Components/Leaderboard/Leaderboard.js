import React from 'react'
import {useSelector} from "react-redux"
import Scorecard from "./Scorecard";

const Leaderboard = () => {
    const users = useSelector(state => state.users)

    return (
        <div>

            { users.map(u =>
                <Scorecard
                    name={u.name}
                    id={u.id}
                />
            )}

        </div>
    )
}

export default Leaderboard
