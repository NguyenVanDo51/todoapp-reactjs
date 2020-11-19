export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
    }
}

export const removeTodo = (removeId) => {
    return {
        type: 'REMOVE_TODO',
        removeId
    }
}

// action set filter (such as 'ALL', 'active', 'complete')
export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const todoToggle = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}