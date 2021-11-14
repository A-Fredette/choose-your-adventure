import React from 'react'
import { Card, CardTitle, Button, CardText } from 'reactstrap';
import {useState} from 'react'

const users = [
    { name: 'asfd'},
    { name: 'asdfa'},
]

function SignIn(props) {
    const [user, setUser] = useState()

    const handleChange = (e) => {
        console.log('set user', e)
        setUser(e)
    }

    return (
        <div>
            <Card>
                <CardTitle>Would You Rather</CardTitle>
                <CardText>The amazing game for boundless entertainment.</CardText>
                <form
                    onChange={e => handleChange(e)}
                >
                    <select>
                        {users.map(user => (
                            <option>{user.name}</option>
                        ))}
                    </select>
                </form>
            </Card>

        </div>
    )
}

export default SignIn