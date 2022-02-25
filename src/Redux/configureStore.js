import { createStore, applyMiddleware, compose } from 'redux'
import thunk from "redux-thunk"
import appReducer from "./reducers"

export const initialState = {
    auth: {
        isAuthenticated: false,
        user: null
    },
    loadingUsers: false,
    loadingQuestions: false,
    users: [],
    questions: []
}

function configureStore() {

    return compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )(createStore)(appReducer, initialState)

}

export default configureStore
