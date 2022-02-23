import React, {useEffect, useState} from 'react'
import {Card, Select, MenuItem, CardContent, Typography, CardActions, FormControl, Button, InputLabel  } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import styled from "styled-components"
import {authenticateUser, setUsersRedux } from '../../Redux/actions'
import { _getUsers } from "../../_DATA"
import { useNavigate } from "react-router-dom"

const SignInStyles = styled.div`
    width: auto;
  
  #select-user {
    width: 300px;
  }
`

function SignIn() {
    let navigate = useNavigate()

    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(authenticateUser(user))
        navigate("../", { replace: true })
    }

    useEffect(() => {
        _getUsers()
            .then(dataUsers => {
                const arr = Object.entries(dataUsers)
                let processedUsers = []
                arr.map(u => processedUsers.push(u[1]))

                setUsers(processedUsers)
                dispatch(setUsersRedux(processedUsers))
            })
            .catch(error => console.log(error))
    },[])

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
