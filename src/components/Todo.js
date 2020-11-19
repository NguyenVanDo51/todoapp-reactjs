import { ListGroupItem, Button } from 'react-bootstrap'

const Todo = ({ onTodoFinish, onRemoveTodo, id, completed, text }) => {
    return (
        <ListGroupItem
            className="my-1 d-flex justify-content-between"
            variant="primary"
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            <span>{text}</span>
            <div>
                <Button className="mr-2 btn-sm" onClick={() => onTodoFinish(id)}>Finish</Button>
                <Button className="btn-sm" onClick={() => onRemoveTodo(id)} >Delete</Button>
            </div>
        </ListGroupItem >
    )
}

export default Todo