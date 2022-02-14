import { initialState } from "./configureStore"
const AUTHENTICATE_USER = 'AUTHENTICATE_USER'
const CREATE_CARD = 'CREATE_CARD'
const CREATE_RESPONSE = 'CREATE_RESPONSE'
const LOGOUT_USER = 'LOGOUT_USER'
const SET_QUESTIONS = 'SET_QUESTIONS'

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
            console.log('redux payload', action.payload)
            return {
                ...state,
                questions: action.payload,
            }

        case CREATE_CARD:
            const updatedCards = [...state.cards]
            updatedCards.push(action.payload)
            return {
                ...state,
                cards: updatedCards
            }

        case CREATE_RESPONSE:
            const updatedResponses = [...state.responses]
            updatedResponses.push(action.payload)
            return {
                ...state,
                responses: updatedResponses
            }

        default:
            return state
    }
}

export default appReducer
