import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoCreateForm from "./components/TodoCreateForm";
// import {useState} from 'react'
// import axios from "axios";
import Todos from "./Todos";

import React, { useState } from "react";

function App() {
  const [todolist, setTodolist] = useState([]);

  return (
    <>
      <div className="App">
        <Todos todoList={todolist} setTodoList={setTodolist} />

        <TodoCreateForm todoList={todolist} setTodoList={setTodolist} />
        {/* <p>{todos.title}</p>  

      <button onClick={get_todo}> show todos  </button>
      <button onClick={create_todo}> create todo</button>
      <button onClick={update_todo}>    edit todo</button>
      <button onClick={delete_todo}>delete todo</button> */}
      </div>
    </>
  );
}

export default App;
