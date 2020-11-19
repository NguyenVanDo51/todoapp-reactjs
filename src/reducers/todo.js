const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let newId = 1
            if (state.length > 0) {
                newId = state[state.length - 1].id + 1
            }
            return [
                ...state,
                {
                    id: newId,
                    text: action.text,
                    completed: false
                }
            ]
        case 'REMOVE_TODO':
            return state.filter(todo => (
                (todo.id !== action.removeId)
            ))

        case 'TOGGLE_TODO':
            return state.map(todo => (
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            ))
        default:
            return state
    }
}

export default todos