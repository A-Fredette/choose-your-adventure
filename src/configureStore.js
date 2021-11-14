import { createStore } from 'redux'
import appReducer from './reducer'
import { initialState } from './reducer'


function configureStore() {

    const store = createStore(
        appReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store
}

export default configureStore

