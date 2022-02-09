import { initialState } from "./configureStore";
import AUTHENTICATE_USER from "./types";

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'AUTHENTICATE_USER':
            return {
                ...state,
                auth: { isAuthenticated: true, user: action.payload.user },
            }

        case 'LOGOUT_USER':
            return {
                ...state,
                auth: { isAuthenticated: false, user: null },
            }

        case 'CREATE_CARD':
            const updatedCards = [...state.cards]
            updatedCards.push(action.payload)
            return {
                ...state,
                cards: updatedCards
            }

        case 'CREATE_RESPONSE':
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
