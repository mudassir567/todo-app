import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoCreateForm from "./components/TodoCreateForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Todos from "./Todos";

import React, { useState } from "react";

function App() {
  const [todolist, setTodolist] = useState([]);
  const [currenttodo,setCurrenttodo]=useState(null)
  console.log(currenttodo)
  return (
    <>

<Container> 
      <Row>
        <Col xs={12} md={8}>
        <Todos todoList={todolist} setTodoList={setTodolist} currentTodo={currenttodo} setCurrentTodo={setCurrenttodo}/>        </Col>
              
      

        <Col xs={6} md={4}>
        <TodoCreateForm todoList={todolist} setTodoList={setTodolist} currentTodo={currenttodo} setCurrentTodo={setCurrenttodo}/>
        </Col>
        </Row>
        </Container>

    </>
  );
}

export default App;
