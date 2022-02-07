import { initialState } from "./configureStore";
import AUTHENTICATE_USER from "./types";

function appReducer(state = initialState, action) {
    switch (action.type) {
        case 'AUTHENTICATE_USER':
            console.log('authenticating...')
            return {
                ...state,
                auth: { isAuthenticated: true, user: action.payload.user },
            }

        case 'LOGOUT_USER':
            console.log('logging out reducer...')
            return {
                ...state,
                auth: { isAuthenticated: false, user: null },
            }

        default:
            console.log('default hit')
            return state
    }
}

export default appReducer