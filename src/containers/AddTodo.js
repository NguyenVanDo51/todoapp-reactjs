import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Form, Button } from 'react-bootstrap'

let AddTodo = ({ dispatch }) => {
    let input
    return (
        <div>
            <Form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <Form.Group>
                    <Form.Control
                        ref={node => {
                            input = node
                        }}
                    />
                </Form.Group>

                <Form.Group>
                    <Button type="submit">Add todo</Button>
                </Form.Group>

            </Form>
        </div>
    )
}


AddTodo = connect()(AddTodo)

export default AddTodo