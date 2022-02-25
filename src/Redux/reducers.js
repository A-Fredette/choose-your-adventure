import { initialState } from "./configureStore"
import {
    SET_USERS,
    SET_QUESTIONS,
    LOGOUT_USER,
    CREATE_RESPONSE,
    CREATE_CARD,
    LOADING_USERS,
    LOADING_USERS_FAILURE,
    AUTHENTICATE_USER,
    LOADING_USERS_SUCCESS,
    LOADING_QUESTIONS,
    LOADING_QUESTIONS_SUCCESS,
    LOADING_QUESTIONS_FAILURE
} from "./actions"

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

        case LOADING_USERS_FAILURE:
            return {
                ...state,
                loadingUsers: action.payload
            }

        case LOADING_USERS:
            return {
                ...state,
                loadingUsers: true
            }

        case LOADING_USERS_SUCCESS:
            return {
                ...state,
                loadingUsers: false
            }

        case LOADING_QUESTIONS_FAILURE:
            return {
                ...state,
                loadingQuestions: action.payload
            }

        case LOADING_QUESTIONS:
            return {
                ...state,
                loadingQuestions: true
            }

        case LOADING_QUESTIONS_SUCCESS:
            return {
                ...state,
                loadingQuestions: false
            }

        default:
            return state
    }
}

export default appReducer
