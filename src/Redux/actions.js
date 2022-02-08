import AUTHENTICATE_USER from "./types.js"

export const authenticateUser = user => ({
    type: 'AUTHENTICATE_USER',
    payload: { user }
})

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})

export const createQuestion = card => ({
    type: 'CREATE_CARD',
    payload: card
})
