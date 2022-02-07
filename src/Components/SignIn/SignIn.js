import React, { useState } from 'react'
import {Card, Select, MenuItem, CardContent, Typography, CardActions, FormControl, Button, InputLabel  } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from "styled-components"
import { authenticateUser } from '../../Redux/actions'

const SignInStyles = styled.div`
    width: auto;
  
  #select-user {
    width: 300px;
  }
`

function SignIn({ users }) {
    console.log(users)
    const [user, setUser] = useState({})
    const dispatch = useDispatch()

    const handleSubmit = () => {
        console.log(user)
        dispatch(authenticateUser(user))
    }


    return (
        <Card sx={{ minWidth: 275 }}>
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

                            { users.map(user =>
                                <MenuItem key={user.id} value={ user.id }>{ user.firstName + ' ' + user.lastName }</MenuItem>
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
    )
}

SignIn.propTypes = {
    users: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return { users: state.users }
}

export default connect(mapStateToProps)(SignIn)