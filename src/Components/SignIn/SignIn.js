import React, { useEffect, useState } from 'react'
import { Card, Select, MenuItem, CardContent, CardActions, Button, InputLabel } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { SignInStyles } from "./Styled"
import { authenticateUser, getUsers } from '../../Redux/actions'
import { useNavigate } from "react-router-dom"

function SignIn({ path }) {
    const [user, setUser] = useState(null)

    let navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    const handleSubmit = () => {
        dispatch(authenticateUser(user))
        navigate(path, { replace: true })
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div style={{ width: '450px', display: 'block', margin: 'auto' }}>
            <Card>
                <CardContent>
                    <h1>
                        Welcome to the Would You Rather App!
                    </h1>
                    <h3>
                    </h3>
                    <h3>
                        Please sign in to continue.
                    </h3>

                    <SignInStyles>
                            <InputLabel id="demo-simple-select-label">Select User</InputLabel>
                            <Select
                                id="select-user"
                                label="User"
                                placeholder="-- Select User --"
                                required
                                displayEmpty
                                onChange={(e) => setUser(e.target.value)}
                            >

                                { users.length > 0 && users.map(user =>
                                    <MenuItem key={ user.id} value={ user }>{ user.name }
                                        <img alt={`avatar of ${user.name}`} src={ user.avatarURL } style={{ width: '40px' }}/>
                                    </MenuItem>
                                )}

                            </Select>

                    </SignInStyles>

                </CardContent>
                <CardActions>
                    <Button onClick={handleSubmit}>
                        Log In
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default SignIn
