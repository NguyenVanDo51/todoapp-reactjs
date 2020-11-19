import './App.css';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/visibleTodoList'
import Footer from './components/Footer'
import { Fragment } from 'react'
import { Container } from 'react-bootstrap'

function App(props) {
  return (
    <Fragment>
      <Container className="mt-5">
        <div className="w-50 mx-auto">
          <h1>Todo App</h1>
          <AddTodo />
          <Footer />
          <VisibleTodoList />
        </div>
      </Container>
    </Fragment>
  );
}

export default App;
