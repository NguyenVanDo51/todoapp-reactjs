import { connect } from 'react-redux'
import { removeTodo, todoToggle } from '../actions'
import TodoList from '../components/TodoList'

// Tra ve cac todos phu thuoc voi filter (mac dinh la SHOW_ALL)
const getVisibleTools = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            return todos
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTools(state.todos, state.visibilityFilter),
        visibility: state.visibilityFilter
    }
}

// dinh nghia cac function dispatch cho connect nay
const mapDispatchToProps = dispatch => {

    return {
        onTodoClick: id => {
            console.log("onTodoClick")
            dispatch(todoToggle(id))
        },
        removeTodoClick: id => {
            dispatch(removeTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList