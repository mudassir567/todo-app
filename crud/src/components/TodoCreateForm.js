import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const api_url = "http://localhost:8085/todos/";

function TodoCreateForm({ todoList, setTodoList }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;
    console.log(title, description);
    add_todo(title, description);
    e.target.reset();
  }
  
  const add_todo = async (title, description) => {
    try {
      const { data } = await axios.post(api_url, {
        title: title,
        description: description,
      });
      console.log(data);
      // const newTodos = []
      // for (let i = 0; i < todoList.length; i++) {
      //   const todo = todoList[i];
      //   newTodos.push(todo)
      // }
      // newTodos.push(data)
      const newTodos = [...todoList, data];
      // [[{...data}, {...data}]]
      // [{...data}, {...data}]

      console.log(newTodos);
      setTodoList(newTodos);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control type="text" name="title" placeholder="Enter Title" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
          
            placeholder="Description"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default TodoCreateForm;
