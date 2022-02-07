const initialState = {
    auth: {
        isAuthenticated: false,
        user: null
    },
    users: [
        { name: "Andrew", id: '7d2e0b1e-5221-4adf-83d5-a87f0185ae44' },
        { name: "Danya", id: '2ceb3807-eb66-4f6d-b84f-fc522d933402' },
        { name: "Trevor", id: '2ceb3807-eb66-4f6d-b84f-fc522d933404' },
        { name: "Kobe", id: '2ceb3807-eb66-4f6d-b84f-fc522d9332333' }
    ],
    todos: [
        { id: 0, text: 'Learn React', completed: true },
        { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
        { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
        status: 'All',
        colors: []
    }
}

export default initialState