import { initialState } from "./configureStore"
const AUTHENTICATE_USER = 'AUTHENTICATE_USER'
const CREATE_CARD = 'CREATE_CARD'
const CREATE_RESPONSE = 'CREATE_RESPONSE'
const LOGOUT_USER = 'LOGOUT_USER'
const SET_QUESTIONS = 'SET_QUESTIONS'
const SET_USERS = 'SET_USERS'

function appReducer(state = initialState, action) {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return {
                ...state,
                auth: { isAuthenticated: true, user: action.payload.user },
            }

        case LOGOUT_USER:
            return {
                ...state,
                auth: { isAuthenticated: false, user: null },
            }

        case SET_QUESTIONS:
            return {
                ...state,
                questions: action.payload,
            }

        case SET_USERS:
            return {
                ...state,
                users: action.payload,
            }

        case CREATE_CARD:
            const updatedQuestions = [...state.questions]
            updatedQuestions.push(action.payload)
            return {
                ...state,
                questions: updatedQuestions
            }

        case CREATE_RESPONSE:
            const { questions, users } = action.payload
            return {
                ...state,
                questions,
                users
        }


        default:
            return state
    }
}

export default appReducer
