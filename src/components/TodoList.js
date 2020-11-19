import Todo from './Todo'
import { ListGroup } from 'react-bootstrap'

const TodoList = ({ todos, removeTodoClick, onTodoClick }) => {

    return (
        <div>
            <ListGroup>
                {todos.map(todo => (
                    <Todo key={todo.id} {...todo}
                        onTodoFinish={onTodoClick}
                        onRemoveTodo={removeTodoClick}
                    />
                ))}
            </ListGroup>
        </div>
    )

}

export default TodoList