import "./App.css";
import axios from "axios";
import { useState } from "react";
const api_url = "http://localhost:8085/todos/";

function Todos({ todoList, setTodoList }) {
  const fetch_todos = async () => {
    try {
      const { data } = await axios.get(api_url);
      setTodoList(data);
    } catch (err) {
      console.log(err);
    }
  };

  const delete_todos = async (todo_id) => {
    ///console.log(todo_id);
    try {
      const del_todos = await axios.delete(`${api_url}${todo_id}`);

      console.log(del_todos);

      const newtodos = todoList.filter((todo) => {
        //console.log(todo)
        return todo._id !== todo_id;
      });
      setTodoList(newtodos);

      console.log(newtodos);
    } catch (err) {
      console.log(err);
    }
  };

  // const ab = {
  //   a: 1,
  //   b: 2,
  // };

  // ab.a = 22;
  // console.log(ab);
  // console.log(showtodo);
  // showtodo.forEach((element) => {
  //   console.log(element._id)
  //   element._id =update_todo(todo_id)
  // });

  //looping the showtodo array

  //check the todo_id with the old todo_id
  // if yes
  //replace todo_title,desc with updated todo title,desc in return
  //else ignore

  const update_todo = async (todo_id, todo_title, todo_description) => {
    try {
      const updated_todo = await axios.put(`${api_url}${todo_id}`, {
        title: todo_title,
        description: todo_description,
      });
      console.log(updated_todo);

      const updating_todos = todoList.map((todo) => {
        if (todo._id === todo_id) {
          console.log(todo._id);
          console.log(todo_id);

          return updated_todo.data;
        } else {
          console.log("nooooooooo");
          console.log(todo);
          return todo;
        }
      });
      setTodoList(updating_todos);
      console.log(updating_todos);
    } catch (err) {
      console.log(err);
    }
  };

// first - when i click on edit of a todo it should be sent to  input filed
// then the submit button should changed to be edit
// and the todo should be updated on the basis of todo ids 
const handle_edit= async(todo_id)=>{
try {
  const edit_todo= todoList.find((todo) => 
    todo._id === todo_id 

  )   
  console.log(edit_todo.title)
  const hello =  edit_todo.title


}  
  
catch (err) {
  console.log(err)
  
}

}
  return (
    <>
      <div className="App">
        <button onClick={fetch_todos}> show todos </button>
       <ul>
          {todoList.map((todo) => (
            <li key={todo._id}>
              <h3> {todo.title}</h3>
              <button onClick={() => delete_todos(todo._id)}> DELETE </button>
              <button onClick={() => handle_edit(todo._id)}>EDIT</button>
              <h5> {todo.description}</h5>
            </li>
          ))}
        </ul>

        <button> show local todos</button>
      </div>
    </>
  );
}
export default Todos;
