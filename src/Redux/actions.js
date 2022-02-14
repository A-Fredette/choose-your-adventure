export const AUTHENTICATE_USER = 'AUTHENTICATE_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const CREATE_CARD = 'CREATE_CARD'
export const CREATE_RESPONSE = 'CREATE_RESPONSE'
const SET_QUESTIONS = 'SET_QUESTIONS'


export const authenticateUser = user => ({
    type: AUTHENTICATE_USER,
    payload: { user }
})

export const logoutUser = () => ({
    type: LOGOUT_USER
})

export const createQuestion = card => ({
    type: CREATE_CARD,
    payload: card
})

export const createResponse = response => ({
    type: CREATE_RESPONSE,
    payload: response
})

export const setQuestions = questions => ({
    type: SET_QUESTIONS,
    payload: questions
})
