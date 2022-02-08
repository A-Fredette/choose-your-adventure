import {createStore} from 'redux'
import appReducer from "./reducers";

export const initialState = {
    auth: {
        isAuthenticated: false,
        user: null
    },
    users: [
        { firstName: "Andrew", lastName: "Fredette", id: '7d2e0b1e-5221-4adf-83d5-a87f0185ae44' },
        { firstName: "Danya", lastName: "Shu", id: '2ceb3807-eb66-4f6d-b84f-fc522d933402' },
        { firstName: "Trevor", lastName: "Hall", id: '2ceb3807-eb66-4f6d-b84f-fc522d933404' },
        { firstName: "Kobe", lastName: "Bryant", id: '2ceb3807-eb66-4f6d-b84f-fc522d9332333' }
    ],
    cards: [
        { id:'4eb425e3-9a24-4fe2-8dc3-9a8cc990e668', author: '7d2e0b1e-5221-4adf-83d5-a87f0185ae44', optionOne: 'optionOne', optionTwo: 'optionTwo' }
    ],
    responses: [
        { by: '7d2e0b1e-5221-4adf-83d5-a87f0185ae44', card: '4eb425e3-9a24-4fe2-8dc3-9a8cc990e668', choice: 1 }
    ]
}

function configureStore() {

    return createStore(
        appReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
}

export default configureStore
