import {createStore} from 'redux'
import appReducer from "./reducers"

export const initialState = {
    auth: {
        isAuthenticated: false,
        user: null
    },
    users: [
        { firstName: "Andrew", lastName: "Fredette", id: '7d2e0b1e-5221-4adf-83d5-a87f0185ae44' },
        { firstName: "Danya", lastName: "Shu", id: '2ceb3807-eb66-4f6d-b84f-fc522d933402' },
        { firstName: "Jonathan", lastName: "Fredette", id: '2ceb3807-eb66-4f6d-b84f-fc522d933404' },
        { firstName: "Quin", lastName: "Grim", id: '2ceb3807-eb66-4f6d-b84f-fc522d9332333' }
    ],
    cards: [
        { id:'4eb425e3-9a24-4fe2-8dc3-9a8cc990e668', author: '7d2e0b1e-5221-4adf-83d5-a87f0185ae44', optionOne: 'Play every instrument at a pro level', optionTwo: 'Be able to speak every language in the world' },
        { id:'9930e3a6-dc04-4ff0-abdc-100ed6318ea3', author: '2ceb3807-eb66-4f6d-b84f-fc522d933402', optionOne: 'Have a million dollars', optionTwo: 'Always feel universal love' },
        { id:'ad16040f-b6ff-4dc8-b698-fc463b26fb1b', author: '2ceb3807-eb66-4f6d-b84f-fc522d9332333', optionOne: 'Write a best selling novel', optionTwo: 'Crush the stock market' },
        { id:'628811e9-d51d-4f1f-a078-2092c83f897a', author: '2ceb3807-eb66-4f6d-b84f-fc522d933404', optionOne: 'Be surrounded by incredible community', optionTwo: 'Teach the world how to love' },
    ],
    questions: [],
    responses: [
        { by: '7d2e0b1e-5221-4adf-83d5-a87f0185ae44', card: '4eb425e3-9a24-4fe2-8dc3-9a8cc990e668', choice: 1 },
        { by: '2ceb3807-eb66-4f6d-b84f-fc522d933404', card: '628811e9-d51d-4f1f-a078-2092c83f897a', choice: 1 }
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
