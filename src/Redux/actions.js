import { _getQuestions, _getUsers } from "../_DATA"
import { formatData } from "../Components/Home/QuestionCard";

export const AUTHENTICATE_USER = 'AUTHENTICATE_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const CREATE_CARD = 'CREATE_CARD'
export const CREATE_RESPONSE = 'CREATE_RESPONSE'
export const SET_QUESTIONS = 'SET_QUESTIONS'
export const SET_USERS = 'SET_USERS'
export const LOADING_USERS_FAILURE = 'LOADING_USERS_FAILURE'
export const LOADING_USERS = 'LOADING_USERS'
export const LOADING_USERS_SUCCESS = 'LOADING_USERS_SUCCESS'
export const LOADING_QUESTIONS = 'LOADING_QUESTIONS'
export const LOADING_QUESTIONS_SUCCESS = 'LOADING_QUESTIONS_SUCCESS'
export const LOADING_QUESTIONS_FAILURE = 'LOADING_QUESTIONS_FAILURE'

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

export const loadingQuestions = () => ({
    type: LOADING_QUESTIONS
})

export const loadingQuestionsSuccess = () => ({
    type: LOADING_QUESTIONS_SUCCESS
})

export const loadingQuestionsFailure = error => ({
    type: LOADING_QUESTIONS_FAILURE,
    payload: error
})

export const loadingUsers = () => ({
    type: LOADING_USERS
})

export const loadingUsersFailure = error => ({
    type: LOADING_USERS_FAILURE,
    payload: error
})

export const loadingUsersSuccess = () => ({
    type: LOADING_USERS_SUCCESS
})

export const setUsers = users => ({
    type: SET_USERS,
    payload: users
})

export const getUsers = () => {
    return async (dispatch) => {
        dispatch(loadingUsers())

        await _getUsers()
            .then(dataUsers => {
                const arr = Object.entries(dataUsers)
                let processedUsers = []
                arr.map(u => processedUsers.push(u[1]))
                dispatch(setUsers(processedUsers))
                dispatch(loadingUsersSuccess())
            })
            .catch(error => {
                dispatch(loadingUsersFailure(error))
            })
    }
}

export const getQuestions = () => async dispatch => {
    dispatch(loadingQuestions())
    await _getQuestions()
        .then(questions => {
            const formattedQuestion = formatData(questions)
            dispatch(setQuestions(formattedQuestion))
            dispatch(loadingQuestionsSuccess())
        })
       .catch(error => {
           dispatch(loadingQuestionsFailure(error))
       })
}
