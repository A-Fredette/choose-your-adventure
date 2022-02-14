import React, {useEffect, useState} from 'react'
import {Card, Select, MenuItem, CardContent, Typography, CardActions, FormControl, Button, InputLabel  } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import styled from "styled-components"
import { authenticateUser } from '../../Redux/actions'
import { _getUsers } from "../../_DATA"

const SignInStyles = styled.div`
    width: auto;
  
  #select-user {
    width: 300px;
  }
`

function SignIn() {
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(authenticateUser(user))
    }

    console.log('SET USER:', user)

    useEffect(() => {
        _getUsers()
            .then(dataUsers => {
                const arr = Object.entries(dataUsers)
                let processedUsers = []
                arr.map(u => processedUsers.push(u[1]))

                setUsers(processedUsers)
            })
            .catch(error => console.log(error))
    },[])

    return (
        <div style={{ width: '450px', display: 'block', margin: 'auto' }}>
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Welcome to the Would You Rather App!
                    </Typography>
                    <Typography variant="h5" component="div">
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Please sign in to continue.
                    </Typography>

                    <SignInStyles>
                        <FormControl required>
                            <InputLabel id="demo-simple-select-label">Select User</InputLabel>
                            <Select
                                labelId="select-user"
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
                        </FormControl>

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
