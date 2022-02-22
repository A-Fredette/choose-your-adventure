import {createStore} from 'redux'
import appReducer from "./reducers"

export const initialState = {
    auth: {
        isAuthenticated: false,
        user: null
    },
    users: [],
    questions: []
}

function configureStore() {

    return createStore(
        appReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

export default configureStore
